const VBOX_PRELOAD_IMAGE = '<div class="vbox-preloader"><div class="sk-wandering-cubes -gallery"><div class="sk-cube sk-cube1 -gallery" style="background-color: rgb(9, 137, 141);"></div><div class="sk-cube sk-cube2 -gallery" style="background-color: rgb(9, 137, 141);"></div></div></div>'
const EVEN_TRANSITION_SPEED = 1600;
const ODD_TRANTISION_SPEED = 800;
const FADE_IN_SPEED = 50
let buttonHtml = null
let artistNowPostNum = 7
let artistGetPostNum = 4
let artistTotalPostNum = artistNowPostNum + artistGetPostNum

let otherNowPostNum = 7
let otherGetPostNum = 4
let otherTotalPostNum = otherNowPostNum + otherGetPostNum

let isArtistFirst = true
let isOtherFirst = true


let artistGetJSONResults = []
let otherGetJSONResults = []
let rangeToRoad = []

let category = null
let categoryNumber = null

let forMoreButtonText = ''
if (isMobile) {
    forMoreButtonText += 'TAP<br class="button__br">'
} else {
    forMoreButtonText += 'CLICK<br>'
}

forMoreButtonText += 'FOR MORE'

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
    switch (category) {
        case 'artist':
            if(artistTotalPostNum + 1 < artistGetJSONResults.length) {
                rangeToRoad = artistGetJSONResults.slice(artistNowPostNum, artistTotalPostNum)
            // 記事の総数より現在の表示記事数が多い、または同じ時は記事の最後まで読み込む
            } else {
                rangeToRoad = artistGetJSONResults.slice(artistNowPostNum, artistGetJSONResults.length)
            }
            break

        case 'other':
            if(otherTotalPostNum + 1 < otherGetJSONResults.length) {
                rangeToRoad = otherGetJSONResults.slice(otherNowPostNum, otherTotalPostNum)
            // 記事の総数より現在の表示記事数が多い、または同じ時は記事の最後まで読み込む
            } else {
                rangeToRoad = otherGetJSONResults.slice(otherNowPostNum, otherGetJSONResults.length)
            }
            break
    }
    let addDomAnimation = new TimelineMax()
    const LIST_OPACITY_SPEED = 0.3
    const BUTTON_FADEOUT_SPEED = 0.001
    switch(category) {
        case 'artist':
            addDomAnimation.to('#moreLoad__artist', LIST_OPACITY_SPEED, {
                opacity: 0,
            }).to('#moreLoadButton__artist', BUTTON_FADEOUT_SPEED, {
                display: 'none',
            }).to('#moreLoad__artist', BUTTON_FADEOUT_SPEED, {
                display: 'none',
                onComplete: fadeIn
            })
            break
        case 'other':
            addDomAnimation.to('#moreLoad__other', LIST_OPACITY_SPEED, {
                opacity: 0,
            }).to('#moreLoadButton__other', BUTTON_FADEOUT_SPEED, {
                display: 'none',
            }).to('#moreLoad__other', BUTTON_FADEOUT_SPEED, {
                display: 'none',
                onComplete: fadeIn
            })
            break
    }
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
        switch (category) {
            case 'artist':
                $(outputHtml).appendTo("#artist-list").hide()
                break
            case 'other':
                $(outputHtml).appendTo("#other-list").hide()
                break
        }
    });
    $('.addDom:even').css({ position: 'relative', top: 20, opacity: 0, transition: EVEN_TRANSITION_SPEED + 'ms'}).addClass('even');
    $('.addDom:odd').css({ position: 'relative', top: 20, opacity: 0, transition: ODD_TRANTISION_SPEED + 'ms'}).addClass('odd');
    function fadeIn() {
        $('.addDom').fadeIn(FADE_IN_SPEED).animate({
            top: 0,
            opacity: 1
        },300).toggleClass('addDom')
        switch (category) {
            case 'artist':
                $('#moreLoad__artist').fadeOut(150, function() { $(this).remove(); })
                $('#moreLoadButton__artist').fadeOut(150, function() { $(this).remove(); })
                 break

            case 'other':
                $('#moreLoad__other').fadeOut(150, function() { $(this).remove(); })
                $('#moreLoadButton__other').fadeOut(150, function() { $(this).remove(); })
                break
        }
    }
    venoBox()
}

let addForMoreButton = function() {
    let addButtonAnimation = new TimelineMax()
    switch (category) {
        case 'artist':
            buttonHtml = '<li class="photos photos-thumbnail addDom last moreLoad" id="moreLoad__artist"><button class="moreLoadButton" id="moreLoadButton__artst"><span class="moreLoadButton__text">' + forMoreButtonText + '</span></button></li>'
            $(buttonHtml).appendTo("#artist-list").fadeOut(0)
            addButtonAnimation.to('#moreLoad__artist', 0.1, {
                position: 'relative', top: 20, opacity: 0, transition: EVEN_TRANSITION_SPEED + 'ms'
            }).to('#moreLoad__artist', 0.45, {
                opacity: 1,
                delay: 0.5,
                top: 0
            })
            break

        case 'other':
            buttonHtml = '<li class="photos photos-thumbnail addDom last moreLoad" id="moreLoad__other"><button class="moreLoadButton" id="moreLoadButton__artst"><span class="moreLoadButton__text">' + forMoreButtonText + '</span></button></li>'
            $(buttonHtml).appendTo("#other-list").fadeOut(0)
            addButtonAnimation.to('#moreLoad__other', 0.1, {
                position: 'relative', top: 20, opacity: 0, transition: EVEN_TRANSITION_SPEED + 'ms'
            }).to('#moreLoad__other', 0.45, {
                opacity: 1,
                delay: 0.5,
                top: 0
            })
            break
    }
}

// 追加したDomにはクリックイベントが発生しないので親要素のphotos-thumbnailを指定
$('.photos-thumbnail').on('click', '.moreLoad', function() {
    console.log($('.moreLoadButton', this)[0]['value'])
    $('.moreLoadButton__text', this).text('LOADING')
    $('.moreLoadButton__text', this).append(VBOX_PRELOAD_IMAGE)
    $('.moreLoadButton', this).prop("disabled", true)
    switch($('.moreLoadButton', this)[0]['value']) {
        case 'artist':
            category = 'artist'
            categoryNumber = 3
            break;

        case 'other':
            category = 'other'
            categoryNumber = 4
            break;
    }
    getJSONUrl = '//rinayatera.com/wp/wp-json/wp/v2/posts?_embed&categories=' + categoryNumber + '&per_page=100'
    switch (category) {
        case 'artist':
            if(isArtistFirst) {
                $.getJSON( getJSONUrl, function(results) {
                    isArtistFirst = false
                    artistGetJSONResults = results
                    addPhotosDom()
                    artistNowPostNum += artistGetPostNum
                    artistTotalPostNum += artistGetPostNum
                    addForMoreButton()
                })
            } else {
                addPhotosDom()
                console.log('artistNowPostNum', artistNowPostNum)
                console.log('artistTotalPostNum', artistTotalPostNum)
                console.log('getJSONResult.length', artistGetJSONResults.length)
                if(artistTotalPostNum + 1 < artistGetJSONResults.length) {
                    addForMoreButton()
                    artistNowPostNum += artistGetPostNum
                    artistTotalPostNum += artistGetPostNum
                }
            }
            break

        case 'other':
            if(isOtherFirst) {
                $.getJSON( getJSONUrl, function(results) {
                    isOtherFirst = false
                    otherGetJSONResults = results
                    addPhotosDom()
                    otherNowPostNum += otherGetPostNum
                    otherTotalPostNum += otherGetPostNum
                    addForMoreButton()
                })
            } else {
                addPhotosDom()
                console.log('otherNowPostNum', otherNowPostNum)
                console.log('otherTotalPostNum', otherTotalPostNum)
                console.log('getJSONResult.length', otherGetJSONResults.length)
                if(otherTotalPostNum + 1 < otherGetJSONResults.length) {
                    addForMoreButton()
                    otherNowPostNum += otherGetPostNum
                    otherTotalPostNum += otherGetPostNum
                }
            }
            break
    }
});
