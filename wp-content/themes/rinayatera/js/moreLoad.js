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
venoBox()

const vboxPreloadImage = '<div class="vbox-preloader"><div class="sk-wandering-cubes -gallery"><div class="sk-cube sk-cube1 -gallery" style="background-color: rgb(9, 137, 141);"></div><div class="sk-cube sk-cube2 -gallery" style="background-color: rgb(9, 137, 141);"></div></div></div>'

let addPhotosDom = function() {
    const evenTransitionSpeed = 1600;
    const oddTransitionSpeed = 800;
    const fadeInSpeed = 100
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
    },200)
    venoBox()
}


if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
    buttonText += 'TAP '
} else {
    window.addEventListener("resize", resizeHandler);
    buttonText += 'CLICK '
}
buttonText += 'FOR MORE'
const buttonHtml = '<li class="photos pc-img photos-thumbnail addDom" id="moreLoad"><button id="moreLoadButton"><span class="moreLoadButton__text">CLICK<br>FOR MORE</span></button></li>'

$("#artist-list").on("click", "#moreLoad", function() {
    $('.moreLoadButton__text').text('LOADING')
    $('.moreLoadButton__text').append(vboxPreloadImage)
    $('#moreLoadButton').prop("disabled", true)
    if(isFirst) {
        $.getJSON( "//rinayatera.com/wp/wp-json/wp/v2/posts?_embed&categories=3&per_page=100", function(results) {
            getJSONResults = results
            isFirst = false
            addPhotosDom()
            now_post_num += get_post_num
            total_post_num += get_post_num
            $("#artist-list").append(buttonHtml);
        });
    } else {
        addPhotosDom()
        if(rangeToRoad.length >= get_post_num - 1) {
            $("#artist-list").append(buttonHtml);
            now_post_num += get_post_num
            total_post_num += get_post_num
        }
    }
});
