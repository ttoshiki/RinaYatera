// JavaScript Document//jQuery.event.add(window,"load",function() {
$(window).on('load',function(){
	 $('.loading').delay(700).fadeOut(1000);
	 $('.loading-name').delay(500).fadeOut(500);
	 $('.loading-job').delay(500).fadeOut(500);
   setTimeout(function(){ $(".loading").fadeOut(500);},5000);
	var scroollNum = $(this).scrollTop();
		//otherの距離を取得
		var otherH = $(".photos-subhead").offset().top;
		var hikaku = otherH -200;
		//アーティストテキスト
		var subtitle= $('.photos.lowpage_h2');
        if ($(this).scrollTop() > hikaku) {  //100pxスクロールしたら表示
            subtitle.fadeOut();
		}else{
			subtitle.fadeIn();
		}

});

$(function(){
    //subtitle.hide();
    $(window).scroll(function () {
		var scroollNum = $(this).scrollTop();
		//otherの距離を取得
		var otherH = $(".photos-subhead").offset().top;
		var hikaku = otherH -200;
		//アーティストテキスト
		var subtitle= $('.photos.lowpage_h2');
        if ($(this).scrollTop() > hikaku) {  //100pxスクロールしたら表示
            subtitle.fadeOut();
		}else{
			subtitle.fadeIn();
		}
    });

(function ($) {
  // 画面下からどの程度の位置でエフェクトするかの設定
  var effectHEven = 200;
  var effectHOdd = 250;
  // どのくらい動かすかの設定
  var effectTopEven = 80;
  var effectTopOdd = 30;

  var effectTimeEven = 1600;
  var effectTimeOdd = 600;
  // 事前準備として少し下げたところに透明にして配置。
  $('.my-effect:nth-of-type(odd)').css({ position: 'relative', left: 0, top: effectTopOdd, opacity: 0, transition: effectTimeOdd + 'ms' });
  // スクロールイベント
  $(window).on('scroll load', function() {
    var scTop = $(this).scrollTop();
    var scBottom = scTop + $(this).height();
    var effectPos = scBottom - effectHOdd;
    // エフェクト対象それぞれの位置とスクロール位置を比べて
    // 範囲に入っていればエフェクトを実行する
    $('.my-effect:nth-of-type(even)').each( function() {
      var thisPos = $(this).offset().top;
      if ( thisPos < effectPos ) {
        $(this).css({ 'opacity' : 1, top: 0 });
      }
    });
  });

  $('.my-effect:nth-of-type(even)').css({ position: 'relative', left: 0, top: effectTopEven, opacity: 0, transition: effectTimeEven + 'ms' });
  $(window).on('scroll load', function() {
    var scTop = $(this).scrollTop();
    var scBottom = scTop + $(this).height();
    var effectPos = scBottom - effectHEven;
    $('.my-effect:nth-of-type(odd)').each( function() {
      var thisPos = $(this).offset().top;
      if ( thisPos < effectPos ) {
        $(this).css({ 'opacity' : 1, top: 0 });
      }
    });
  });

})(jQuery);
});