
let now_post_num = 6
let get_post_num = 4
let total_post_num = now_post_num + get_post_num
let isFirst = true
let getJSONResults = []
let buttonText = ''

if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
    buttonText += 'TAP '
} else {
    window.addEventListener("resize", resizeHandler);
    buttonText += 'CLICK '
}
buttonText += 'FOR MORE'
const buttonHtml = '<li id="moreLoadButton"><button id="moreLoad">' + buttonText + '</button></li>'

$("#artist-list").on("click", "#moreLoad", function() {
    const evenTransitionSpeed = 1200;
    const oddTransitionSpeed = 600;
    if(isFirst) {
        $.getJSON( "//rinayatera.com/wp/wp-json/wp/v2/posts?_embed&categories=3&per_page=100", function(results) {
            console.log(now_post_num)
            getJSONResults = results
            isFirst = false
            rangeToRoad = getJSONResults.slice(now_post_num + 1, total_post_num)
            console.log(rangeToRoad)
             $('#moreLoad').remove()
             $('#moreLoadButton').remove()
            $.each(rangeToRoad, function(i, item) {
                thumbnailUrl = item['_embedded']['wp:featuredmedia']['0']['media_details']['sizes']['full']['source_url']
                pcThumnailUrl = item['acf']['pc-thumbnail']
                let outputHtml = '<li class="photos pc-img photos-hover addDom"><a href="' + thumbnailUrl + '" class="zoomin" data-gall="artist-pc">'
                outputHtml += `<span class="cover"></span>`
                outputHtml += '<img src="' + pcThumnailUrl + '" alt=""></a>'
                outputHtml += '<div class="view-more"><p class="view-more__sentense">view more</p></div></li>'
                // $("#artist-list").append(outputHtml);
                $(outputHtml).appendTo("#artist-list").hide()
            });
            $('.addDom:even').css({ position: 'relative', top: 20, opacity: 0, transition: evenTransitionSpeed + 'ms'});
            $('.addDom:odd').css({ position: 'relative', top: 20, opacity: 0, transition: oddTransitionSpeed + 'ms'});
            $('.addDom').fadeIn(600).animate({
                top: 0,
                opacity: 1
            },600)
            $("#artist-list").append(buttonHtml);
            now_post_num += get_post_num
            total_post_num += get_post_num
        });
    } else {
        rangeToRoad = getJSONResults.slice(now_post_num + 1, total_post_num)
        console.log(rangeToRoad.length)
            $('#moreLoad').remove()
            $('#moreLoadButton').remove()
            $.each(rangeToRoad, function(i, item) {
                thumbnailUrl = item['_embedded']['wp:featuredmedia']['0']['media_details']['sizes']['full']['source_url']
                pcThumnailUrl = item['acf']['pc-thumbnail']

                let outputHtml = '<li class="photos pc-img photos-hover addDom"><a href="' + thumbnailUrl + '" class="zoomin" data-gall="artist-pc">'
                outputHtml += `<span class="cover"></span>`
                outputHtml += '<img src="' + pcThumnailUrl + '" alt=""></a>'
                outputHtml += '<div class="view-more"><p class="view-more__sentense">view more</p></div></li>'

                $(outputHtml).appendTo("#artist-list").hide()
            });
            $('.addDom:even').css({ position: 'relative', top: 20, opacity: 0, transition: evenTransitionSpeed + 'ms'});
            $('.addDom:odd').css({ position: 'relative', top: 20, opacity: 0, transition: oddTransitionSpeed + 'ms'});
            $('.addDom').fadeIn(600).animate({
                top: 0,
                opacity: 1
            },600)
            if(rangeToRoad.length >= get_post_num - 1) {
                $("#artist-list").append(buttonHtml);
                now_post_num += get_post_num
                total_post_num += get_post_num
            }
    }
});
