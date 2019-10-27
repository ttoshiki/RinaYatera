<?php get_header();?>
	<ul class="slider slick-parent slider-pc-img">
		<li class="pc-img"><a href="#">
		<?
			//画像(返り値は「画像ID」)
			$img = get_field('top-photo_pc1');
			$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
			if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
			<? } ?>
		</a>
			</li>
			<li class="pc-img"><a href="#">
		<?
		//画像(返り値は「画像ID」)
		$img = get_field('top-photo_pc2');
		$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
		if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
		<? } ?>
		</a>
		</li>
		<li class="pc-img"><a href="#">
		<?
		//画像(返り値は「画像ID」)
		$img = get_field('top-photo_pc3');
		$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
		if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
		<? } ?>
			</a>
		</li>
		<li class="pc-img"><a href="#">
		<?
		//画像(返り値は「画像ID」)
		$img = get_field('top-photo_pc4');
		$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
		if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
		<? } ?>
			</a>
		</li>
		<li class="pc-img"><a href="#">
		<?
		//画像(返り値は「画像ID」)
		$img = get_field('top-photo_pc5');
		$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
		if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
		<? } ?>
		</a>
		</li>
		<li class="pc-img"><a href="#">
		<?
		//画像(返り値は「画像ID」)
		$img = get_field('top-photo_pc6');
		$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
		if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
		<? } ?>
		</a>
		</li>
	</ul>

	<ul class="slider slick-parent slider-sp-img">
		<li class="pc-img"><a href="#">
		<?
			//画像(返り値は「画像ID」)
			$img = get_field('top-photo_sp1');
			$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
			if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
			<? } ?>
		</a>
			</li>
			<li class="pc-img"><a href="#">
		<?
		//画像(返り値は「画像ID」)
		$img = get_field('top-photo_sp2');
		$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
		if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
		<? } ?>
		</a>
		</li>
		<li class="pc-img"><a href="#">
		<?
		//画像(返り値は「画像ID」)
		$img = get_field('top-photo_sp3');
		$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
		if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
		<? } ?>
			</a>
		</li>
		<li class="pc-img"><a href="#">
		<?
		//画像(返り値は「画像ID」)
		$img = get_field('top-photo_sp4');
		$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
		if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
		<? } ?>
			</a>
		</li>
	</ul>


	<!-- <ul class="slider slick-parent slider-sp-img">
		<li class="sp-img">
			<a href="#">
			<?
			//画像(返り値は「画像ID」)
			$img = get_field('top-photo_sp1');
			$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
			if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
			<? } ?>
		</a>
	</li>
		<li class="sp-img">
			<a href="#">
				<?
				//画像(返り値は「画像ID」)
				$img = get_field('top-photo_sp2');
				$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
				if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
				<? } ?>
			</a>
		</li>
		<li class="sp-img">
			<a href="#">
				<?
				//画像(返り値は「画像ID」)
				$img = get_field('top-photo_sp3');
				$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
				if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
				<? } ?>
			</a>
		</li>
		<li class="sp-img">
			<a href="#">
				<?
				//画像(返り値は「画像ID」)
				$img = get_field('top-photo_sp4');
				$imgurl = wp_get_attachment_image_src($img, 'full'); //サイズは自由に変更してね
				if($imgurl){ ?><img src="<? echo $imgurl[0]; ?>" alt="">
				<? } ?>
			</a>
			</li> -->
	<!-- </ul> -->

<!--	<img data-lazy="http://example.com/image2.png">-->

<!--footer-->
	<footer class="footer">
		<small class="copy_right">&copy;2018 rina yatera</small>
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

<script src="<?php echo get_template_directory_uri(); ?>/slick/slick.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/slick.js" ></script>

<?php get_footer();?>
