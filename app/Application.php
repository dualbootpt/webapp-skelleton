<?php
/**
 * 
 * Based on Zend_Application
 * 
 */
require_once 'app/Autoloader.php';


class Application
{

    const MERGE = TRUE;
    const REPLACE = FALSE;

    /**
     * Implements access control
     * 
     * @var Model_AccessControl 
     */
    private $_accessControll;
    /**
     * Flattened (lowercase) option keys
     *
     * @var array
     */
    private $_optionKeys = array();

    /**
     * Options for Application
     *
     * @var array()
     */
    private $_options = array();

    /**
     *
     * Parameters associated to the matched route
     * 
     * @var array()
     */
    private $_parameters = array();
    
    /**
     *
     * @var Zend_Translate
     */
    private $_translator;
    
    /**
     * Stores the last known error message
     * 
     * @var type String errorMessage
     */
    private static $_errorMessage = "";
    
    /**
     * Constructor
     *
     * Initialize application. Potentially initializes include_paths, PHP settings, and bootstrap class.
     *
     * @param  string|array|Zend_Config $options String path to configuration file, or array of configuration options
     * @throws Exception When invalid options are provided
     * @return void
     */
    public function __construct($options = null) {
        
        new Autoloader(array('Model', 'Controller', 'Email', 'Bcrypt'));
        
        if (null == $options) {
            $options = array();
        }
        
        if(!is_array($options)) {
            throw new Exception('Invalid options provided; must be an array');
        }
        
        $this->setConfig($options, self::REPLACE);
        $this->setConfig(include 'app/config/local.config.php', Application::MERGE);
               
        $dbAdapter = new Zend_Db_Adapter_Pdo_Mysql($this->getConfigOption('db'));
        $this->_accessControll = new Model_AccessControl($dbAdapter);

        $this->_translator = new Zend_Translate(
                array(
                    'adapter' => 'gettext',
                    'content' => 'locale/en/messages.mo',
                    'locale' => 'en'
                )
                );
        $this->_translator->addTranslation(
                array(
                    'adapter' => 'gettext',
                    'content' => 'locale/pt/default.mo',
                    'locale' => 'pt'
                )
                );
        
        /*
         * Define the default language
         */
        if(!isset($_SESSION['lang'])) {
            $acceptedLangs = explode(';', $_SERVER['HTTP_ACCEPT_LANGUAGE']);
            $defaultLang = (explode(',', $acceptedLangs[0]));
            if( count($defaultLang) > 1 ){
                $_SESSION['lang']=$defaultLang[1];
                } else {
                    $_SESSION['lang']=$defaultLang[0];
            }
        }
        
        if( $_SESSION['lang'] == 'en' ) {
            $this->_translator->setLocale($_SESSION['lang']);
            } else {
                $this->_translator->setLocale('pt');
                }
        
   }

   public static function redirect($url){
    if (headers_sent()){
      die('<script type="text/javascript">window.location=\'' . $url . '\';</script>');
    }else{
      header('Location: ' . $url);
      die();
    }    
}
   
    /**
     * Set application options
     * if $add=true true appends options else replaces options array by the new one
     *
     * @param  array $options
     * @param  bool  $add if true appends options else replaces options array by the new one
     * @return Application
     */
    public function setConfig(array $newOptions, $add=  self::MERGE)
    {
        if(is_array($newOptions)) {
            if(!$add) {
                $this->_options = array();
                $this->_optionKeys = array();                
            }

            $newOptions = array_change_key_case($newOptions, CASE_LOWER);
                                    
            $this->_options = $this->mergeConfig($this->_options, $newOptions);

            $this->_optionKeys = array_merge($this->_optionKeys, array_keys($this->_options));    
        }
        
        return $this;
    }

    /**
     * Retrieve application options (for caching)
     *
     * @return array
     */
    public function getConfig()
    {
        return $this->_options;
    }

    /**
     * Is an option present?
     *
     * @param  string $key
     * @return bool
     */
    public function hasConfigOption($key)
    {
        return in_array(strtolower($key), $this->_optionKeys);
    }

    /**
     * Retrieve a single option
     *
     * @param  string $key
     * @return mixed
     */
    public function getConfigOption($key)
    {
        if ($this->hasConfigOption($key)) {
            return $this->_options[$key];
        }
        return null;
    }

    /**
     * Merge options recursively
     *
     * @param  array $array1
     * @param  mixed $array2
     * @return array
     */
    public function mergeConfig(array $array1, $array2 = null)
    {
        if (is_array($array2)) {
            foreach ($array2 as $key => $val) {
                if (is_array($array2[$key])) {
                    $array1[$key] = (array_key_exists($key, $array1) && is_array($array1[$key]))
                                  ? $this->mergeConfig($array1[$key], $array2[$key])
                                  : $array2[$key];
                } else {
                    $array1[$key] = $val;
                }
            }
        }
        return $array1;
    }

    /**
     * Set PHP configuration settings
     *
     * @param  array $settings
     * @param  string $prefix Key prefix to prepend to array values (used to map . separated INI values)
     * @return Zend_Application
     */
    public static function setPhpSettings(array $settings, $prefix = '')
    {
        foreach ($settings as $key => $value) {
            $key = empty($prefix) ? $key : $prefix . $key;
            if (is_scalar($value)) {
                ini_set($key, $value);
            } elseif (is_array($value)) {
                $this->setPhpSettings($value, $key . '.');
            }
        }
        return $this;
    }

    /**
     * Set include path
     *
     * @param  array $paths
     * @return Zend_Application
     */
    public static function setIncludePaths(array $paths)
    {
        $path = implode(PATH_SEPARATOR, $paths);
        set_include_path($path . PATH_SEPARATOR . get_include_path());
        return $this;
    }
    
    /**
     * 
     * Verifies if the $request url matches the $route url. Stores parameters on $parameters.
     * e.g. $request = user/list/5 matches $route = /user/list/:id and returns $parameters[id] = 5
     * 
     * @param type $request
     * @param type $route
     * @return boolean
     */
    public function matchRoute($request, $route) {

    $requestElements = explode('/', $request);
    // .htaccess does not include the / at the begining of the request and the $route does so we need to make them equivalent
    $route = substr($route,0,1) == '/' ? substr($route,1) : $route;
    $routeElements = explode('/', $route);

    if( count($requestElements) == count($routeElements) ) {        
        reset($requestElements);
        foreach( $routeElements as $element ) {
            if( substr($element, 0, 1) == ':' ) {
                $this->_parameters[substr($element, 1)] = current($requestElements);
            } else {
                if( $element != current($requestElements) ) {
                    //echo '<br><b>Route </b><i>' . $route . '</i><b> does not Match </b><i>' . $request . '</i>';
                    return false;
                }
            }
            next($requestElements);
        }
        //echo '<br><b>Route </b><i>' . $route . '</i><b> Matches </b><i>' . $request . '</i>';
        return true;
    } else {
        //echo '<br><b>Route </b><i>' . $route . '</i><b> does not Match </b><i>' . $request . '</i>';
        return false;
        }
    }
    
    /**
     * 
     * Returns the corresponding parameter matched on the route
     * 
     * @return value
     */
    public function getHTTPRequestParameter($param) {
        
        return (isset($this->_parameters[$param]) ? $this->_parameters[$param] : null);
    }
    
    public function getTranslator() {
        
        return $this->_translator;
    }

    /**
     * 
     * Helper Function - Generates the HTML markup for the language selection icon
     * 
     */
    public function languageSelector() {
        
        $flags = $this->getConfigOption('flagicons');
        if( $_SESSION['lang'] == 'en' ) {
            $imgURL = $flags['pt'];
            $altLang = 'pt';
        } else {
                $imgURL = $flags['en'];
                $altLang = 'en';
            }
        return '<a href="/language/select/' . $altLang . '"><img alt="seleção de idioma" src="' . $imgURL . '"/></a>';
    }
    
    /**
     * Returns the Class responsible for the access features
     * 
     * @return type AccessControll Class
     */
    public function getAccessControll() {
        return $this->_accessControll;
    }
    
    /**
     * Set the global error message
     * 
     * @param type String $msg
     */
    public static function setErrorMessage($msg) {
        self::$_errorMessage = $msg;
    }
    
    /**
     * Returns the last known error message
     * 
     * @return type String errorMessage
     */
    public static function getErrorMessage() {
        return self::$_errorMessage;
    }
}
