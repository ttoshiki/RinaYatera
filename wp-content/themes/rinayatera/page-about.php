<?php get_header();?>
	<main>
			<div class="inner">
        <?php if (have_posts()): ?>
        <?php while (have_posts()) : the_post(); ?>
				<h1 class="about lowpage_h1"><?php the_title();?></h1>
				<p class="title_background"><?php the_title();?></p>

        <?php the_content();?>
      <?php endwhile; ?>
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
<script src="<?php echo get_template_directory_uri(); ?>/textillate/jquery.lettering.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/textillate/jquery.textillate.js"></script>

<script>
$(function () {
	$('.text-animation').textillate({
		selector: '.text-animation',	// 要素を指定
		loop: false,	// ループ繰り返し
		minDisplayTime: 400,	// アニメーションの間隔時間
		initialDelay: 500,	// アニメーション開始までの遅延時間
		autoStart: true,	// アニメーションの自動スタート
		inEffects: [],	// エフェクト開始時のアニメーション設定
		outEffects: [ 'hinge' ],	// エフェクト終了時のアニメーション設定

		in: {
			effect: 'fadeIn',	// エフェクトの指定
			delayScale: 1.5,	// 遅延時間の指数
			delay: 50,	// 文字ごとの遅延時間
			sync: false,	// アニメーションをすべての文字に同時に適用
			shuffle: false, // 文字のランダム表示
			reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
			callback: function () {}	// コールバック関数
		},

		out: {
			effect: 'hinge',
			delayScale: 1.5,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: false,
			callback: function () {}
		},
		callback: function () {},
		type: 'char'
	});
})
</script>

<script>
$(function () {
	$('.paragraph-animation').textillate({
		selector: '.text-animation',	// 要素を指定
		loop: false,	// ループ繰り返し
		minDisplayTime: 800,	// アニメーションの間隔時間
		initialDelay: 920,	// アニメーション開始までの遅延時間
		autoStart: true,	// アニメーションの自動スタート
		inEffects: [],	// エフェクト開始時のアニメーション設定
		outEffects: [ 'hinge' ],	// エフェクト終了時のアニメーション設定

		in: {
			effect: 'fadeInUp',	// エフェクトの指定
			delayScale: 0,	// 遅延時間の指数
			delay: 0,	// 文字ごとの遅延時間
			sync: true,	// アニメーションをすべての文字に同時に適用
			shuffle: false, // 文字のランダム表示
			reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
			callback: function () {}	// コールバック関数
		},

		out: {
			effect: 'hinge',
			delayScale: 1.5,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: false,
			callback: function () {}
		},
		callback: function () {},
		type: 'char'
	});
})
</script>
<?php get_footer();?>
