<?php
    require_once("../../../wp-config.php");
    $now_post_num = $_POST['now_post_num'];
    $get_post_num = $_POST['get_post_num'];
    $next_now_post_num = $now_post_num + $get_post_num;
    $next_get_post_num = $get_post_num + $get_post_num;
    $sql = "SELECT
            $wpdb->posts.ID,
            $wpdb->posts.post_title,
            $wpdb->posts.post_content
        FROM
            $wpdb->posts
        WHERE
            $wpdb->posts.post_type = 'post' AND $wpdb->posts.post_status = 'publish'

        ORDER BY
            $wpdb->posts.post_date DESC
        LIMIT %d, %d";

    $pre = $wpdb->prepare($sql, $now_post_num, $get_post_num); // 追記
    $results = $wpdb->get_results($pre);

    $sql = "SELECT
            $wpdb->posts.ID,
            $wpdb->posts.post_title,
            $wpdb->posts.post_content
        FROM
            $wpdb->posts
        WHERE
            $wpdb->posts.post_type = 'post' AND $wpdb->posts.post_status = 'publish'
        ORDER BY
            $wpdb->posts.post_date DESC
        LIMIT %d, %d";

    $next_pre = $wpdb->prepare($sql, $next_now_post_num, $next_get_post_num); // 追記
    $next_results = $wpdb->get_results($next_pre);

    $noDataFlg = 0;
    if (count($results) < $get_post_num || !count($next_results)) {
        $noDataFlg = 1;
    }

    $html = "";

    foreach ($results as $result) {
        $html .= '<li class="photos pc-img odd photos-hover my-effect">';
        $html .= '<a href="'.get_the_post_thumbnail_url($result->ID).'" class="zoomin" data-gall="artist-pc"></a>';
        // $html .= '<span class="cover"></span>';
        // $html .= $imgurl = wp_get_attachment_image_src($img, 'full');
        // $html .= if ($imgurl) { '<img src="'.$imgurl[0]; '" alt=""></a>'};
        $html .= '<div class="view-more"><p class="view-more__sentense">view more</p></div>';

        $html .= '<h1><a href="'.get_permalink($result->ID).'" class="over">'.apply_filters('the_title', $result->post_title).'</a></h1>';
        $html .= '<p>'.get_post_time('M d, Y', 'false', $result->ID).'</p>';
        // $html .= '<p>'.mb_substr(strip_tags($result->post_content), 0, 108).'...</p>';
        // $html .= '<p><a href="'.get_permalink($result->ID).'">Read More</a></p>';
        // $html .= '</article>';
        $html .= '</li>';
    }
    $returnObj = array();
    $returnObj = array(
        'noDataFlg' => $noDataFlg,
        'html' => $html
    );
    $returnObj = json_encode($returnObj);

    echo $returnObj;
