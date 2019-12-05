<?php get_header();?>
<body <?php body_class(); ?>>

	<!--main-->

	<?php

// The Query
$args = array(
    'post_type' => 'post',
    'posts_per_page' => -1,
    'no_found_rows' => true,  //ページャーを使う時はfalseに。
 );
$the_query = new WP_Query( $args );

// The Loop
if ( $the_query->have_posts() ) {
echo '<ul>';
while ( $the_query->have_posts() ) {
$the_query->the_post();
echo '<li>' . get_the_title() . '</li>';
}
echo '</ul>';
/* Restore original Post Data */
wp_reset_postdata();
} else {
// no posts found
}
		?>
</script>
<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/photos.js"></script>
<?php get_footer();?>
