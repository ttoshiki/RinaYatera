let now_post_num = 6
let get_post_num = 6
let total_post_num = now_post_num + get_post_num - 1
let isFirst = true
let getJSONResults = []
let buttonText = ''
let rangeToRoad = []
let venoBox = function() {
    $('.zoomin').venobox({
        infinigall: true,
        numeratio: false,
        arrowsColor: '#FFFFFF',
        closeBackground: 'rgba(255,255,255,0.1)',
        closeColor: '#B0BBD0',
        bgcolor:  '#FFFFFF',
        overlayColor: 'rgba(255,255,255,0.95)',
        spinColor: '#09898D',
        spinner: 'wandering-cubes',
    });
}

let addPhotosDom = function(now_post_num, get_post_num, total_post_num, getJSONResults) {
    const evenTransitionSpeed = 1200;
    const oddTransitionSpeed = 600;
    const fadeInSpeed = 200
    rangeToRoad = getJSONResults.slice(now_post_num + 1, total_post_num)
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
    $('.addDom').fadeIn(fadeInSpeed).animate({
        top: 0,
        opacity: 1
    },600)
    venoBox()
}


if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
    buttonText += 'TAP '
} else {
    window.addEventListener("resize", resizeHandler);
    buttonText += 'CLICK '
}
buttonText += 'FOR MORE'
const buttonHtml = '<li id="moreLoadButton"><button id="moreLoad">' + buttonText + '</button></li>'

$("#artist-list").on("click", "#moreLoad", function() {
    $('#moreLoadButton').prop("disabled", true)
    if(isFirst) {
        $.getJSON( "//rinayatera.com/wp/wp-json/wp/v2/posts?_embed&categories=3&per_page=100", function(results) {
            getJSONResults = results
            isFirst = false
            addPhotosDom(now_post_num, get_post_num, total_post_num, getJSONResults)
            now_post_num += get_post_num
            total_post_num += get_post_num
            $("#artist-list").append(buttonHtml);
        });
    } else {
        addPhotosDom(now_post_num, get_post_num, total_post_num, getJSONResults)
        if(rangeToRoad.length >= get_post_num - 1) {
            $("#artist-list").append(buttonHtml);
            now_post_num += get_post_num
            total_post_num += get_post_num
        }
    }
});
