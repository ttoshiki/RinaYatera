
let now_post_num = 6
let get_post_num = now_post_num + 6
let isFirst = true
let getJSONResults = []
const buttonHtml = '<li id="moreLoadButton"><button id="moreLoad">もっと読みこむ</button></li>'

$("#artist-list").on("click", "#moreLoad", function() {
    if(isFirst) {
        $.getJSON( "http://rinayatera.com/wp/wp-json/wp/v2/posts?_embed&categories=3&per_page=100", function(results) {
            console.log(now_post_num)
            getJSONResults = results
            isFirst = false
            rangeToRoad = getJSONResults.slice(now_post_num + 1, get_post_num)
            console.log(rangeToRoad)
             $('#moreLoad').remove()
            $.each(rangeToRoad, function(i, item) {
                thumbnailUrl = item['_embedded']['wp:featuredmedia']['0']['media_details']['sizes']['full']['source_url']
                pcThumnailUrl = item['acf']['pc-thumbnail']

                let outputHtml = '<li class="photos pc-img odd photos-hover my-effect"><a href="' + thumbnailUrl + '" class="zoomin" data-gall="artist-pc">'
                outputHtml += `<span class="cover"></span>`
                outputHtml += '<img src="' + pcThumnailUrl + '" alt=""></a>'

                $("#artist-list").append(outputHtml);
            });
            $("#artist-list").append(buttonHtml);
            now_post_num += 6
            get_post_num += 6
        });
    } else {
        rangeToRoad = getJSONResults.slice(now_post_num + 1, get_post_num)
        console.log(rangeToRoad)
        $('#moreLoad').remove()
        $.each(rangeToRoad, function(i, item) {
            thumbnailUrl = item['_embedded']['wp:featuredmedia']['0']['media_details']['sizes']['full']['source_url']
            pcThumnailUrl = item['acf']['pc-thumbnail']

            let outputHtml = '<li class="photos pc-img odd photos-hover my-effect"><a href="' + thumbnailUrl + '" class="zoomin" data-gall="artist-pc">'
            outputHtml += `<span class="cover"></span>`
            outputHtml += '<img src="' + pcThumnailUrl + '" alt=""></a>'

            $("#artist-list").append(outputHtml);
        });
        $("#artist-list").append(buttonHtml);
        now_post_num += 6
        get_post_num += 6
    }
});
