var now_post_num = 7; // 現在表示されている数
var get_post_num = 2; // もっと読むボタンを押した時に取得する数

$("#moreLoad").on("click", function() {

    $("#moreLoad").html('<img class="ajax_loading" src="http://rinayatera.com/wp/wp-content/themes/okuda/img/ajax-loader.gif" />');

    $.ajax({
        type: 'post',
        url: 'http://rinayatera.com/wp/wp-content/themes/rinayatera/moreLoad.php',
        data: {
            'now_post_num': now_post_num,
            'get_post_num': get_post_num
        },
        success: function(data) {
            now_post_num = now_post_num + get_post_num;
            data = JSON.parse(data);
            $(".photos-thumbnail").append(data['html']);
            $("#moreLoad").remove();
            if (!data['noDataFlg']) {
                $(".main").append('<li class="photos pc-img odd photos-hover my-effect"><button id="moreLoad">もっと読みこむ</button></li>');
            }
        }
    });
    return false;
});
