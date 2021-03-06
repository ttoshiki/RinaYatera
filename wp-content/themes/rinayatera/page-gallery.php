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
                        $number_of_last_line = 4;

                        // The Loop
                        if ($the_query->have_posts()) {
                            ?><ul class="photos-thumbnail" id="artist-list">
						<?php while ($the_query->have_posts()) {
                                $the_query->the_post(); ?>
						<!--PC-->
						<?php if ($number_of_last_line > 0) { ?>
						<li class="photos pc-img photos-hover">
						<?php } else { ?>
						<li class="photos pc-img photos-hover last">
						<?php } ?>
							<a href=" <?php echo get_the_post_thumbnail_url()?> " class="zoomin" data-gall="artist-pc">
								<span class="cover"></span>
								<img src="<?php echo get_field('pc-thumbnail'); ?>" alt="">
							</a>
							<div class="view-more">
								<p class="view-more__sentense">view more</p>
							</div>
						</li>
						<!--SP-->
						<li class="photos sp-img photos-thumbnail">
							<a href=" <?php echo get_the_post_thumbnail_url()?> " class="zoomin" data-gall="artist-sp">
                                <img src="<?php echo get_field('sp-samuneiru'); ?>" alt="">
							</a>
						</li>
							<?php
                                if ($number_of_last_line > 0) {
                                    --$number_of_last_line;
                                }
                            } ?>
							<li class="photos photos-thumbnail moreLoad last" id="moreLoad__artist">
								<button value="artist" class="moreLoadButton" id="moreLoadButton__artist"><span class="moreLoadButton__text">CLICK<br>FOR MORE</span></button>
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
                                    'posts_per_page' => 7,
                                    'no_found_rows' => true,  //ページャーを使う時はfalseに。
                                    'category_name' => 'other'
                                    //論理和：カテゴリースラッグで指定
                                );
                                $the_query = new WP_Query($args);

                                // The Loop
                                if ($the_query->have_posts()) {
                                    ?><ul class="photos-thumbnail" id="other-list">
								<?php while ($the_query->have_posts()) {
                                        $the_query->the_post(); ?>
								<!--PC-->

								<li class="photos pc-img photos-hover my-effect">
									<a href=" <?php echo get_the_post_thumbnail_url()?>" class="zoomin" data-gall="other-pc">
										<span class="cover"></span>
										<img src="<?php echo get_field('pc-thumbnail'); ?>" alt="">
									</a>
									<div class="view-more">
										<p class="view-more__sentense">view more</p>
									</div>
								</li>
								<!--SP-->
								<li class="photos sp-img photos-thumbnail my-effect">
									<a href=" <?php echo get_the_post_thumbnail_url()?> " class="zoomin" data-gall="other-sp">
										<img src="<?php echo get_field('sp-samuneiru'); ?>" alt="">
									</a>
								</li>
							<?php
                                    } ?>
									<li class="photos photos-thumbnail my-effect moreLoad" id="moreLoad__other">
										<button value="other" class="moreLoadButton" id="moreLoadButton__other"><span class="moreLoadButton__text">CLICK<br>FOR MORE</span></button>
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

				<section>
					<div class="inner text-center">
						<h3 class="go-to-plan">詳しい撮影プランはコチラ</h3>

						<div class="go-to-plan_btn__outer">
							<a href="<?php echo home_url('/plan'); ?>#plan-portrait" class="go-to-plan_btn__sentense">see more details</a>
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
var userAgent = navigator.userAgent;
let isMobile = false
// スマートフォンの場合はorientationchangeイベントを監視する
if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
	isMobile = true
}

if(isMobile) {
	window.addEventListener("orientationchange", resizeHandler);
	$('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />');
	$('.moreLoadButton__text').html('TAP<br class="button__br">FOR MORE')
} else {
	window.addEventListener("resize", resizeHandler);
	$('head').prepend('<meta name="viewport" content="width=1200" />');
	$('.moreLoadButton__text').html('CLICK<br>FOR MORE')
	$('.sp-img').remove()
}

function resizeHandler() {
}
</script>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/gsap.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/moreLoad.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/photos.js"></script>

<?php get_footer();?>
