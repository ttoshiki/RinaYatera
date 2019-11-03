let now_post_num = 7 // 現在表示されている数
let get_post_num = 7

$("#moreLoad").on("click", function() {

    $.getJSON( "http://rinayatera.com/wp/wp-json/wp/v2/posts?_embed&categories=3&per_page=100", function(results) {
        rangeToRoad = results.slice(0,7)
        $.each(rangeToRoad, function(i, item) {
            item = item
            console.log(item);
            thumbnailUrl = item['_embedded']['wp:featuredmedia']['0']['media_details']['sizes']['full']['source_url']
            console.log(thumbnailUrl);

            $(".photos-thumbnail").append('<li class="photos pc-img odd photos-hover my-effect"><a href="' + thumbnailUrl + '" class="zoomin" data-gall="artist-pc"></li>');
        });
    });
});
