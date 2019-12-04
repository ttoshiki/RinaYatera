<?php
// これでWordPress関数がほとんど使えるようになる！
include 'wp-load.php';
// wp_optionsテーブルから10件を取得
$results = $wpdb->get_results("SELECT * FROM $wpdb->posts LIMIT 10");
// 結果を表示
var_dump($results);
