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
  
  <title>BLUEMED - Our Services</title>
  <meta name="description" content="BLUEMED - We focus on outsourcing of pharmaceutical product manufacturing; Products Licencing; Import and representaion of foreign brands in Portugal; Comercial and logistic services, consulting. ">
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
            
            <div class="row">  
                <div class="span3">
                    <div class="tabbable tabs-left">
                        <ul class="nav nav-tabs" id="quemsomosmenu">
                            <li class="active"><a href="#tabquemsomos_en" data-toggle="tab">Description</a></li>
                            <li><a href="#tabmissao_en" data-toggle="tab">Values and Mission statement</a></li>
                        </ul>
                    </div>
                </div>
                <div class="span8">    
                    <div class="tab-content">
                        <div class="tab-pane active" id="tabquemsomos_en">   
                        <p class="lead">BLUEMED is a Portuguese company focused on the Pharmaceutical and Health Industry.</p>
                        <strong>How can we help you:</strong>
                        <p>
                        <ul>
                            <li>Consultancy/ preparation/ submission and follow-up of marketing authorization (MAA).</li>
                            <li>Licencing of pharmaceutical activities.</li>
                            <li>Request of authorization for manufacturing and to import/export.</li>
                            <li>Import and representation of foreign brands.</li>
                            <li>Logistics services</li>
                            <li>Preparation, translation and revision of the SPC, PIL, and / or labelling.</li>
                        </ul>
                        </p>                        
                        </div>    
                        <div class="tab-pane" id="tabmissao_en">
                            <p class="lead">Our Mission and Values</p>
                            <strong>Our mission is to create value for customers, employees and shareholders:</strong>
                            <p>
                            <ul>
                                <li>Working with pleasure and ambition;</li>
                                <li>innovation and competitiveness;</li>
                                <li>promoting respect for the principles of ethics, legality and sustainability.</li>
                            </ul>
                            </p>
                            <strong>Our sustainability practices are guided by the following principles:</strong>
                            <p>
                            <ul>
                                <li>Customer focus;</li>
                                <li>Teamwork;</li>
                                <li>Entrepreneurship fruitful results-oriented;</li>
                                <li>Individual development and enhancement;</li>
                                <li>Innovation and continuous improvement;</li>
                                <li>Safety and environment;</li>
                                <li>Integrity, transparency and legality.</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                </div>         
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
    
  <script type="text/javascript">
      $('#presentation').addClass('active');
  </script>
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