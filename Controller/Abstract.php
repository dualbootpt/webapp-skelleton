<?php

/**
 * Controler Abstract Class
 *
 * @author romualdo <paulo.romualdo at dualboot.pt>
 */
abstract class Controller_Abstract {
    
    /**
     *
     * Must have a Model
     * 
     * @var Model_Abstract 
     */
    private $_model;

    /**
     *
     * Must have an Application
     * 
     * @var Application_Abstract 
     */
    private $_app;

    /**
     * 
     * Returns the stored Model
     * 
     * @return ModelAbstract
     */
    public function getModel() {

       return $this->_model;
    }

    /**
     * 
     * Returns the stored Application
     * 
     * @return Application
     */
    public function getApp() {

       return $this->_app;
    }
    
    
    /**
     * 
     * Stores a new Model
     * 
     * @return ModelAbstract
     */
    public function setModel($model) {

       $this->_model = $model;
       return $this->_model;
    }

    /**
     * 
     * Stores a new Application reference
     * 
     * @return Application
     */
    public function setApp($app) {

       $this->_app = $app;
       return $this->_app;
    }
}

?>
