


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-validation/additional-methods.js at 1.11.1 · jzaefferer/jquery-validation</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe3.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="1811049" name="octolytics-actor-id" /><meta content="dualbootpt" name="octolytics-actor-login" /><meta content="3e020fd818287a5e672c6a4795ee64b478b705cc0fafac5d741b88eabffd7bf6" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="izRhpbBHbCE1hzhQJXEoTcSeVYJFKQB2YA+ESAAd6d0=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-c6ca95663cba6496fe7a5bdd98671b82cd956df3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-71386ba60dc4794e755db985b31f4dfc74dcd99d.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-eae23340ab2a6ba722166712e699c87aaf60ad8f.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-18b6034238e565024b1655d9ae19d5203046e4cf.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="307764eea59784fdc9722d8eeaca7f02">

        <link data-pjax-transient rel='permalink' href='/jzaefferer/jquery-validation/blob/3b39aec630e2ecd336bc36d457d1a645bd91660f/additional-methods.js'>
  <meta property="og:title" content="jquery-validation"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/jzaefferer/jquery-validation"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="jquery-validation - jQuery Validation Plugin"/>

  <meta name="description" content="jquery-validation - jQuery Validation Plugin" />

  <meta content="52585" name="octolytics-dimension-user_id" /><meta content="jzaefferer" name="octolytics-dimension-user_login" /><meta content="648414" name="octolytics-dimension-repository_id" /><meta content="jzaefferer/jquery-validation" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="648414" name="octolytics-dimension-repository_network_root_id" /><meta content="jzaefferer/jquery-validation" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jzaefferer/jquery-validation/commits/1.11.1.atom" rel="alternate" title="Recent Commits to jquery-validation:1.11.1" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/jzaefferer/jquery-validation/notifications" class="notification-indicator tooltipped downwards contextually-unread" title="You have unread notifications in this repository">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="dualbootpt"
      data-repo="jzaefferer/jquery-validation"
      data-branch="1.11.1"
      data-sha="c13188fc9b0a4ab747cec5cd60790b49cfb632a1"
  >

    <input type="hidden" name="nwo" value="jzaefferer/jquery-validation" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/dualbootpt" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/bba3c5e08d587a60a5f3aa9c796a246d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> dualbootpt
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            aria-label="Account settings "
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="jzaefferer/jquery-validation">This repository</span>
    </li>
    <li>
      <a href="/jzaefferer/jquery-validation/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="izRhpbBHbCE1hzhQJXEoTcSeVYJFKQB2YA+ESAAd6d0=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="648414" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/jzaefferer/jquery-validation/watchers">
          228
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-unwatch"></span>
          Unwatch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container on">
  <a href="/jzaefferer/jquery-validation/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/jzaefferer/jquery-validation/star" class="minibutton with-count js-toggler-target star-button unstarred upwards " title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/jzaefferer/jquery-validation/stargazers">2,971</a>
</div>

  </li>


        <li>
          <a href="/jzaefferer/jquery-validation/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/jzaefferer/jquery-validation/network" class="social-count">878</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/jzaefferer" class="url fn" itemprop="url" rel="author"><span itemprop="title">jzaefferer</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/jzaefferer/jquery-validation" class="js-current-repository js-repo-home-link">jquery-validation</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/jzaefferer/jquery-validation/tree/1.11.1" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jzaefferer/jquery-validation/tree/1.11.1">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/jzaefferer/jquery-validation/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /jzaefferer/jquery-validation/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>202</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/jzaefferer/jquery-validation/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /jzaefferer/jquery-validation/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>31</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/jzaefferer/jquery-validation/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /jzaefferer/jquery-validation/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/jzaefferer/jquery-validation/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /jzaefferer/jquery-validation/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/jzaefferer/jquery-validation/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /jzaefferer/jquery-validation/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/jzaefferer/jquery-validation.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jzaefferer/jquery-validation.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:jzaefferer/jquery-validation.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:jzaefferer/jquery-validation.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/jzaefferer/jquery-validation" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jzaefferer/jquery-validation" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>


  <a href="github-windows://openRepo/https://github.com/jzaefferer/jquery-validation" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/jzaefferer/jquery-validation/archive/1.11.1.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:2c903be4929f834c235a4220036cfc0c -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:2c903be4929f834c235a4220036cfc0c -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/jzaefferer/jquery-validation/find/1.11.1" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="1.11.1">
    <span class="octicon octicon-tag"></span>
    <i>tag:</i>
    <span class="js-select-button">1.11.1</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jzaefferer/jquery-validation/blob/gh-pages/additional-methods.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" data-skip-pjax="true" rel="nofollow" title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jzaefferer/jquery-validation/blob/master/additional-methods.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jzaefferer/jquery-validation/blob/pr/767/additional-methods.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="pr/767" data-skip-pjax="true" rel="nofollow" title="pr/767">pr/767</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jzaefferer/jquery-validation/blob/sauce-testing/additional-methods.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="sauce-testing" data-skip-pjax="true" rel="nofollow" title="sauce-testing">sauce-testing</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jzaefferer/jquery-validation/blob/1.11.1/additional-methods.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.11.1" data-skip-pjax="true" rel="nofollow" title="1.11.1">1.11.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jzaefferer/jquery-validation/blob/1.11.0/additional-methods.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.11.0" data-skip-pjax="true" rel="nofollow" title="1.11.0">1.11.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jzaefferer/jquery-validation/blob/1.10.0/additional-methods.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.10.0" data-skip-pjax="true" rel="nofollow" title="1.10.0">1.10.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jzaefferer/jquery-validation/blob/1.9.0/additional-methods.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.9.0" data-skip-pjax="true" rel="nofollow" title="1.9.0">1.9.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jzaefferer/jquery-validation/blob/1.8.1/additional-methods.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.8.1" data-skip-pjax="true" rel="nofollow" title="1.8.1">1.8.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jzaefferer/jquery-validation/blob/1.8.0pre/additional-methods.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.8.0pre" data-skip-pjax="true" rel="nofollow" title="1.8.0pre">1.8.0pre</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jzaefferer/jquery-validation/blob/1.8.0/additional-methods.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.8.0" data-skip-pjax="true" rel="nofollow" title="1.8.0">1.8.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jzaefferer/jquery-validation/tree/1.11.1" data-branch="1.11.1" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery-validation</span></a></span></span><span class="separator"> / </span><strong class="final-path">additional-methods.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="additional-methods.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/jzaefferer/jquery-validation/contributors/1.11.1/additional-methods.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>618 lines (563 sloc)</span>
        <span>24.66 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton js-entice" href=""
                 data-entice="You must be on a branch to make or propose changes to this file">Edit</a>
          <a href="/jzaefferer/jquery-validation/raw/1.11.1/additional-methods.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/jzaefferer/jquery-validation/blame/1.11.1/additional-methods.js" class="button minibutton ">Blame</a>
          <a href="/jzaefferer/jquery-validation/commits/1.11.1/additional-methods.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon js-entice" href=""
               data-entice="You must be signed in and on a branch to make or propose changes">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * jQuery Validation Plugin 1.11.1</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * http://bassistance.de/jquery-plugins/jquery-plugin-validation/</span></div><div class='line' id='LC5'><span class="cm"> * http://docs.jquery.com/Plugins/Validation</span></div><div class='line' id='LC6'><span class="cm"> *</span></div><div class='line' id='LC7'><span class="cm"> * Copyright 2013 Jörn Zaefferer</span></div><div class='line' id='LC8'><span class="cm"> * Released under the MIT license:</span></div><div class='line' id='LC9'><span class="cm"> *   http://www.opensource.org/licenses/mit-license.php</span></div><div class='line' id='LC10'><span class="cm"> */</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'>	<span class="kd">function</span> <span class="nx">stripHtml</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'>		<span class="c1">// remove html tags and space chars</span></div><div class='line' id='LC16'>		<span class="k">return</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;.[^&lt;&gt;]*?&gt;/g</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;nbsp;|&amp;#160;/gi</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">)</span></div><div class='line' id='LC17'>		<span class="c1">// remove punctuation</span></div><div class='line' id='LC18'>		<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[.(),;:!?%#$&#39;&quot;_+=\/\-]*/g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC19'>	<span class="p">}</span></div><div class='line' id='LC20'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;maxWords&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">params</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC21'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="nx">stripHtml</span><span class="p">(</span><span class="nx">value</span><span class="p">).</span><span class="nx">match</span><span class="p">(</span><span class="sr">/\b\w+\b/g</span><span class="p">).</span><span class="nx">length</span> <span class="o">&lt;=</span> <span class="nx">params</span><span class="p">;</span></div><div class='line' id='LC22'>	<span class="p">},</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s2">&quot;Please enter {0} words or less.&quot;</span><span class="p">));</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;minWords&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">params</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="nx">stripHtml</span><span class="p">(</span><span class="nx">value</span><span class="p">).</span><span class="nx">match</span><span class="p">(</span><span class="sr">/\b\w+\b/g</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="nx">params</span><span class="p">;</span></div><div class='line' id='LC26'>	<span class="p">},</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s2">&quot;Please enter at least {0} words.&quot;</span><span class="p">));</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;rangeWords&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">params</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC29'>		<span class="kd">var</span> <span class="nx">valueStripped</span> <span class="o">=</span> <span class="nx">stripHtml</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC30'>		<span class="kd">var</span> <span class="nx">regex</span> <span class="o">=</span> <span class="sr">/\b\w+\b/g</span><span class="p">;</span></div><div class='line' id='LC31'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="nx">valueStripped</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">regex</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="nx">params</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">valueStripped</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">regex</span><span class="p">).</span><span class="nx">length</span> <span class="o">&lt;=</span> <span class="nx">params</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC32'>	<span class="p">},</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s2">&quot;Please enter between {0} and {1} words.&quot;</span><span class="p">));</span></div><div class='line' id='LC33'><br/></div><div class='line' id='LC34'><span class="p">}());</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;letterswithbasicpunc&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC37'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^[a-z\-.,()&#39;&quot;\s]+$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC38'><span class="p">},</span> <span class="s2">&quot;Letters or punctuation only please&quot;</span><span class="p">);</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;alphanumeric&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC41'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^\w+$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC42'><span class="p">},</span> <span class="s2">&quot;Letters, numbers, and underscores only please&quot;</span><span class="p">);</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;lettersonly&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^[a-z]+$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC46'><span class="p">},</span> <span class="s2">&quot;Letters only please&quot;</span><span class="p">);</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;nowhitespace&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^\S+$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC50'><span class="p">},</span> <span class="s2">&quot;No white space please&quot;</span><span class="p">);</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;ziprange&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^90[2-5]\d\{2\}-\d{4}$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC54'><span class="p">},</span> <span class="s2">&quot;Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx&quot;</span><span class="p">);</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;zipcodeUS&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC57'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/\d{5}-\d{4}$|^\d{5}$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC58'><span class="p">},</span> <span class="s2">&quot;The specified US ZIP Code is invalid&quot;</span><span class="p">);</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;integer&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^-?\d+$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC62'><span class="p">},</span> <span class="s2">&quot;A positive or negative non-decimal number please&quot;</span><span class="p">);</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'><span class="cm">/**</span></div><div class='line' id='LC65'><span class="cm"> * Return true, if the value is a valid vehicle identification number (VIN).</span></div><div class='line' id='LC66'><span class="cm"> *</span></div><div class='line' id='LC67'><span class="cm"> * Works with all kind of text inputs.</span></div><div class='line' id='LC68'><span class="cm"> *</span></div><div class='line' id='LC69'><span class="cm"> * @example &lt;input type=&quot;text&quot; size=&quot;20&quot; name=&quot;VehicleID&quot; class=&quot;{required:true,vinUS:true}&quot; /&gt;</span></div><div class='line' id='LC70'><span class="cm"> * @desc Declares a required input element whose value must be a valid vehicle identification number.</span></div><div class='line' id='LC71'><span class="cm"> *</span></div><div class='line' id='LC72'><span class="cm"> * @name jQuery.validator.methods.vinUS</span></div><div class='line' id='LC73'><span class="cm"> * @type Boolean</span></div><div class='line' id='LC74'><span class="cm"> * @cat Plugins/Validate/Methods</span></div><div class='line' id='LC75'><span class="cm"> */</span></div><div class='line' id='LC76'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;vinUS&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC77'>	<span class="k">if</span> <span class="p">(</span><span class="nx">v</span><span class="p">.</span><span class="nx">length</span> <span class="o">!==</span> <span class="mi">17</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC78'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC79'>	<span class="p">}</span></div><div class='line' id='LC80'>	<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">f</span><span class="p">,</span> <span class="nx">cd</span><span class="p">,</span> <span class="nx">cdv</span><span class="p">;</span></div><div class='line' id='LC81'>	<span class="kd">var</span> <span class="nx">LL</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;A&quot;</span><span class="p">,</span><span class="s2">&quot;B&quot;</span><span class="p">,</span><span class="s2">&quot;C&quot;</span><span class="p">,</span><span class="s2">&quot;D&quot;</span><span class="p">,</span><span class="s2">&quot;E&quot;</span><span class="p">,</span><span class="s2">&quot;F&quot;</span><span class="p">,</span><span class="s2">&quot;G&quot;</span><span class="p">,</span><span class="s2">&quot;H&quot;</span><span class="p">,</span><span class="s2">&quot;J&quot;</span><span class="p">,</span><span class="s2">&quot;K&quot;</span><span class="p">,</span><span class="s2">&quot;L&quot;</span><span class="p">,</span><span class="s2">&quot;M&quot;</span><span class="p">,</span><span class="s2">&quot;N&quot;</span><span class="p">,</span><span class="s2">&quot;P&quot;</span><span class="p">,</span><span class="s2">&quot;R&quot;</span><span class="p">,</span><span class="s2">&quot;S&quot;</span><span class="p">,</span><span class="s2">&quot;T&quot;</span><span class="p">,</span><span class="s2">&quot;U&quot;</span><span class="p">,</span><span class="s2">&quot;V&quot;</span><span class="p">,</span><span class="s2">&quot;W&quot;</span><span class="p">,</span><span class="s2">&quot;X&quot;</span><span class="p">,</span><span class="s2">&quot;Y&quot;</span><span class="p">,</span><span class="s2">&quot;Z&quot;</span><span class="p">];</span></div><div class='line' id='LC82'>	<span class="kd">var</span> <span class="nx">VL</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">4</span><span class="p">,</span><span class="mi">5</span><span class="p">,</span><span class="mi">6</span><span class="p">,</span><span class="mi">7</span><span class="p">,</span><span class="mi">8</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">4</span><span class="p">,</span><span class="mi">5</span><span class="p">,</span><span class="mi">7</span><span class="p">,</span><span class="mi">9</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">4</span><span class="p">,</span><span class="mi">5</span><span class="p">,</span><span class="mi">6</span><span class="p">,</span><span class="mi">7</span><span class="p">,</span><span class="mi">8</span><span class="p">,</span><span class="mi">9</span><span class="p">];</span></div><div class='line' id='LC83'>	<span class="kd">var</span> <span class="nx">FL</span> <span class="o">=</span> <span class="p">[</span><span class="mi">8</span><span class="p">,</span><span class="mi">7</span><span class="p">,</span><span class="mi">6</span><span class="p">,</span><span class="mi">5</span><span class="p">,</span><span class="mi">4</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">10</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">9</span><span class="p">,</span><span class="mi">8</span><span class="p">,</span><span class="mi">7</span><span class="p">,</span><span class="mi">6</span><span class="p">,</span><span class="mi">5</span><span class="p">,</span><span class="mi">4</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC84'>	<span class="kd">var</span> <span class="nx">rs</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC85'>	<span class="k">for</span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">17</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC86'>		<span class="nx">f</span> <span class="o">=</span> <span class="nx">FL</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC87'>		<span class="nx">d</span> <span class="o">=</span> <span class="nx">v</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC88'>		<span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">===</span> <span class="mi">8</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>			<span class="nx">cdv</span> <span class="o">=</span> <span class="nx">d</span><span class="p">;</span></div><div class='line' id='LC90'>		<span class="p">}</span></div><div class='line' id='LC91'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">d</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC92'>			<span class="nx">d</span> <span class="o">*=</span> <span class="nx">f</span><span class="p">;</span></div><div class='line' id='LC93'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC94'>			<span class="k">for</span> <span class="p">(</span><span class="nx">n</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="nx">LL</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC95'>				<span class="k">if</span> <span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">()</span> <span class="o">===</span> <span class="nx">LL</span><span class="p">[</span><span class="nx">n</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC96'>					<span class="nx">d</span> <span class="o">=</span> <span class="nx">VL</span><span class="p">[</span><span class="nx">n</span><span class="p">];</span></div><div class='line' id='LC97'>					<span class="nx">d</span> <span class="o">*=</span> <span class="nx">f</span><span class="p">;</span></div><div class='line' id='LC98'>					<span class="k">if</span> <span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">cdv</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">n</span> <span class="o">===</span> <span class="mi">8</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'>						<span class="nx">cdv</span> <span class="o">=</span> <span class="nx">LL</span><span class="p">[</span><span class="nx">n</span><span class="p">];</span></div><div class='line' id='LC100'>					<span class="p">}</span></div><div class='line' id='LC101'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC102'>				<span class="p">}</span></div><div class='line' id='LC103'>			<span class="p">}</span></div><div class='line' id='LC104'>		<span class="p">}</span></div><div class='line' id='LC105'>		<span class="nx">rs</span> <span class="o">+=</span> <span class="nx">d</span><span class="p">;</span></div><div class='line' id='LC106'>	<span class="p">}</span></div><div class='line' id='LC107'>	<span class="nx">cd</span> <span class="o">=</span> <span class="nx">rs</span> <span class="o">%</span> <span class="mi">11</span><span class="p">;</span></div><div class='line' id='LC108'>	<span class="k">if</span> <span class="p">(</span><span class="nx">cd</span> <span class="o">===</span> <span class="mi">10</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC109'>		<span class="nx">cd</span> <span class="o">=</span> <span class="s2">&quot;X&quot;</span><span class="p">;</span></div><div class='line' id='LC110'>	<span class="p">}</span></div><div class='line' id='LC111'>	<span class="k">if</span> <span class="p">(</span><span class="nx">cd</span> <span class="o">===</span> <span class="nx">cdv</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC112'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC113'>	<span class="p">}</span></div><div class='line' id='LC114'>	<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC115'><span class="p">},</span> <span class="s2">&quot;The specified vehicle identification number (VIN) is invalid.&quot;</span><span class="p">);</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'><span class="cm">/**</span></div><div class='line' id='LC118'><span class="cm"> * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.</span></div><div class='line' id='LC119'><span class="cm"> *</span></div><div class='line' id='LC120'><span class="cm"> * @example jQuery.validator.methods.date(&quot;01/01/1900&quot;)</span></div><div class='line' id='LC121'><span class="cm"> * @result true</span></div><div class='line' id='LC122'><span class="cm"> *</span></div><div class='line' id='LC123'><span class="cm"> * @example jQuery.validator.methods.date(&quot;01/13/1990&quot;)</span></div><div class='line' id='LC124'><span class="cm"> * @result false</span></div><div class='line' id='LC125'><span class="cm"> *</span></div><div class='line' id='LC126'><span class="cm"> * @example jQuery.validator.methods.date(&quot;01.01.1900&quot;)</span></div><div class='line' id='LC127'><span class="cm"> * @result false</span></div><div class='line' id='LC128'><span class="cm"> *</span></div><div class='line' id='LC129'><span class="cm"> * @example &lt;input name=&quot;pippo&quot; class=&quot;{dateITA:true}&quot; /&gt;</span></div><div class='line' id='LC130'><span class="cm"> * @desc Declares an optional input element whose value must be a valid date.</span></div><div class='line' id='LC131'><span class="cm"> *</span></div><div class='line' id='LC132'><span class="cm"> * @name jQuery.validator.methods.dateITA</span></div><div class='line' id='LC133'><span class="cm"> * @type Boolean</span></div><div class='line' id='LC134'><span class="cm"> * @cat Plugins/Validate/Methods</span></div><div class='line' id='LC135'><span class="cm"> */</span></div><div class='line' id='LC136'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;dateITA&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC137'>	<span class="kd">var</span> <span class="nx">check</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC138'>	<span class="kd">var</span> <span class="nx">re</span> <span class="o">=</span> <span class="sr">/^\d{1,2}\/\d{1,2}\/\d{4}$/</span><span class="p">;</span></div><div class='line' id='LC139'>	<span class="k">if</span><span class="p">(</span> <span class="nx">re</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC140'>		<span class="kd">var</span> <span class="nx">adata</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC141'>		<span class="kd">var</span> <span class="nx">gg</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">adata</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC142'>		<span class="kd">var</span> <span class="nx">mm</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">adata</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span><span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC143'>		<span class="kd">var</span> <span class="nx">aaaa</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">adata</span><span class="p">[</span><span class="mi">2</span><span class="p">],</span><span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC144'>		<span class="kd">var</span> <span class="nx">xdata</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">aaaa</span><span class="p">,</span><span class="nx">mm</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="nx">gg</span><span class="p">);</span></div><div class='line' id='LC145'>		<span class="k">if</span> <span class="p">(</span> <span class="p">(</span> <span class="nx">xdata</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">()</span> <span class="o">===</span> <span class="nx">aaaa</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">xdata</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()</span> <span class="o">===</span> <span class="nx">mm</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">xdata</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">===</span> <span class="nx">gg</span> <span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC146'>			<span class="nx">check</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC147'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC148'>			<span class="nx">check</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC149'>		<span class="p">}</span></div><div class='line' id='LC150'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC151'>		<span class="nx">check</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC152'>	<span class="p">}</span></div><div class='line' id='LC153'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="nx">check</span><span class="p">;</span></div><div class='line' id='LC154'><span class="p">},</span> <span class="s2">&quot;Please enter a correct date&quot;</span><span class="p">);</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'><span class="cm">/**</span></div><div class='line' id='LC157'><span class="cm"> * IBAN is the international bank account number.</span></div><div class='line' id='LC158'><span class="cm"> * It has a country - specific format, that is checked here too</span></div><div class='line' id='LC159'><span class="cm"> */</span></div><div class='line' id='LC160'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;iban&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC161'>	<span class="c1">// some quick simple tests to prevent needless work</span></div><div class='line' id='LC162'>	<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC163'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC164'>	<span class="p">}</span></div><div class='line' id='LC165'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="sr">/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC166'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC167'>	<span class="p">}</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'>	<span class="c1">// check the country code and find the country specific format</span></div><div class='line' id='LC170'>	<span class="kd">var</span> <span class="nx">iban</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/ /g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">toUpperCase</span><span class="p">();</span> <span class="c1">// remove spaces and to upper case</span></div><div class='line' id='LC171'>	<span class="kd">var</span> <span class="nx">countrycode</span> <span class="o">=</span> <span class="nx">iban</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC172'>	<span class="kd">var</span> <span class="nx">bbancountrypatterns</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC173'>		<span class="s1">&#39;AL&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{8}[\\dA-Z]{16}&quot;</span><span class="p">,</span></div><div class='line' id='LC174'>		<span class="s1">&#39;AD&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{8}[\\dA-Z]{12}&quot;</span><span class="p">,</span></div><div class='line' id='LC175'>		<span class="s1">&#39;AT&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{16}&quot;</span><span class="p">,</span></div><div class='line' id='LC176'>		<span class="s1">&#39;AZ&#39;</span><span class="o">:</span> <span class="s2">&quot;[\\dA-Z]{4}\\d{20}&quot;</span><span class="p">,</span></div><div class='line' id='LC177'>		<span class="s1">&#39;BE&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{12}&quot;</span><span class="p">,</span></div><div class='line' id='LC178'>		<span class="s1">&#39;BH&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]{4}[\\dA-Z]{14}&quot;</span><span class="p">,</span></div><div class='line' id='LC179'>		<span class="s1">&#39;BA&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{16}&quot;</span><span class="p">,</span></div><div class='line' id='LC180'>		<span class="s1">&#39;BR&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{23}[A-Z][\\dA-Z]&quot;</span><span class="p">,</span></div><div class='line' id='LC181'>		<span class="s1">&#39;BG&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]{4}\\d{6}[\\dA-Z]{8}&quot;</span><span class="p">,</span></div><div class='line' id='LC182'>		<span class="s1">&#39;CR&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{17}&quot;</span><span class="p">,</span></div><div class='line' id='LC183'>		<span class="s1">&#39;HR&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{17}&quot;</span><span class="p">,</span></div><div class='line' id='LC184'>		<span class="s1">&#39;CY&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{8}[\\dA-Z]{16}&quot;</span><span class="p">,</span></div><div class='line' id='LC185'>		<span class="s1">&#39;CZ&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{20}&quot;</span><span class="p">,</span></div><div class='line' id='LC186'>		<span class="s1">&#39;DK&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{14}&quot;</span><span class="p">,</span></div><div class='line' id='LC187'>		<span class="s1">&#39;DO&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]{4}\\d{20}&quot;</span><span class="p">,</span></div><div class='line' id='LC188'>		<span class="s1">&#39;EE&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{16}&quot;</span><span class="p">,</span></div><div class='line' id='LC189'>		<span class="s1">&#39;FO&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{14}&quot;</span><span class="p">,</span></div><div class='line' id='LC190'>		<span class="s1">&#39;FI&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{14}&quot;</span><span class="p">,</span></div><div class='line' id='LC191'>		<span class="s1">&#39;FR&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{10}[\\dA-Z]{11}\\d{2}&quot;</span><span class="p">,</span></div><div class='line' id='LC192'>		<span class="s1">&#39;GE&#39;</span><span class="o">:</span> <span class="s2">&quot;[\\dA-Z]{2}\\d{16}&quot;</span><span class="p">,</span></div><div class='line' id='LC193'>		<span class="s1">&#39;DE&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{18}&quot;</span><span class="p">,</span></div><div class='line' id='LC194'>		<span class="s1">&#39;GI&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]{4}[\\dA-Z]{15}&quot;</span><span class="p">,</span></div><div class='line' id='LC195'>		<span class="s1">&#39;GR&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{7}[\\dA-Z]{16}&quot;</span><span class="p">,</span></div><div class='line' id='LC196'>		<span class="s1">&#39;GL&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{14}&quot;</span><span class="p">,</span></div><div class='line' id='LC197'>		<span class="s1">&#39;GT&#39;</span><span class="o">:</span> <span class="s2">&quot;[\\dA-Z]{4}[\\dA-Z]{20}&quot;</span><span class="p">,</span></div><div class='line' id='LC198'>		<span class="s1">&#39;HU&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{24}&quot;</span><span class="p">,</span></div><div class='line' id='LC199'>		<span class="s1">&#39;IS&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{22}&quot;</span><span class="p">,</span></div><div class='line' id='LC200'>		<span class="s1">&#39;IE&#39;</span><span class="o">:</span> <span class="s2">&quot;[\\dA-Z]{4}\\d{14}&quot;</span><span class="p">,</span></div><div class='line' id='LC201'>		<span class="s1">&#39;IL&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{19}&quot;</span><span class="p">,</span></div><div class='line' id='LC202'>		<span class="s1">&#39;IT&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]\\d{10}[\\dA-Z]{12}&quot;</span><span class="p">,</span></div><div class='line' id='LC203'>		<span class="s1">&#39;KZ&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{3}[\\dA-Z]{13}&quot;</span><span class="p">,</span></div><div class='line' id='LC204'>		<span class="s1">&#39;KW&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]{4}[\\dA-Z]{22}&quot;</span><span class="p">,</span></div><div class='line' id='LC205'>		<span class="s1">&#39;LV&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]{4}[\\dA-Z]{13}&quot;</span><span class="p">,</span></div><div class='line' id='LC206'>		<span class="s1">&#39;LB&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{4}[\\dA-Z]{20}&quot;</span><span class="p">,</span></div><div class='line' id='LC207'>		<span class="s1">&#39;LI&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{5}[\\dA-Z]{12}&quot;</span><span class="p">,</span></div><div class='line' id='LC208'>		<span class="s1">&#39;LT&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{16}&quot;</span><span class="p">,</span></div><div class='line' id='LC209'>		<span class="s1">&#39;LU&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{3}[\\dA-Z]{13}&quot;</span><span class="p">,</span></div><div class='line' id='LC210'>		<span class="s1">&#39;MK&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{3}[\\dA-Z]{10}\\d{2}&quot;</span><span class="p">,</span></div><div class='line' id='LC211'>		<span class="s1">&#39;MT&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]{4}\\d{5}[\\dA-Z]{18}&quot;</span><span class="p">,</span></div><div class='line' id='LC212'>		<span class="s1">&#39;MR&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{23}&quot;</span><span class="p">,</span></div><div class='line' id='LC213'>		<span class="s1">&#39;MU&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]{4}\\d{19}[A-Z]{3}&quot;</span><span class="p">,</span></div><div class='line' id='LC214'>		<span class="s1">&#39;MC&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{10}[\\dA-Z]{11}\\d{2}&quot;</span><span class="p">,</span></div><div class='line' id='LC215'>		<span class="s1">&#39;MD&#39;</span><span class="o">:</span> <span class="s2">&quot;[\\dA-Z]{2}\\d{18}&quot;</span><span class="p">,</span></div><div class='line' id='LC216'>		<span class="s1">&#39;ME&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{18}&quot;</span><span class="p">,</span></div><div class='line' id='LC217'>		<span class="s1">&#39;NL&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]{4}\\d{10}&quot;</span><span class="p">,</span></div><div class='line' id='LC218'>		<span class="s1">&#39;NO&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{11}&quot;</span><span class="p">,</span></div><div class='line' id='LC219'>		<span class="s1">&#39;PK&#39;</span><span class="o">:</span> <span class="s2">&quot;[\\dA-Z]{4}\\d{16}&quot;</span><span class="p">,</span></div><div class='line' id='LC220'>		<span class="s1">&#39;PS&#39;</span><span class="o">:</span> <span class="s2">&quot;[\\dA-Z]{4}\\d{21}&quot;</span><span class="p">,</span></div><div class='line' id='LC221'>		<span class="s1">&#39;PL&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{24}&quot;</span><span class="p">,</span></div><div class='line' id='LC222'>		<span class="s1">&#39;PT&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{21}&quot;</span><span class="p">,</span></div><div class='line' id='LC223'>		<span class="s1">&#39;RO&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]{4}[\\dA-Z]{16}&quot;</span><span class="p">,</span></div><div class='line' id='LC224'>		<span class="s1">&#39;SM&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]\\d{10}[\\dA-Z]{12}&quot;</span><span class="p">,</span></div><div class='line' id='LC225'>		<span class="s1">&#39;SA&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{2}[\\dA-Z]{18}&quot;</span><span class="p">,</span></div><div class='line' id='LC226'>		<span class="s1">&#39;RS&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{18}&quot;</span><span class="p">,</span></div><div class='line' id='LC227'>		<span class="s1">&#39;SK&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{20}&quot;</span><span class="p">,</span></div><div class='line' id='LC228'>		<span class="s1">&#39;SI&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{15}&quot;</span><span class="p">,</span></div><div class='line' id='LC229'>		<span class="s1">&#39;ES&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{20}&quot;</span><span class="p">,</span></div><div class='line' id='LC230'>		<span class="s1">&#39;SE&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{20}&quot;</span><span class="p">,</span></div><div class='line' id='LC231'>		<span class="s1">&#39;CH&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{5}[\\dA-Z]{12}&quot;</span><span class="p">,</span></div><div class='line' id='LC232'>		<span class="s1">&#39;TN&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{20}&quot;</span><span class="p">,</span></div><div class='line' id='LC233'>		<span class="s1">&#39;TR&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{5}[\\dA-Z]{17}&quot;</span><span class="p">,</span></div><div class='line' id='LC234'>		<span class="s1">&#39;AE&#39;</span><span class="o">:</span> <span class="s2">&quot;\\d{3}\\d{16}&quot;</span><span class="p">,</span></div><div class='line' id='LC235'>		<span class="s1">&#39;GB&#39;</span><span class="o">:</span> <span class="s2">&quot;[A-Z]{4}\\d{14}&quot;</span><span class="p">,</span></div><div class='line' id='LC236'>		<span class="s1">&#39;VG&#39;</span><span class="o">:</span> <span class="s2">&quot;[\\dA-Z]{4}\\d{16}&quot;</span></div><div class='line' id='LC237'>	<span class="p">};</span></div><div class='line' id='LC238'>	<span class="kd">var</span> <span class="nx">bbanpattern</span> <span class="o">=</span> <span class="nx">bbancountrypatterns</span><span class="p">[</span><span class="nx">countrycode</span><span class="p">];</span></div><div class='line' id='LC239'>	<span class="c1">// As new countries will start using IBAN in the</span></div><div class='line' id='LC240'>	<span class="c1">// future, we only check if the countrycode is known.</span></div><div class='line' id='LC241'>	<span class="c1">// This prevents false negatives, while almost all</span></div><div class='line' id='LC242'>	<span class="c1">// false positives introduced by this, will be caught</span></div><div class='line' id='LC243'>	<span class="c1">// by the checksum validation below anyway.</span></div><div class='line' id='LC244'>	<span class="c1">// Strict checking should return FALSE for unknown</span></div><div class='line' id='LC245'>	<span class="c1">// countries.</span></div><div class='line' id='LC246'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">bbanpattern</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC247'>		<span class="kd">var</span> <span class="nx">ibanregexp</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;^[A-Z]{2}\\d{2}&quot;</span> <span class="o">+</span> <span class="nx">bbanpattern</span> <span class="o">+</span> <span class="s2">&quot;$&quot;</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC248'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">ibanregexp</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">iban</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC249'>			<span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="c1">// invalid country specific format</span></div><div class='line' id='LC250'>		<span class="p">}</span></div><div class='line' id='LC251'>	<span class="p">}</span></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'>	<span class="c1">// now check the checksum, first convert to digits</span></div><div class='line' id='LC254'>	<span class="kd">var</span> <span class="nx">ibancheck</span> <span class="o">=</span> <span class="nx">iban</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span><span class="nx">iban</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="o">+</span> <span class="nx">iban</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">4</span><span class="p">);</span></div><div class='line' id='LC255'>	<span class="kd">var</span> <span class="nx">ibancheckdigits</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC256'>	<span class="kd">var</span> <span class="nx">leadingZeroes</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC257'>	<span class="kd">var</span> <span class="nx">charAt</span><span class="p">;</span></div><div class='line' id='LC258'>	<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">ibancheck</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC259'>		<span class="nx">charAt</span> <span class="o">=</span> <span class="nx">ibancheck</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC260'>		<span class="k">if</span> <span class="p">(</span><span class="nx">charAt</span> <span class="o">!==</span> <span class="s2">&quot;0&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC261'>			<span class="nx">leadingZeroes</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC262'>		<span class="p">}</span></div><div class='line' id='LC263'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">leadingZeroes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC264'>			<span class="nx">ibancheckdigits</span> <span class="o">+=</span> <span class="s2">&quot;0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">charAt</span><span class="p">);</span></div><div class='line' id='LC265'>		<span class="p">}</span></div><div class='line' id='LC266'>	<span class="p">}</span></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'>	<span class="c1">// calculate the result of: ibancheckdigits % 97</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cRest</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cOperator</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC271'>	<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">p</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">p</span><span class="o">&lt;</span><span class="nx">ibancheckdigits</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">p</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC272'>		<span class="kd">var</span> <span class="nx">cChar</span> <span class="o">=</span> <span class="nx">ibancheckdigits</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">p</span><span class="p">);</span></div><div class='line' id='LC273'>		<span class="nx">cOperator</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">cRest</span> <span class="o">+</span> <span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">cChar</span><span class="p">;</span></div><div class='line' id='LC274'>		<span class="nx">cRest</span> <span class="o">=</span> <span class="nx">cOperator</span> <span class="o">%</span> <span class="mi">97</span><span class="p">;</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC276'>	<span class="k">return</span> <span class="nx">cRest</span> <span class="o">===</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC277'><span class="p">},</span> <span class="s2">&quot;Please specify a valid IBAN&quot;</span><span class="p">);</span></div><div class='line' id='LC278'><br/></div><div class='line' id='LC279'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;dateNL&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC280'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC281'><span class="p">},</span> <span class="s2">&quot;Please enter a correct date&quot;</span><span class="p">);</span></div><div class='line' id='LC282'><br/></div><div class='line' id='LC283'><span class="cm">/**</span></div><div class='line' id='LC284'><span class="cm"> * Dutch phone numbers have 10 digits (or 11 and start with +31).</span></div><div class='line' id='LC285'><span class="cm"> */</span></div><div class='line' id='LC286'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;phoneNL&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC287'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC288'><span class="p">},</span> <span class="s2">&quot;Please specify a valid phone number.&quot;</span><span class="p">);</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;mobileNL&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC291'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC292'><span class="p">},</span> <span class="s2">&quot;Please specify a valid mobile number&quot;</span><span class="p">);</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;postalcodeNL&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC295'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC296'><span class="p">},</span> <span class="s2">&quot;Please specify a valid postal code&quot;</span><span class="p">);</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'><span class="cm">/*</span></div><div class='line' id='LC299'><span class="cm"> * Dutch bank account numbers (not &#39;giro&#39; numbers) have 9 digits</span></div><div class='line' id='LC300'><span class="cm"> * and pass the &#39;11 check&#39;.</span></div><div class='line' id='LC301'><span class="cm"> * We accept the notation with spaces, as that is common.</span></div><div class='line' id='LC302'><span class="cm"> * acceptable: 123456789 or 12 34 56 789</span></div><div class='line' id='LC303'><span class="cm"> */</span></div><div class='line' id='LC304'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;bankaccountNL&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC305'>	<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC306'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC307'>	<span class="p">}</span></div><div class='line' id='LC308'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="sr">/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC309'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC310'>	<span class="p">}</span></div><div class='line' id='LC311'>	<span class="c1">// now &#39;11 check&#39;</span></div><div class='line' id='LC312'>	<span class="kd">var</span> <span class="nx">account</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/ /g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">);</span> <span class="c1">// remove spaces</span></div><div class='line' id='LC313'>	<span class="kd">var</span> <span class="nx">sum</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC314'>	<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">account</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC315'>	<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">pos</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">pos</span><span class="o">&lt;</span><span class="nx">len</span><span class="p">;</span> <span class="nx">pos</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC316'>		<span class="kd">var</span> <span class="nx">factor</span> <span class="o">=</span> <span class="nx">len</span> <span class="o">-</span> <span class="nx">pos</span><span class="p">;</span></div><div class='line' id='LC317'>		<span class="kd">var</span> <span class="nx">digit</span> <span class="o">=</span> <span class="nx">account</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">pos</span><span class="p">,</span> <span class="nx">pos</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC318'>		<span class="nx">sum</span> <span class="o">=</span> <span class="nx">sum</span> <span class="o">+</span> <span class="nx">factor</span> <span class="o">*</span> <span class="nx">digit</span><span class="p">;</span></div><div class='line' id='LC319'>	<span class="p">}</span></div><div class='line' id='LC320'>	<span class="k">return</span> <span class="nx">sum</span> <span class="o">%</span> <span class="mi">11</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC321'><span class="p">},</span> <span class="s2">&quot;Please specify a valid bank account number&quot;</span><span class="p">);</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'><span class="cm">/**</span></div><div class='line' id='LC324'><span class="cm"> * Dutch giro account numbers (not bank numbers) have max 7 digits</span></div><div class='line' id='LC325'><span class="cm"> */</span></div><div class='line' id='LC326'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;giroaccountNL&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC327'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^[0-9]{1,7}$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC328'><span class="p">},</span> <span class="s2">&quot;Please specify a valid giro account number&quot;</span><span class="p">);</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;bankorgiroaccountNL&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC331'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC332'>			<span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">methods</span><span class="p">[</span><span class="s2">&quot;bankaccountNL&quot;</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">))</span> <span class="o">||</span></div><div class='line' id='LC333'>			<span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">methods</span><span class="p">[</span><span class="s2">&quot;giroaccountNL&quot;</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">));</span></div><div class='line' id='LC334'><span class="p">},</span> <span class="s2">&quot;Please specify a valid bank or giro account number&quot;</span><span class="p">);</span></div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;time&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC338'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC339'><span class="p">},</span> <span class="s2">&quot;Please enter a valid time, between 00:00 and 23:59&quot;</span><span class="p">);</span></div><div class='line' id='LC340'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;time12h&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC341'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC342'><span class="p">},</span> <span class="s2">&quot;Please enter a valid time in 12-hour am/pm format&quot;</span><span class="p">);</span></div><div class='line' id='LC343'><br/></div><div class='line' id='LC344'><span class="cm">/**</span></div><div class='line' id='LC345'><span class="cm"> * matches US phone number format</span></div><div class='line' id='LC346'><span class="cm"> *</span></div><div class='line' id='LC347'><span class="cm"> * where the area code may not start with 1 and the prefix may not start with 1</span></div><div class='line' id='LC348'><span class="cm"> * allows &#39;-&#39; or &#39; &#39; as a separator and allows parens around area code</span></div><div class='line' id='LC349'><span class="cm"> * some people may want to put a &#39;1&#39; in front of their number</span></div><div class='line' id='LC350'><span class="cm"> *</span></div><div class='line' id='LC351'><span class="cm"> * 1(212)-999-2345 or</span></div><div class='line' id='LC352'><span class="cm"> * 212 999 2344 or</span></div><div class='line' id='LC353'><span class="cm"> * 212-999-0983</span></div><div class='line' id='LC354'><span class="cm"> *</span></div><div class='line' id='LC355'><span class="cm"> * but not</span></div><div class='line' id='LC356'><span class="cm"> * 111-123-5434</span></div><div class='line' id='LC357'><span class="cm"> * and not</span></div><div class='line' id='LC358'><span class="cm"> * 212 123 4567</span></div><div class='line' id='LC359'><span class="cm"> */</span></div><div class='line' id='LC360'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;phoneUS&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">phone_number</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC361'>	<span class="nx">phone_number</span> <span class="o">=</span> <span class="nx">phone_number</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s+/g</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC362'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="nx">phone_number</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">9</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC363'>		<span class="nx">phone_number</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/</span><span class="p">);</span></div><div class='line' id='LC364'><span class="p">},</span> <span class="s2">&quot;Please specify a valid phone number&quot;</span><span class="p">);</span></div><div class='line' id='LC365'><br/></div><div class='line' id='LC366'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;phoneUK&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">phone_number</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC367'>	<span class="nx">phone_number</span> <span class="o">=</span> <span class="nx">phone_number</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\(|\)|\s+|-/g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC368'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="nx">phone_number</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">9</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC369'>		<span class="nx">phone_number</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/</span><span class="p">);</span></div><div class='line' id='LC370'><span class="p">},</span> <span class="s1">&#39;Please specify a valid phone number&#39;</span><span class="p">);</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;mobileUK&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">phone_number</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC373'>	<span class="nx">phone_number</span> <span class="o">=</span> <span class="nx">phone_number</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\(|\)|\s+|-/g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC374'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="nx">phone_number</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">9</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC375'>		<span class="nx">phone_number</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/</span><span class="p">);</span></div><div class='line' id='LC376'><span class="p">},</span> <span class="s1">&#39;Please specify a valid mobile number&#39;</span><span class="p">);</span></div><div class='line' id='LC377'><br/></div><div class='line' id='LC378'><span class="c1">//Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers</span></div><div class='line' id='LC379'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;phonesUK&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">phone_number</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC380'>	<span class="nx">phone_number</span> <span class="o">=</span> <span class="nx">phone_number</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\(|\)|\s+|-/g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC381'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="nx">phone_number</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">9</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC382'>		<span class="nx">phone_number</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/</span><span class="p">);</span></div><div class='line' id='LC383'><span class="p">},</span> <span class="s1">&#39;Please specify a valid uk phone number&#39;</span><span class="p">);</span></div><div class='line' id='LC384'><span class="c1">// On the above three UK functions, do the following server side processing:</span></div><div class='line' id='LC385'><span class="c1">//  Compare original input with this RegEx pattern:</span></div><div class='line' id='LC386'><span class="c1">//   ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$</span></div><div class='line' id='LC387'><span class="c1">//  Extract $1 and set $prefix to &#39;+44&lt;space&gt;&#39; if $1 is &#39;44&#39;, otherwise set $prefix to &#39;0&#39;</span></div><div class='line' id='LC388'><span class="c1">//  Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.</span></div><div class='line' id='LC389'><span class="c1">// A number of very detailed GB telephone number RegEx patterns can also be found at:</span></div><div class='line' id='LC390'><span class="c1">// http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers</span></div><div class='line' id='LC391'><br/></div><div class='line' id='LC392'><span class="c1">// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)</span></div><div class='line' id='LC393'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;postcodeUK&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC394'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC395'><span class="p">},</span> <span class="s1">&#39;Please specify a valid UK postcode&#39;</span><span class="p">);</span></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'><span class="c1">// TODO check if value starts with &lt;, otherwise don&#39;t try stripping anything</span></div><div class='line' id='LC398'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;strippedminlength&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC399'>	<span class="k">return</span> <span class="nx">jQuery</span><span class="p">(</span><span class="nx">value</span><span class="p">).</span><span class="nx">text</span><span class="p">().</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="nx">param</span><span class="p">;</span></div><div class='line' id='LC400'><span class="p">},</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s2">&quot;Please enter at least {0} characters&quot;</span><span class="p">));</span></div><div class='line' id='LC401'><br/></div><div class='line' id='LC402'><span class="c1">// same as email, but TLD is optional</span></div><div class='line' id='LC403'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;email2&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC404'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^((([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&amp;&#39;\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC405'><span class="p">},</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">messages</span><span class="p">.</span><span class="nx">email</span><span class="p">);</span></div><div class='line' id='LC406'><br/></div><div class='line' id='LC407'><span class="c1">// same as url, but TLD is optional</span></div><div class='line' id='LC408'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;url2&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC409'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;&#39;\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;&#39;\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;&#39;\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;&#39;\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&amp;&#39;\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC410'><span class="p">},</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">messages</span><span class="p">.</span><span class="nx">url</span><span class="p">);</span></div><div class='line' id='LC411'><br/></div><div class='line' id='LC412'><span class="c1">// NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator</span></div><div class='line' id='LC413'><span class="c1">// Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0</span></div><div class='line' id='LC414'><span class="c1">// Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)</span></div><div class='line' id='LC415'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;creditcardtypes&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC416'>	<span class="k">if</span> <span class="p">(</span><span class="sr">/[^0-9\-]+/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC417'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC418'>	<span class="p">}</span></div><div class='line' id='LC419'><br/></div><div class='line' id='LC420'>	<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\D/g</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC421'><br/></div><div class='line' id='LC422'>	<span class="kd">var</span> <span class="nx">validTypes</span> <span class="o">=</span> <span class="mh">0x0000</span><span class="p">;</span></div><div class='line' id='LC423'><br/></div><div class='line' id='LC424'>	<span class="k">if</span> <span class="p">(</span><span class="nx">param</span><span class="p">.</span><span class="nx">mastercard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC425'>		<span class="nx">validTypes</span> <span class="o">|=</span> <span class="mh">0x0001</span><span class="p">;</span></div><div class='line' id='LC426'>	<span class="p">}</span></div><div class='line' id='LC427'>	<span class="k">if</span> <span class="p">(</span><span class="nx">param</span><span class="p">.</span><span class="nx">visa</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC428'>		<span class="nx">validTypes</span> <span class="o">|=</span> <span class="mh">0x0002</span><span class="p">;</span></div><div class='line' id='LC429'>	<span class="p">}</span></div><div class='line' id='LC430'>	<span class="k">if</span> <span class="p">(</span><span class="nx">param</span><span class="p">.</span><span class="nx">amex</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC431'>		<span class="nx">validTypes</span> <span class="o">|=</span> <span class="mh">0x0004</span><span class="p">;</span></div><div class='line' id='LC432'>	<span class="p">}</span></div><div class='line' id='LC433'>	<span class="k">if</span> <span class="p">(</span><span class="nx">param</span><span class="p">.</span><span class="nx">dinersclub</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC434'>		<span class="nx">validTypes</span> <span class="o">|=</span> <span class="mh">0x0008</span><span class="p">;</span></div><div class='line' id='LC435'>	<span class="p">}</span></div><div class='line' id='LC436'>	<span class="k">if</span> <span class="p">(</span><span class="nx">param</span><span class="p">.</span><span class="nx">enroute</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC437'>		<span class="nx">validTypes</span> <span class="o">|=</span> <span class="mh">0x0010</span><span class="p">;</span></div><div class='line' id='LC438'>	<span class="p">}</span></div><div class='line' id='LC439'>	<span class="k">if</span> <span class="p">(</span><span class="nx">param</span><span class="p">.</span><span class="nx">discover</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC440'>		<span class="nx">validTypes</span> <span class="o">|=</span> <span class="mh">0x0020</span><span class="p">;</span></div><div class='line' id='LC441'>	<span class="p">}</span></div><div class='line' id='LC442'>	<span class="k">if</span> <span class="p">(</span><span class="nx">param</span><span class="p">.</span><span class="nx">jcb</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC443'>		<span class="nx">validTypes</span> <span class="o">|=</span> <span class="mh">0x0040</span><span class="p">;</span></div><div class='line' id='LC444'>	<span class="p">}</span></div><div class='line' id='LC445'>	<span class="k">if</span> <span class="p">(</span><span class="nx">param</span><span class="p">.</span><span class="nx">unknown</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC446'>		<span class="nx">validTypes</span> <span class="o">|=</span> <span class="mh">0x0080</span><span class="p">;</span></div><div class='line' id='LC447'>	<span class="p">}</span></div><div class='line' id='LC448'>	<span class="k">if</span> <span class="p">(</span><span class="nx">param</span><span class="p">.</span><span class="nx">all</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC449'>		<span class="nx">validTypes</span> <span class="o">=</span> <span class="mh">0x0001</span> <span class="o">|</span> <span class="mh">0x0002</span> <span class="o">|</span> <span class="mh">0x0004</span> <span class="o">|</span> <span class="mh">0x0008</span> <span class="o">|</span> <span class="mh">0x0010</span> <span class="o">|</span> <span class="mh">0x0020</span> <span class="o">|</span> <span class="mh">0x0040</span> <span class="o">|</span> <span class="mh">0x0080</span><span class="p">;</span></div><div class='line' id='LC450'>	<span class="p">}</span></div><div class='line' id='LC451'>	<span class="k">if</span> <span class="p">(</span><span class="nx">validTypes</span> <span class="o">&amp;</span> <span class="mh">0x0001</span> <span class="o">&amp;&amp;</span> <span class="sr">/^(5[12345])/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="c1">//mastercard</span></div><div class='line' id='LC452'>		<span class="k">return</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC453'>	<span class="p">}</span></div><div class='line' id='LC454'>	<span class="k">if</span> <span class="p">(</span><span class="nx">validTypes</span> <span class="o">&amp;</span> <span class="mh">0x0002</span> <span class="o">&amp;&amp;</span> <span class="sr">/^(4)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="c1">//visa</span></div><div class='line' id='LC455'>		<span class="k">return</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC456'>	<span class="p">}</span></div><div class='line' id='LC457'>	<span class="k">if</span> <span class="p">(</span><span class="nx">validTypes</span> <span class="o">&amp;</span> <span class="mh">0x0004</span> <span class="o">&amp;&amp;</span> <span class="sr">/^(3[47])/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="c1">//amex</span></div><div class='line' id='LC458'>		<span class="k">return</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">15</span><span class="p">;</span></div><div class='line' id='LC459'>	<span class="p">}</span></div><div class='line' id='LC460'>	<span class="k">if</span> <span class="p">(</span><span class="nx">validTypes</span> <span class="o">&amp;</span> <span class="mh">0x0008</span> <span class="o">&amp;&amp;</span> <span class="sr">/^(3(0[012345]|[68]))/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="c1">//dinersclub</span></div><div class='line' id='LC461'>		<span class="k">return</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">14</span><span class="p">;</span></div><div class='line' id='LC462'>	<span class="p">}</span></div><div class='line' id='LC463'>	<span class="k">if</span> <span class="p">(</span><span class="nx">validTypes</span> <span class="o">&amp;</span> <span class="mh">0x0010</span> <span class="o">&amp;&amp;</span> <span class="sr">/^(2(014|149))/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="c1">//enroute</span></div><div class='line' id='LC464'>		<span class="k">return</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">15</span><span class="p">;</span></div><div class='line' id='LC465'>	<span class="p">}</span></div><div class='line' id='LC466'>	<span class="k">if</span> <span class="p">(</span><span class="nx">validTypes</span> <span class="o">&amp;</span> <span class="mh">0x0020</span> <span class="o">&amp;&amp;</span> <span class="sr">/^(6011)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="c1">//discover</span></div><div class='line' id='LC467'>		<span class="k">return</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC468'>	<span class="p">}</span></div><div class='line' id='LC469'>	<span class="k">if</span> <span class="p">(</span><span class="nx">validTypes</span> <span class="o">&amp;</span> <span class="mh">0x0040</span> <span class="o">&amp;&amp;</span> <span class="sr">/^(3)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="c1">//jcb</span></div><div class='line' id='LC470'>		<span class="k">return</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC471'>	<span class="p">}</span></div><div class='line' id='LC472'>	<span class="k">if</span> <span class="p">(</span><span class="nx">validTypes</span> <span class="o">&amp;</span> <span class="mh">0x0040</span> <span class="o">&amp;&amp;</span> <span class="sr">/^(2131|1800)/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="c1">//jcb</span></div><div class='line' id='LC473'>		<span class="k">return</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">15</span><span class="p">;</span></div><div class='line' id='LC474'>	<span class="p">}</span></div><div class='line' id='LC475'>	<span class="k">if</span> <span class="p">(</span><span class="nx">validTypes</span> <span class="o">&amp;</span> <span class="mh">0x0080</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//unknown</span></div><div class='line' id='LC476'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC477'>	<span class="p">}</span></div><div class='line' id='LC478'>	<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC479'><span class="p">},</span> <span class="s2">&quot;Please enter a valid credit card number.&quot;</span><span class="p">);</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;ipv4&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC482'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC483'><span class="p">},</span> <span class="s2">&quot;Please enter a valid IP v4 address.&quot;</span><span class="p">);</span></div><div class='line' id='LC484'><br/></div><div class='line' id='LC485'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;ipv6&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC486'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="sr">/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC487'><span class="p">},</span> <span class="s2">&quot;Please enter a valid IP v6 address.&quot;</span><span class="p">);</span></div><div class='line' id='LC488'><br/></div><div class='line' id='LC489'><span class="cm">/**</span></div><div class='line' id='LC490'><span class="cm">* Return true if the field value matches the given format RegExp</span></div><div class='line' id='LC491'><span class="cm">*</span></div><div class='line' id='LC492'><span class="cm">* @example jQuery.validator.methods.pattern(&quot;AR1004&quot;,element,/^AR\d{4}$/)</span></div><div class='line' id='LC493'><span class="cm">* @result true</span></div><div class='line' id='LC494'><span class="cm">*</span></div><div class='line' id='LC495'><span class="cm">* @example jQuery.validator.methods.pattern(&quot;BR1004&quot;,element,/^AR\d{4}$/)</span></div><div class='line' id='LC496'><span class="cm">* @result false</span></div><div class='line' id='LC497'><span class="cm">*</span></div><div class='line' id='LC498'><span class="cm">* @name jQuery.validator.methods.pattern</span></div><div class='line' id='LC499'><span class="cm">* @type Boolean</span></div><div class='line' id='LC500'><span class="cm">* @cat Plugins/Validate/Methods</span></div><div class='line' id='LC501'><span class="cm">*/</span></div><div class='line' id='LC502'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;pattern&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC503'>	<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC504'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC505'>	<span class="p">}</span></div><div class='line' id='LC506'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">param</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC507'>		<span class="nx">param</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;^(?:&#39;</span> <span class="o">+</span> <span class="nx">param</span> <span class="o">+</span> <span class="s1">&#39;)$&#39;</span><span class="p">);</span></div><div class='line' id='LC508'>	<span class="p">}</span></div><div class='line' id='LC509'>	<span class="k">return</span> <span class="nx">param</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC510'><span class="p">},</span> <span class="s2">&quot;Invalid format.&quot;</span><span class="p">);</span></div><div class='line' id='LC511'><br/></div><div class='line' id='LC512'><br/></div><div class='line' id='LC513'><span class="cm">/*</span></div><div class='line' id='LC514'><span class="cm"> * Lets you say &quot;at least X inputs that match selector Y must be filled.&quot;</span></div><div class='line' id='LC515'><span class="cm"> *</span></div><div class='line' id='LC516'><span class="cm"> * The end result is that neither of these inputs:</span></div><div class='line' id='LC517'><span class="cm"> *</span></div><div class='line' id='LC518'><span class="cm"> *  &lt;input class=&quot;productinfo&quot; name=&quot;partnumber&quot;&gt;</span></div><div class='line' id='LC519'><span class="cm"> *  &lt;input class=&quot;productinfo&quot; name=&quot;description&quot;&gt;</span></div><div class='line' id='LC520'><span class="cm"> *</span></div><div class='line' id='LC521'><span class="cm"> *  ...will validate unless at least one of them is filled.</span></div><div class='line' id='LC522'><span class="cm"> *</span></div><div class='line' id='LC523'><span class="cm"> * partnumber:  {require_from_group: [1,&quot;.productinfo&quot;]},</span></div><div class='line' id='LC524'><span class="cm"> * description: {require_from_group: [1,&quot;.productinfo&quot;]}</span></div><div class='line' id='LC525'><span class="cm"> *</span></div><div class='line' id='LC526'><span class="cm"> */</span></div><div class='line' id='LC527'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;require_from_group&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC528'>	<span class="kd">var</span> <span class="nx">validator</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC529'>	<span class="kd">var</span> <span class="nx">selector</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC530'>	<span class="kd">var</span> <span class="nx">validOrNot</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">element</span><span class="p">.</span><span class="nx">form</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC531'>		<span class="k">return</span> <span class="nx">validator</span><span class="p">.</span><span class="nx">elementValue</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC532'>	<span class="p">}).</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="nx">options</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC533'><br/></div><div class='line' id='LC534'>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;being_validated&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC535'>		<span class="kd">var</span> <span class="nx">fields</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">element</span><span class="p">.</span><span class="nx">form</span><span class="p">);</span></div><div class='line' id='LC536'>		<span class="nx">fields</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;being_validated&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC537'>		<span class="nx">fields</span><span class="p">.</span><span class="nx">valid</span><span class="p">();</span></div><div class='line' id='LC538'>		<span class="nx">fields</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;being_validated&#39;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC539'>	<span class="p">}</span></div><div class='line' id='LC540'>	<span class="k">return</span> <span class="nx">validOrNot</span><span class="p">;</span></div><div class='line' id='LC541'><span class="p">},</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s2">&quot;Please fill at least {0} of these fields.&quot;</span><span class="p">));</span></div><div class='line' id='LC542'><br/></div><div class='line' id='LC543'><span class="cm">/*</span></div><div class='line' id='LC544'><span class="cm"> * Lets you say &quot;either at least X inputs that match selector Y must be filled,</span></div><div class='line' id='LC545'><span class="cm"> * OR they must all be skipped (left blank).&quot;</span></div><div class='line' id='LC546'><span class="cm"> *</span></div><div class='line' id='LC547'><span class="cm"> * The end result, is that none of these inputs:</span></div><div class='line' id='LC548'><span class="cm"> *</span></div><div class='line' id='LC549'><span class="cm"> *  &lt;input class=&quot;productinfo&quot; name=&quot;partnumber&quot;&gt;</span></div><div class='line' id='LC550'><span class="cm"> *  &lt;input class=&quot;productinfo&quot; name=&quot;description&quot;&gt;</span></div><div class='line' id='LC551'><span class="cm"> *  &lt;input class=&quot;productinfo&quot; name=&quot;color&quot;&gt;</span></div><div class='line' id='LC552'><span class="cm"> *</span></div><div class='line' id='LC553'><span class="cm"> *  ...will validate unless either at least two of them are filled,</span></div><div class='line' id='LC554'><span class="cm"> *  OR none of them are.</span></div><div class='line' id='LC555'><span class="cm"> *</span></div><div class='line' id='LC556'><span class="cm"> * partnumber:  {skip_or_fill_minimum: [2,&quot;.productinfo&quot;]},</span></div><div class='line' id='LC557'><span class="cm"> *  description: {skip_or_fill_minimum: [2,&quot;.productinfo&quot;]},</span></div><div class='line' id='LC558'><span class="cm"> * color:       {skip_or_fill_minimum: [2,&quot;.productinfo&quot;]}</span></div><div class='line' id='LC559'><span class="cm"> *</span></div><div class='line' id='LC560'><span class="cm"> */</span></div><div class='line' id='LC561'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;skip_or_fill_minimum&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC562'>	<span class="kd">var</span> <span class="nx">validator</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC563'>		<span class="nx">numberRequired</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC564'>		<span class="nx">selector</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC565'>	<span class="kd">var</span> <span class="nx">numberFilled</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">element</span><span class="p">.</span><span class="nx">form</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC566'>		<span class="k">return</span> <span class="nx">validator</span><span class="p">.</span><span class="nx">elementValue</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC567'>	<span class="p">}).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC568'>	<span class="kd">var</span> <span class="nx">valid</span> <span class="o">=</span> <span class="nx">numberFilled</span> <span class="o">&gt;=</span> <span class="nx">numberRequired</span> <span class="o">||</span> <span class="nx">numberFilled</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC569'><br/></div><div class='line' id='LC570'>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;being_validated&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC571'>		<span class="kd">var</span> <span class="nx">fields</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">selector</span><span class="p">,</span> <span class="nx">element</span><span class="p">.</span><span class="nx">form</span><span class="p">);</span></div><div class='line' id='LC572'>		<span class="nx">fields</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;being_validated&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC573'>		<span class="nx">fields</span><span class="p">.</span><span class="nx">valid</span><span class="p">();</span></div><div class='line' id='LC574'>		<span class="nx">fields</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;being_validated&#39;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC575'>	<span class="p">}</span></div><div class='line' id='LC576'>	<span class="k">return</span> <span class="nx">valid</span><span class="p">;</span></div><div class='line' id='LC577'><span class="p">},</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s2">&quot;Please either skip these fields or fill at least {0} of them.&quot;</span><span class="p">));</span></div><div class='line' id='LC578'><br/></div><div class='line' id='LC579'><span class="c1">// Accept a value from a file input based on a required mimetype</span></div><div class='line' id='LC580'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;accept&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC581'>	<span class="c1">// Split mime on commas in case we have multiple types we can accept</span></div><div class='line' id='LC582'>	<span class="kd">var</span> <span class="nx">typeParam</span> <span class="o">=</span> <span class="k">typeof</span> <span class="nx">param</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span> <span class="o">?</span> <span class="nx">param</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/,/g</span><span class="p">,</span> <span class="s1">&#39;|&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="s2">&quot;image/*&quot;</span><span class="p">,</span></div><div class='line' id='LC583'>	<span class="nx">optionalValue</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">),</span></div><div class='line' id='LC584'>	<span class="nx">i</span><span class="p">,</span> <span class="nx">file</span><span class="p">;</span></div><div class='line' id='LC585'><br/></div><div class='line' id='LC586'>	<span class="c1">// Element is optional</span></div><div class='line' id='LC587'>	<span class="k">if</span> <span class="p">(</span><span class="nx">optionalValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC588'>		<span class="k">return</span> <span class="nx">optionalValue</span><span class="p">;</span></div><div class='line' id='LC589'>	<span class="p">}</span></div><div class='line' id='LC590'><br/></div><div class='line' id='LC591'>	<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;type&quot;</span><span class="p">)</span> <span class="o">===</span> <span class="s2">&quot;file&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC592'>		<span class="c1">// If we are using a wildcard, make it regex friendly</span></div><div class='line' id='LC593'>		<span class="nx">typeParam</span> <span class="o">=</span> <span class="nx">typeParam</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\*/g</span><span class="p">,</span> <span class="s2">&quot;.*&quot;</span><span class="p">);</span></div><div class='line' id='LC594'><br/></div><div class='line' id='LC595'>		<span class="c1">// Check if the element has a FileList before checking each file</span></div><div class='line' id='LC596'>		<span class="k">if</span> <span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">files</span> <span class="o">&amp;&amp;</span> <span class="nx">element</span><span class="p">.</span><span class="nx">files</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC597'>			<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">element</span><span class="p">.</span><span class="nx">files</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC598'>				<span class="nx">file</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">files</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC599'><br/></div><div class='line' id='LC600'>				<span class="c1">// Grab the mimetype from the loaded file, verify it matches</span></div><div class='line' id='LC601'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">file</span><span class="p">.</span><span class="nx">type</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;.?(&quot;</span> <span class="o">+</span> <span class="nx">typeParam</span> <span class="o">+</span> <span class="s2">&quot;)$&quot;</span><span class="p">,</span> <span class="s2">&quot;i&quot;</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC602'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC603'>				<span class="p">}</span></div><div class='line' id='LC604'>			<span class="p">}</span></div><div class='line' id='LC605'>		<span class="p">}</span></div><div class='line' id='LC606'>	<span class="p">}</span></div><div class='line' id='LC607'><br/></div><div class='line' id='LC608'>	<span class="c1">// Either return true because we&#39;ve validated each file, or because the</span></div><div class='line' id='LC609'>	<span class="c1">// browser does not support element.files and the FileList feature</span></div><div class='line' id='LC610'>	<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC611'><span class="p">},</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s2">&quot;Please enter a value with a valid mimetype.&quot;</span><span class="p">));</span></div><div class='line' id='LC612'><br/></div><div class='line' id='LC613'><span class="c1">// Older &quot;accept&quot; file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept</span></div><div class='line' id='LC614'><span class="nx">jQuery</span><span class="p">.</span><span class="nx">validator</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s2">&quot;extension&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">param</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC615'>	<span class="nx">param</span> <span class="o">=</span> <span class="k">typeof</span> <span class="nx">param</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span> <span class="o">?</span> <span class="nx">param</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/,/g</span><span class="p">,</span> <span class="s1">&#39;|&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="s2">&quot;png|jpe?g|gif&quot;</span><span class="p">;</span></div><div class='line' id='LC616'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">optional</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="o">||</span> <span class="nx">value</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;.(&quot;</span> <span class="o">+</span> <span class="nx">param</span> <span class="o">+</span> <span class="s2">&quot;)$&quot;</span><span class="p">,</span> <span class="s2">&quot;i&quot;</span><span class="p">));</span></div><div class='line' id='LC617'><span class="p">},</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s2">&quot;Please enter a value with a valid extension.&quot;</span><span class="p">));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.24007s from fe3.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/jzaefferer/jquery-validation/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

