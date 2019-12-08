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
    'grobal_navigation' => 'グローバルナビゲーション',
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
