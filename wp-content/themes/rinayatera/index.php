<?php get_header();?>
	<main>
			<div class="inner">
        <?php if (have_posts()): ?>
        <?php while (have_posts()) : the_post(); ?>
				<h1 class="about lowpage_h1"><?php the_title();?></h1>
				<p class="title_background"><?php the_title();?></p>

        <?php the_content();?>
      <?php endwhile; else:?>
				<h1 class="about lowpage_h1">404 NOT FOUND,ご指定のページが見つかりませんでした。</h1>
				<p class="about-paragraph about-description__jap paragraph-animation">
							恐れ入りますが、メニューより再度ページを指定してください。
						</p>

      <?php endif; ?>
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

<?php get_footer();?>
