const VBOX_PRELOAD_IMAGE = '<div class="vbox-preloader"><div class="sk-wandering-cubes -gallery"><div class="sk-cube sk-cube1 -gallery" style="background-color: rgb(9, 137, 141);"></div><div class="sk-cube sk-cube2 -gallery" style="background-color: rgb(9, 137, 141);"></div></div></div>'
const EVEN_TRANSITION_SPEED = 1600;
const ODD_TRANTISION_SPEED = 800;
const FADE_IN_SPEED = 10
let NumberOfLastLine = 5
let buttonHtml = null
let artistNowPostNum = 7
let artistGetPostNum = 8
let artistTotalPostNum = artistNowPostNum + artistGetPostNum

let otherNowPostNum = 7
let otherGetPostNum = 8
let otherTotalPostNum = otherNowPostNum + otherGetPostNum

let weddingNowPostNum = 7
let weddingGetPostNum = 8
let weddingTotalPostNum = weddingNowPostNum + weddingGetPostNum

let familyNowPostNum = 7
let familyGetPostNum = 8
let familyTotalPostNum = familyNowPostNum + familyGetPostNum

let isArtistFirst = true
let isOtherFirst = true
let isWeddingFirst = true
let isFamilyFirst = true


let artistGetJSONResults = []
let otherGetJSONResults = []
let weddingGetJSONResults = []
let familyGetJSONResults = []
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

        case 'wedding':
            if(weddingTotalPostNum + 1 < weddingGetJSONResults.length) {
                rangeToRoad = weddingGetJSONResults.slice(weddingNowPostNum, weddingTotalPostNum)
            // 記事の総数より現在の表示記事数が多い、または同じ時は記事の最後まで読み込む
            } else {
                rangeToRoad = weddingGetJSONResults.slice(weddingNowPostNum, weddingGetJSONResults.length)
            }
            break

        case 'family':
            if(familyTotalPostNum + 1 < familyGetJSONResults.length) {
                rangeToRoad = familyGetJSONResults.slice(familyNowPostNum, familyTotalPostNum)
            // 記事の総数より現在の表示記事数が多い、または同じ時は記事の最後まで読み込む
            } else {
                rangeToRoad = familyGetJSONResults.slice(familyNowPostNum, familyGetJSONResults.length)
            }
            break
    }
    let addDomAnimation = new TimelineMax()
    const LIST_OPACITY_SPEED = 0.01
    const BUTTON_FADEOUT_SPEED = 0.01
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

        case 'wedding':
            addDomAnimation.to('#moreLoad__wedding', LIST_OPACITY_SPEED, {
                opacity: 0,
            }).to('#moreLoadButton__wedding', BUTTON_FADEOUT_SPEED, {
                display: 'none',
            }).to('#moreLoad__wedding', BUTTON_FADEOUT_SPEED, {
                display: 'none',
                onComplete: fadeIn
            })
            break

        case 'family':
            addDomAnimation.to('#moreLoad__family', LIST_OPACITY_SPEED, {
                opacity: 0,
            }).to('#moreLoadButton__family', BUTTON_FADEOUT_SPEED, {
                display: 'none',
            }).to('#moreLoad__family', BUTTON_FADEOUT_SPEED, {
                display: 'none',
                onComplete: fadeIn
            })
            break
    }
    console.log(category)
    if( category === 'artist' || category === 'wedding' ) {
        $('.last').toggleClass('last')
    }
    $.each(rangeToRoad, function(i, item) {
        let outputHtml = ''
        vboxImage = item['_embedded']['wp:featuredmedia']['0']['media_details']['sizes']['full']['source_url']
        if(isMobile) {
            console.log(item)
            thumbnailUrl = item['acf']['sp-samuneiru']
            if(NumberOfLastLine && (category === 'artist' || category === 'wedding')) {
                outputHtml = '<li class="photos sp-img photos-hover addDom"><a href="' + vboxImage + '" class="zoomin" data-gall="artist-sp">'
            } else {
                outputHtml = '<li class="photos sp-img photos-hover last addDom"><a href="' + vboxImage + '" class="zoomin" data-gall="artist-sp">'
            }
        } else {
            thumbnailUrl = item['acf']['pc-thumbnail']
            if(NumberOfLastLine || category === 'other' || category === 'family') {
                outputHtml = '<li class="photos pc-img photos-hover addDom"><a href="' + vboxImage + '" class="zoomin" data-gall="artist-pc">'
            } else {
                outputHtml = '<li class="photos pc-img photos-hover last addDom"><a href="' + vboxImage + '" class="zoomin" data-gall="artist-pc">'
            }
        }
        outputHtml += `<span class="cover"></span>`
        outputHtml += '<img src="' + thumbnailUrl + '" alt=""></a>'
        if(!isMobile) {
            outputHtml += '<div class="view-more"><p class="view-more__sentense">view more</p></div></li>'
        }
        switch (category) {
            case 'artist':
                $(outputHtml).appendTo("#artist-list").hide()
                break
            case 'other':
                $(outputHtml).appendTo("#other-list").hide()
                break
            case 'wedding':
                $(outputHtml).appendTo("#wedding-list").hide()
                break
            case 'family':
                $(outputHtml).appendTo("#family-list").hide()
                break
        }
        if(NumberOfLastLine > 0) {
            NumberOfLastLine -= 1
        }
    });
    $('.addDom:even').css({ position: 'relative', top: 20, opacity: 0, transition: EVEN_TRANSITION_SPEED + 'ms'}).addClass('even');
    $('.addDom:odd').css({ position: 'relative', top: 20, opacity: 0, transition: ODD_TRANTISION_SPEED + 'ms'}).addClass('odd');
    function fadeIn() {
        const FADE_OUT_SPEED = 150
        $('.addDom').fadeIn(FADE_IN_SPEED).delay(500).animate({
            top: 0,
            opacity: 1
        },100).toggleClass('addDom')
        switch (category) {
            case 'artist':
                $('#moreLoad__artist').fadeOut(FADE_OUT_SPEED, function() { $(this).remove(); })
                $('#moreLoadButton__artist').fadeOut(FADE_OUT_SPEED, function() { $(this).remove(); })
                 break

            case 'other':
                $('#moreLoad__other').fadeOut(FADE_OUT_SPEED, function() { $(this).remove(); })
                $('#moreLoadButton__other').fadeOut(FADE_OUT_SPEED, function() { $(this).remove(); })
                break

            case 'wedding':
                $('#moreLoad__wedding').fadeOut(FADE_OUT_SPEED, function() { $(this).remove(); })
                $('#moreLoadButton__wedding').fadeOut(FADE_OUT_SPEED, function() { $(this).remove(); })
                break

            case 'family':
                $('#moreLoad__family').fadeOut(FADE_OUT_SPEED, function() { $(this).remove(); })
                $('#moreLoadButton__family').fadeOut(FADE_OUT_SPEED, function() { $(this).remove(); })
                break
        }
    }
    venoBox()
}

let addForMoreButton = function() {
    let addButtonAnimation = new TimelineMax()
    switch (category) {
        case 'artist':
            buttonHtml = '<li class="photos photos-thumbnail addDom last moreLoad" id="moreLoad__artist"><button value="artist" class="moreLoadButton" id="moreLoadButton__artist"><span class="moreLoadButton__text">' + forMoreButtonText + '</span></button></li>'
            $(buttonHtml).appendTo("#artist-list").fadeOut(0)
            addButtonAnimation.to('#moreLoad__artist', 0.1, {
                position: 'relative', top: 20, opacity: 0, transition: EVEN_TRANSITION_SPEED + 'ms'
            }).to('#moreLoad__artist', 1, {
                delay: 0.5,
                opacity: 1,
                top: 0
            })
            break

        case 'other':
            buttonHtml = '<li class="photos photos-thumbnail addDom last moreLoad" id="moreLoad__other"><button value="other" class="moreLoadButton" id="moreLoadButton__other"><span class="moreLoadButton__text">' + forMoreButtonText + '</span></button></li>'
            $(buttonHtml).appendTo("#other-list").fadeOut(0)
            addButtonAnimation.to('#moreLoad__other', 0.1, {
                position: 'relative', top: 20, opacity: 0, transition: EVEN_TRANSITION_SPEED + 'ms'
            }).to('#moreLoad__other', 1, {
                delay: 0.5,
                opacity: 1,
                top: 0
            })
            break

        case 'wedding':
            buttonHtml = '<li class="photos photos-thumbnail addDom last moreLoad" id="moreLoad__wedding"><button value="wedding" class="moreLoadButton" id="moreLoadButton__wedding"><span class="moreLoadButton__text">' + forMoreButtonText + '</span></button></li>'
            $(buttonHtml).appendTo("#wedding-list").fadeOut(0)
            addButtonAnimation.to('#moreLoad__wedding', 0.1, {
                position: 'relative', top: 20, opacity: 0, transition: EVEN_TRANSITION_SPEED + 'ms'
            }).to('#moreLoad__wedding', 1, {
                delay: 0.5,
                opacity: 1,
                top: 0
            })
            break

        case 'family':
            buttonHtml = '<li class="photos photos-thumbnail addDom last moreLoad" id="moreLoad__family"><button value="family" class="moreLoadButton" id="moreLoadButton__family"><span class="moreLoadButton__text">' + forMoreButtonText + '</span></button></li>'
            $(buttonHtml).appendTo("#family-list").fadeOut(0)
            addButtonAnimation.to('#moreLoad__family', 0.1, {
                position: 'relative', top: 20, opacity: 0, transition: EVEN_TRANSITION_SPEED + 'ms'
            }).to('#moreLoad__family', 1, {
                delay: 0.5,
                opacity: 1,
                top: 0
            })
            break
    }
}

// 追加したDomにはクリックイベントが発生しないので親要素のphotos-thumbnailを指定
$('.photos-thumbnail').on('click', '.moreLoad', function() {
    NumberOfLastLine = 5 // 初期値に
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

        case 'wedding':
            category = 'wedding'
            categoryNumber = 5
            break;

        case 'family':
            category = 'family'
            categoryNumber = 6
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
                if(otherTotalPostNum + 1 < otherGetJSONResults.length) {
                    addForMoreButton()
                    otherNowPostNum += otherGetPostNum
                    otherTotalPostNum += otherGetPostNum
                }
            }
            break

        case 'wedding':
            if(isWeddingFirst) {
                $.getJSON( getJSONUrl, function(results) {
                    isWeddingFirst = false
                    weddingGetJSONResults = results
                    addPhotosDom()
                    weddingNowPostNum += weddingGetPostNum
                    weddingTotalPostNum += weddingGetPostNum
                    addForMoreButton()
                })
            } else {
                addPhotosDom()
                if(weddingTotalPostNum + 1 < weddingGetJSONResults.length) {
                    addForMoreButton()
                    weddingNowPostNum += weddingGetPostNum
                    weddingTotalPostNum += weddingGetPostNum
                }
            }
            break

        case 'family':
            if(isFamilyFirst) {
                $.getJSON( getJSONUrl, function(results) {
                    isFamilyFirst = false
                    familyGetJSONResults = results
                    addPhotosDom()
                    familyNowPostNum += familyGetPostNum
                    familyTotalPostNum += familyGetPostNum
                    addForMoreButton()
                })
            } else {
                addPhotosDom()
                if(familyTotalPostNum + 1 < familyGetJSONResults.length) {
                    addForMoreButton()
                    familyNowPostNum += familyGetPostNum
                    familyTotalPostNum += familyGetPostNum
                }
            }
            break
    }
});
