<?php get_header();?>
<body <?php body_class(); ?>>


	<!--main-->
	<main>
		<div class="inner">

					<h1 class=" lowpage_h1"><?php the_title();?></h1>
					<p class="title_background plan"><?php the_title();?></p>
	<!--portrait-->
			<section id="plan-portrait">
				 <div class="plan-outer">
					<div class="plan_img__parent vertical">
							<p class="pc-img plan vertical"><img src="<?php the_field('shooting_plan_img01');?>" alt="矢寺梨奈の撮影プランのポートレートメニュー"></p>
						<p class="sp-img plan text-center vertical"><img src="<?php the_field('shooting_plan_img01');?>" alt="矢寺梨奈の撮影プランのポートレートメニュー"></p>
						<span class="plan_img__child01">shooting plan01</span>
					</div>

				<div class="plan-descrintion vertical">
					<h2 class="plan lowpage_h2 plan-animation__top">shooting plan01</h2>
					<h3 class="plan lowpage_h3 plan-animation__top"><?php the_field('shooting_plan01');?></h3>
						<dl class="shooting-plan__outer">
							<dt class="plan-menu__outer">
								<span class="plan-menu wedding-dot"><?php the_field('plan_menu_1_1');?></span>
								<span class="plan-menu wedding-dot"><?php the_field('plan_menu_1_2');?></span>
								<span class="plan-menu"><?php the_field('plan_menu_1_3');?></span>
							</dt>
							<dd class="plan-detail">
							<span class="plan-menu"><?php the_field('plan-detail_1_1');?></span>
							<span class="plan-menu plan-price"><?php the_field('plan-pricel_1_1');?></span>
							</dd>
							<dd>
							<span class="plan-menu"><?php the_field('plan-detail_1_2');?></span>
							<span class="plan-menu plan-price price-last"><?php the_field('plan-pricel_1_2');?></span>
							</dd>
						</dl>
				</div>
			  </div>
			</section>
		<!--//portrait-->


		<!--wedding-->
			<section id="plan-wedding">
				<div class="plan-outer">
					<div class="plan_img__parent horizon order02">
						<p class="pc-img plan horizon my-effect"><img src="<?php the_field('shooting_plan_img02');?>" alt="矢寺梨奈の撮影プランのウエディング写真メニュー"></p>
						<p class="sp-img plan horizon text-center my-effect"><img src="<?php the_field('shooting_plan_img02');?>" alt="矢寺梨奈の撮影プランのウエディング写真メニュー"></p>
						<span class="plan_img__child02 pc">shooting plan02</span>
					</div>
				<div class="plan-descrintion horizon order01">
					<h2 class="plan lowpage_h2 plan-animation">shooting plan02</h2>
					<h3 class="plan lowpage_h3 plan-animation"><?php the_field('shooting_plan02');?></h3>


					<dl class="plan-wedding__dl shooting-plan__outer_wedding01 my-effect__second">
						<dt class="plan-wedding_dt"><?php the_field('plan_menu_2_1');?></dt>
							<dd class="plan-wedding_dt__price"><?php the_field('plan-pricel_2_1');?></dd>
							<dd class="plan-wedding_dt__contactme"><?php the_field('plan-detail_2_1');?></dd>
					</dl>


					<dl class="plan-wedding__dl shooting-plan__outer_wedding02 my-effect__second">
						<dt class="plan-wedding_dt"><?php the_field('plan_menu_2_2');?></dt>
						<dd class="plan-wedding_dt__price02"><?php the_field('plan-pricel_2_2');?></dd>
						<dd class="plan-wedding_dt__contactme"><?php the_field('plan-detail_2_2');?></dd>
					</dl>


					<dl class="plan-wedding__dl shooting-plan__outer_wedding03 my-effect__second">
						<dt class="plan-wedding_dt">
							<span class="plan-menu"><?php the_field('plan_menu_2_3');?></span>
						</dt>
						<dd class="plan-wedding_dt__price"><?php the_field('plan-pricel_2_3');?></dd>
						<dd class="plan-wedding_dt__contactme"><?php the_field('plan-detail_2_3');?></dd>
					</dl>
					</div>
				</div>
			</section>
		<!--//wedding-->

		<!--family-->
			<section id="plan-family">
				<div class="plan-outer">
					<div class="plan_img__parent horizon">
						<p class="pc-img plan my-effect"><img src="<?php the_field('shooting_plan_img03');?>" alt="矢寺梨奈の撮影プランの家族写真メニュー"></p>
						<p class="sp-img plan horizon text-center my-effect"><img src="<?php the_field('shooting_plan_img03');?>" alt="矢寺梨奈の撮影プランの家族写真メニュー"></p>
						<span class="plan_img__child02">shooting plan03</span>
					</div>
					<div class="plan-descrintion horizon family">
						<h2 class="plan lowpage_h2 plan-animation">shooting plan03</h2>
						<h3 class="plan lowpage_h3 plan-animation"><?php the_field('shooting_plan03');?></h3>

						<dl class="shooting-plan__outer family my-effect__second">
							<dt class="plan-menu__outer">
								<span class="plan-menu"><?php the_field('plan_menu_3_1');?></span>
								<span class="plan-menu"><?php the_field('plan_menu_3_2');?></span>
							</dt>
							<dd class="plan-detail">
								<span class="plan-menu"><?php the_field('plan-detail_3_1');?></span>
								<span class="plan-menu plan-price"><?php the_field('plan-price_3_1');?></span>
							</dd>
							<dd>
								<span class="plan-menu"><?php the_field('plan-detail_3_1');?></span>
								<span class="plan-menu plan-price"><?php the_field('plan-price_3_2');?></span>
							</dd>
						</dl>
					</div>
				</div>
			</section>
		<!--//family-->

		</div>
			<div class="btn-pagetop">
			<a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/common/go-to-top.svg" alt=""></a>
		</div>

	</main>
	<!--//main-->

	<!--footer-->
	<footer class="footer-lowpage inner">
<!--		<div class="inner">-->
		<small class="copy_right">&copy;2018 rina yatera</small>
<!--		</div>-->
	</footer>
	<!--//footer-->

	<script type="text/javascript">
$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
</script>
	<script>
		var ua = navigator.userAgent;
		if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
			// スマホのとき
			$('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />');
		}else{
			// PC・タブレットのとき
			$('head').prepend('<meta name="viewport" content="width=1200" />');
		}
</script>

<script>
// ユーザーエージェントの判別
var userAgent = navigator.userAgent;

// スマートフォンの場合はorientationchangeイベントを監視する
if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0)
    window.addEventListener("orientationchange", resizeHandler);
else
    window.addEventListener("resize", resizeHandler);

function resizeHandler() {
}

</script>
<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/textillate/jquery.textillate.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/textillate/jquery.lettering.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/plan.js"></script>



<script>
$(function () {
	$('.plan-animation__top').css('opacity','0');
	 setTimeout(function(){
		 $('.plan-animation__top').css('opacity','1').textillate({
          in: {
            effect: 'fadeIn',
            shuffle: false,
            delay: 50,
            delayScale: 1.5,
          }});

	 }, 1500);


  $(window).on("scroll load",function(){
    $('.plan-animation').each(function(){
      var windowHeight = $(window).height();
      var scroll = $(window).scrollTop();
      var hogePoint = $(this).offset().top;
      if (scroll > hogePoint - windowHeight){
        $(this).css('opacity',1).textillate({
          in: {
            effect: 'fadeIn',
            shuffle: false,
            delay: 70,
            delayScale: 1.5,
          }});
      }
    });
  });
});
</script>
<?php get_footer();?>
