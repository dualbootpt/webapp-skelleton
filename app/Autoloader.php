<?php

/**
 * Implements the getInstance static method
 *
 * @author romualdo <paulo.romualdo at dualboot.pt>
 */
class Autoloader {
    
    private $_searchPath;
    
    public function __construct(Array $searchPath) {
        if(is_array($searchPath)) {
            $this->_searchPath = $searchPath;
            array_push($this->_searchPath, '.');
            } else {
                $this->_searchPath = array();
              }
            
        spl_autoload_register(array($this, 'myDefaultAutoloader'));
    }
    
    /**
     * Default Autoloader
     * Looks up for the Classname and includes it if found
     * 
     * @param string $className name of the class to include
     * 
     * @return bool
     */
    public function myDefaultAutoloader($className) {
        if(str_replace('_', '/', $className) == $className) {
            $files = array( $className . '.php');
        } else {
            $files = array(
                        $className . '.php',
                        str_replace('_', '/', $className) . '.php'
                     );
            }
        foreach ($files as $file) {
                     if(file_exists($file)) {
                         include_once $file;
                         return true;
                     }
                 }
        foreach ($this->_searchPath as $path){
            foreach ($files as $file) {
                $includeFile = "$path/$file";
                if (file_exists($includeFile)) {
                    include_once $includeFile;
                    return true;
                }
            }
        }
        return false;
    }
       
}
?>
