<?php get_header();?>
<body <?php body_class(); ?>>

	<!--main-->
	<main>
		<div class="inner">
			<h1 class="lowpage_h1">gallery</h1>
			<p class="title_background gallery">gallery</p>
				<h2 class="photos lowpage_h2">artist</h2>
				<section class="photos-h2__parents" id="artist">
					<div class="photos-inner">
						<?php

                        // The Query
                        $args = array(
                            'post_type' => 'post',
                            'posts_per_page' => 7,
                            'no_found_rows' => true,  //ページャーを使う時はfalseに。
                            'category_name' => 'artist'
                            //論理和：カテゴリースラッグで指定
                        );
                        $the_query = new WP_Query($args);

                        // The Loop
                        if ($the_query->have_posts()) {
                            ?><ul class="photos-thumbnail">
						<?php while ($the_query->have_posts()) {
                                $the_query->the_post(); ?>
						<!--PC-->
						<li class="photos pc-img odd photos-hover my-effect">
							<a href=" <?php echo get_the_post_thumbnail_url()?> " class="zoomin" data-gall="artist-pc">
							<span class="cover"></span>
							<?php
                                //画像(返り値は「画像ID」)
                                $img = get_field('pc-thumbnail');
                                $imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
                                if ($imgurl) { ?><img src="<?php echo $imgurl[0]; ?>" alt=""></a>
								<?php } ?>
							<div class="view-more">
								<p class="view-more__sentense">view more</p>
							</div>
						</li>
						<!--SP-->
						<li class="photos sp-img photos-thumbnail my-effect">
							<a href=" <?php echo get_the_post_thumbnail_url()?> " class="zoomin" data-gall="artist-sp">
								<?php
                                    //画像(返り値は「画像ID」)
                                    $img = get_field('sp-samuneiru');
                                $imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
                                if ($imgurl) { ?><img src="<?php echo $imgurl[0]; ?>" alt="">
									<?php } ?>
									</a>
						</li>
					<?php
                            } ?>
							<li id="moreLoadButton">
								<button id="moreLoad">もっと読みこむ</button>
							</li>
						</ul>
						<?php
                        /* Restore original Post Data */

                        wp_reset_postdata();
                        } else {
                            // no posts found
                        }
                            ?>
					</div>
						</section>
</div>
						<section class="photos photos-background-color photos-subhead" id="other">
							<div class="inner photos">
							<h2 class="photos lowpage_h2__second-category">other</h2>
							<div class="photos-inner__second-category">
								<?php

                                // The Query
                                $args = array(
                                    'post_type' => 'post',
                                    'posts_per_page' => -1,
                                    'no_found_rows' => true,  //ページャーを使う時はfalseに。
                                    'category_name' => 'other'
                                    //論理和：カテゴリースラッグで指定
                                );
                                $the_query = new WP_Query($args);

                                // The Loop
                                if ($the_query->have_posts()) {
                                    ?><ul class="photos-thumbnail">
								<?php while ($the_query->have_posts()) {
                                        $the_query->the_post(); ?>
								<!--PC-->

								<li class="photos pc-img odd photos-hover my-effect">
									<a href=" <?php echo get_the_post_thumbnail_url()?> " class="zoomin" data-gall="artist-pc">
									<span class="cover"></span>
									<?php
                                        //画像(返り値は「画像ID」)
                                        $img = get_field('pc-thumbnail');
                                        $imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
                                        if ($imgurl) { ?><img src="<?php echo $imgurl[0]; ?>" alt=""></a>
										<?php } ?>
									<div class="view-more">
										<p class="view-more__sentense">view more</p>
									</div>
								</li>
								<!--SP-->
								<li class="photos sp-img photos-thumbnail my-effect">
									<a href=" <?php echo get_the_post_thumbnail_url()?> " class="zoomin" data-gall="artist-sp">
										<?php
                                            //画像(返り値は「画像ID」)
                                            $img = get_field('sp-samuneiru');
                                        $imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
                                        if ($imgurl) { ?><img src="<?php echo $imgurl[0]; ?>" alt="">
											<?php } ?>
											</a>
								</li>
							<?php
                                    } ?>
								</ul>
								<?php
                                /* Restore original Post Data */

                                wp_reset_postdata();
                                } else {
                                    // no posts found
                                }
                                    ?>
							</div>
								</section>
					</div>

				<section>
					<div class="inner text-center">
						<h3 class="go-to-plan">詳しい撮影プランはコチラ</h3>

						<div class="go-to-plan_btn__outer">
							<a href="../plan/index.html#plan-portrait" class="go-to-plan_btn__sentense">see more details</a>
						</div>

					</div>
				</section>
		<div class="btn-pagetop">
			<a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/common/go-to-top.svg" alt=""></a>
		</div>
	</main>
	<!--//main-->



	<!--footer-->
	<footer class="footer-lowpage inner">
		<div class="inner">
		<small class="copy_right">&copy;2018 rina yatera</small>
		</div>
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

<script src="<?php echo get_template_directory_uri(); ?>/js/venobox.min.js"></script>
<script>
	$(function() {
		$('.zoomin').venobox({
			infinigall: true,
			numeratio: false,
			arrowsColor: '#FFFFFF',
			closeBackground: 'rgba(255,255,255,0.1)',
			closeColor: '#B0BBD0',
			bgcolor:  '#FFFFFF',
			overlayColor: 'rgba(255,255,255,0.95)',
			spinColor: '#09898D',
			spinner: 'wandering-cubes',
		});
	});
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

<script src="<?php echo get_template_directory_uri(); ?>/js/moreLoad.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/photos.js"></script>

<?php get_footer();?>
