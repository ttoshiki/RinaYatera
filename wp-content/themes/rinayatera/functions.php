<?php
//ショートコード
function my_home_url($atts)
{
    return home_url();
}
add_shortcode('home_url', 'my_home_url');


function my_theme_url($atts)
{
    return get_template_directory_uri();
}
add_shortcode('theme_url', 'my_theme_url');

register_nav_menus(array(
    'grobal_navugation' => 'グローバルナビゲーション',
));

add_filter('acf/settings/remove_wp_meta_box', '__return_false');

add_theme_support('post-thumbnails');

function wpcf7_file_control()
{
    add_filter("wpcf7_load_js", "__return_false");
    add_filter("wpcf7_load_css", "__return_false");

    if (is_page("contact")) {
        if (function_exists("wpcf7_enqueue_scripts")) {
            wpcf7_enqueue_scripts();
        }
        if (function_exists("wpcf7_enqueue_styles")) {
            wpcf7_enqueue_styles();
        }
    }
}
add_action("template_redirect", "wpcf7_file_control");


// ajaxURLの追加
function add_my_ajaxurl()
{
    ?>
    <script>
        var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
    </script>
<?php
}
add_action('wp_head', 'add_my_ajaxurl', 1);

// testMethods
function moreLoad()
{
    // require_once("../../../wp-config.php");

    $now_post_num = 5;
    $get_post_num = 5;


    // $sql = "SELECT
    //     $wpdb->posts.ID,
    //     $wpdb->posts.post_title,
    //     $wpdb->posts.post_excerpt
    // FROM
    //     $wpdb->posts
    // WHERE
    //     $wpdb->posts.post_type = 'post' AND $wpdb->posts.post_status = 'publish'
    // ORDER BY
    //     $wpdb->posts.post_date DESC
    // LIMIT $now_post_num, $get_post_num";

    // $results = $wpdb->get_results($sql);

    $html = "a";

    // foreach ($results as $result) {
    //     $html .= '<li class="photos pc-img odd photos-hover my-effect">';
    //     $html .= '<a href="'.get_the_post_thumbnail_url().'" class="zoomin" data-gall="artist-pc">';
    //     $html .= '<span class="cover"></span>';
    //     $html .= $img = get_field('pc-thumbnail');
    //     $html .= $imgurl = wp_get_attachment_image_src($img, "full");
    //     // $html .= if ($imgurl) { '<img src="'.echo $imgurl[0];.' alt=""></a>';
    //     $html .= '<div class="view-more">';
    //     $html .= '<p class="view-more__sentense">view more</p>';
    //     $html .= '</div>';

    //     $html .= '<h2><a href="'.get_permalink($result->ID).'">'.apply_filters('the_title', $result->post_title).'</a></h2>';
    //     $html .= '<div class="excerpt">'.apply_filters('the_excerpt', $result->post_excerpt).'</div>';
    //     $html .= '</li>';
    // }
    // echo $html;

    echo $wpdb;


    // echo get_bloginfo('name');
    die();
}
add_action('wp_ajax_moreLoad', 'moreLoad');
add_action('wp_ajax_nopriv_moreLoad', 'moreLoad');
