<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="pt"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8" lang="pt"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9" lang="pt"> <![endif]-->
<!--[if gt IE 8]> <html class="no-js" lang="pt"> <![endif]-->
<head>
  <meta charset="utf-8">

  <?php include "common_header.html" ?>
  <meta http-equiv="content-language" content="en-UK">
  
  <title>BLUEMED - Extranet</title>
  <meta name="description" content="BLUEMED - Access to the Extranet">
</head>
<body>
<div role="main">
  <header>
  <nav>
      <?php include "main_menu.html" ?>
  </nav>
  </header>
  <div id="content" class="container-fluid">
   <section>
        <!-- Main hero unit for a primary marketing message or call to action -->
        <div class="hero-unit">
            <p><h4>Access to the Extranet</h4>
            <p><h4>The access to the Extranet is only available in the Portuguese version of the site.</h4>            
        </div>
   </section>

   <?php include "common_footer_en.html" ?>
      
  </div>      
</div>

  <!-- JavaScript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script type="text/javascript" src="/js/libs/jquery-1.7.1.min.js"><\/script>')</script>

  <!-- scripts concatenated and minified via build script -->
  <script type="text/javascript" src="/js/plugins.js"></script>
  <script type="text/javascript" src="/js/script.js"></script>
  <script type="text/javascript" src="/js/bootstrap-tab.js"></script>  
  
  <!-- end scripts -->
  
  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7]>
    <p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p>
  <![endif]-->

  <!-- Asynchronous Google Analytics snippet. Change UA-XXXXX-X to be your site's ID.
       mathiasbynens.be/notes/async-analytics-snippet -->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-9038842-8']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</body>
</html>