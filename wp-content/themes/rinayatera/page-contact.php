<?php get_header();?>
	<!--main-->
	<main>
			<div class="inner">
        <?php if (have_posts()): ?>
        <?php while (have_posts()) : the_post(); ?>
				<h1 class="lowpage_h1"><?php the_title();?></h1>
        <?php the_content();?>
      <?php endwhile; ?>
      <?php endif; ?>






<!--
				<form action="#" method="POST" class="form-inner">
					<dl class="form-item">
						<dt class="contact-item"><label for="subject">subject</label><span class="required">※</span></dt>
						<dd><input type="text"  placeholder="お問いわせ内容" name="subject" id="subject" class="form-parts"></dd>
					</dl>

					<dl class="form-item">
						<dt class="contact-item"><label for="name">name</label><span class="required">※</span></dt>
						<dd><input type="text" placeholder="お名前を漢字でご記入ください" name="name_kanji" id="name_kanji" class="form-parts"></dd>
					</dl>


					<dl class="form-item">
						<dt class="contact-item"><label for="name_kana">カナ</label> <span class="required">※</span></dt>
						<dd><input type="text"  placeholder="お名前をカタカナでご記入ください" name="name_kana" id="name-kana" class="form-parts"></dd>
					</dl>

					<dl class="form-item">
						<dt class="contact-item"><label for="e-mail">e-mail</label> <span class="required">※</span></dt>
						<dd><input type="text" placeholder="メールアドレス" name="e-mail" id="e-mail" class="form-parts"></dd>
					</dl>

					<dl class="form-item">
						<dt class="contact-item"><label for="message">message</label> <span class="required">※</span></dt>
						<dd><textarea name="message" id="message" cols="30" rows="10" placeholder="メッセージ" class="form-parts"></textarea></dd>

					</dl>

					<span class="required-message">※必須</span>

							<p class="text-center">
								<input type="submit"  value="send" class="btn-submit">
							</p>



						<div class="section-footer">
					<p class="btn-outer"><input type="submit" value="確認" class="btn btn-submit"></p>


-->


<!--				</form>	-->


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
