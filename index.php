<?php
session_start();
require_once 'app/Application.php';

/**
 * redirects the browser to the new url
 * 
 * @param string $url url of redirect target
 * @return void
 */

$app = new Application(include 'app/config/application.config');
$app->setConfig($_GET, Application::MERGE);

/**
*   matchroute function
*   
*   example: /report/list/:id/:hash  --> path /report/list and pass parameters :id and :hash
**/
if( isset($_GET['opt']) && $app->matchRoute($_GET['opt'], '/report/list/:id/:hash') ) {
    $ctrl = new  ReplaceWithControllerHere($app);
    $ctrl->listId();
    return true;
    } 
if( isset($_GET['opt']) && $app->matchRoute($_GET['opt'], 'language/select/:lang') ) {
    $_SESSION['lang'] = $app->getHTTPRequestParameter('lang');
    if( $_SESSION['lang'] == 'en' ) {
        $app->getTranslator()->setLocale('en');
        include 'en/homepage_en.php';
    } else {
        $app->getTranslator()->setLocale('pt');
        include 'homepage.php';
        }
    return true;
    }
        
    include 'homepage.php';
          
?>