const VBOX_PRELOAD_IMAGE = '<div class="vbox-preloader"><div class="sk-wandering-cubes -gallery"><div class="sk-cube sk-cube1 -gallery" style="background-color: rgb(9, 137, 141);"></div><div class="sk-cube sk-cube2 -gallery" style="background-color: rgb(9, 137, 141);"></div></div></div>'
const EVEN_TRANSITION_SPEED = 1600;
const ODD_TRANTISION_SPEED = 800;
const FADE_IN_SPEED = 100
let now_post_num = 7
let get_post_num = 4
let total_post_num = now_post_num + get_post_num
let isFirst = true
let getJSONResults = []
let rangeToRoad = []

let forMoreButtonText = ''
if (isMobile) {
    forMoreButtonText += 'TAP<br class="button__br">'
} else {
    forMoreButtonText += 'CLICK<br>'
}

forMoreButtonText += 'FOR MORE'
const BUTTON_HTML = '<li class="photos photos-thumbnail addDom last" id="moreLoad"><button id="moreLoadButton"><span class="moreLoadButton__text">' + forMoreButtonText + '</span></button></li>'

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

if(isMobile) {
    $('.pc-img').remove()
}

let addPhotosDom = function() {
    // 記事の総数より現在の表示記事数が少なかったら読み込む記事数だけ読む
    console.log(total_post_num + 1)
    if(total_post_num + 1 < getJSONResults.length) {
        rangeToRoad = getJSONResults.slice(now_post_num, total_post_num)
    // 記事の総数より現在の表示記事数が多い、または同じ時は記事の最後まで読み込む
    } else {
        console.log('now_post_num', now_post_num)
        rangeToRoad = getJSONResults.slice(now_post_num, getJSONResults.length)
    }
    let addDomAnimation = new TimelineMax()
    addDomAnimation.to('#moreLoad', 0.3, {
        opacity: 0,
    }).to('#moreLoadButton', 0.001, {
        display: 'none',
    }).to('#moreLoad', 0.001, {
        display: 'none',
        onComplete: fadeIn
    })
    $.each(rangeToRoad, function(i, item) {
        let outputHtml = ''
        if(isMobile) {
            thumbnailUrl = item['acf']['sp-samuneiru']
            outputHtml = '<li class="photos sp-img photos-hover addDom"><a href="' + thumbnailUrl + '" class="zoomin" data-gall="artist-sp">'
        } else {
            thumbnailUrl = item['acf']['pc-thumbnail']
            pcVboxImage = item['_embedded']['wp:featuredmedia']['0']['media_details']['sizes']['full']['source_url']
            outputHtml = '<li class="photos pc-img photos-hover addDom"><a href="' + pcVboxImage + '" class="zoomin" data-gall="artist-pc">'
        }
        outputHtml += `<span class="cover"></span>`
        outputHtml += '<img src="' + thumbnailUrl + '" alt=""></a>'
        outputHtml += '<div class="view-more"><p class="view-more__sentense">view more</p></div></li>'
        $(outputHtml).appendTo("#artist-list").hide()
    });
    $('.addDom:even').css({ position: 'relative', top: 20, opacity: 0, transition: EVEN_TRANSITION_SPEED + 'ms'}).addClass('even');
    $('.addDom:odd').css({ position: 'relative', top: 20, opacity: 0, transition: ODD_TRANTISION_SPEED + 'ms'}).addClass('odd');
    function fadeIn() {
        $('.addDom').fadeIn(FADE_IN_SPEED).animate({
            top: 0,
            opacity: 1
        },300).toggleClass('addDom')
        $('#moreLoad').fadeOut(150, function() { $(this).remove(); })
        $('#moreLoadButton').fadeOut(150, function() { $(this).remove(); })
    }
    venoBox()
}

let addForMoreButton = function() {
    $(BUTTON_HTML).appendTo("#artist-list").fadeOut(0)
    let addButtonAnimation = new TimelineMax()
    addButtonAnimation.to('#moreLoad', 0.1, {
        position: 'relative', top: 20, opacity: 0, transition: EVEN_TRANSITION_SPEED + 'ms'
    }).to('#moreLoad', 0.45, {
        opacity: 1,
        delay: 0.5,
        top: 0
    })
}

$("#artist-list").on("click", "#moreLoad", function() {
    $('.moreLoadButton__text').text('LOADING')
    $('.moreLoadButton__text').append(VBOX_PRELOAD_IMAGE)
    $('#moreLoadButton').prop("disabled", true)
    if(isFirst) {
        $.getJSON( "//rinayatera.com/wp/wp-json/wp/v2/posts?_embed&categories=3&per_page=100", function(results) {
            getJSONResults = results
            isFirst = false
            addPhotosDom()
            now_post_num += get_post_num
            total_post_num += get_post_num
            addForMoreButton()
        });
    } else {
        addPhotosDom()
        console.log('now_post_num', now_post_num)
        console.log('total_post_num', total_post_num)
        console.log('getJSONResult.length', getJSONResults.length)
        if(total_post_num + 1 < getJSONResults.length) {
            addForMoreButton()
            now_post_num += get_post_num
            total_post_num += get_post_num
        }
    }
});
