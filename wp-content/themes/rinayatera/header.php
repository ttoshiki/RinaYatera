<!doctype html>
<html>
<head>
<meta charset="UTF-8">
  <title>矢寺梨奈 | フリーフォトグラファー</title>
  <!--<meta name="viewport" content="width=device-width,initial-scale=1">-->
  <meta name="Description" content ="関西で活躍中のフリーフォトグラファー、矢寺梨奈(やてらりな)のウェブサイトです。アーティスト写真、ウェディング写真や家族写真などのポートレートを中心にカメラマンとして撮影を行なっています。">
  <meta property="og:title" content="矢寺梨奈 | フリーフォトグラファー" >
  <meta property="og:description" content="関西で活躍中のフリーフォトグラファー、矢寺梨奈(やてらりな)のウェブサイトです。アーティスト写真、ウェディング写真や家族写真などのポートレートを中心にカメラマンとして撮影を行なっています。" >
  <meta property="og:type" content="website">
  <meta property="og:url" content="http://www.rinayatera.com/" />
  <meta property="og:site_name" content="矢寺梨奈 | フリーフォトグラファー" >
  <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/images/common/ogimage.png">
  <meta name="format-detection" content="telephone=no">
  <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/images/common/touch_icon.png">
  <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/common/favicon.png">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/reset.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>
    (function(d) {
      var config = {
        kitId: 'urb6sln',
        scriptTimeout: 3000,
        async: true
      },
      h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
  </script>
  <link href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho" rel="stylesheet">
  <?php if ( is_home() || is_front_page() ) : ?>
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/slick/slick.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/slick/slick-theme.css">
  <?php endif; ?>
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/venobox.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/textillate/animate.css">
  <?php wp_head();?>
</head>
<div class="loading">
  <div class="animation"><span class="loading-name">rina yatera</span><span class="loading-job">photographer</span></div>
  <div class="animation-bar__blue"><div class="animation-bar__green"></div></div>
</div>
<!--header-->
<header class="header inner">
<?php if ( is_home() || is_front_page() ) : ?>
    <div class="header-inner">
    <h1 class="header-title">
        <a href="<?php echo esc_url( get_home_url() ); ?>">
          <span class="header-logo text_left">rina yatera</span>
          <span class="header-logo__sub text_left">photographer</span>
        </a>
      </h1>
      <?php else: ?>
      <div class="header-inner">
    <h1 class="header-title">
        <a href="<?php echo esc_url( get_home_url() ); ?>">
          <span class="header-logo text_left">rina yatera</span>
          <span class="header-logo__sub text_left">photographer</span>
        </a>
      </h1>
  <?php endif; ?>
  <div class="menu-trigger_place">
      <a href="#" class="menu-trigger">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
     <!--navigation-->
     <div class="header-nav">
      <div class="nav-background">
          <nav class="navigation">
            <ul class="nav-list">
            <?php 
                wp_nav_menu( array( 
                  'theme_location' => 'grobal_navugation',
                  'menu_class' => 'nav-list',
                  'container' => false,
                  'echo' => true,
                  'depth' => 0,
                  'link_before' => '<span>',
                  'link_after' => '</span>'
                ) ); 
              ?>
            </ul>
          </nav>
      </div>
    </div>
    </div>
  <!--//navigation-->
</header>
<!--//header-->