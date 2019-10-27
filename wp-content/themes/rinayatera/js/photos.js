
// JavaScript Document//jQuery.event.add(window,"load",function() {
$(window).on('load',function(){
	 $('.loading').delay(700).fadeOut(1000);
	 $('.loading-name').delay(500).fadeOut(500);
	 $('.loading-job').delay(500).fadeOut(500);
   setTimeout(function(){ $(".loading").fadeOut(500);},5000);
	var scroollNum = $(this).scrollTop();
		console.log(scroollNum);
		//otherの距離を取得
		var otherH = 300;
		// var otherH = $(".photos-subhead").offset().top;
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
 /*jQueryが動きます*/



    //subtitle.hide();
    $(window).scroll(function () {
		var scroollNum = $(this).scrollTop();
		console.log(scroollNum);
		//otherの距離を取得
		var otherH = 300;
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
  var EffectH = 100;
  // どのくらい動かすかの設定
  var EffectTop = 30;
  // エフェクト時間(ms)
  var EffectTime = 800;
  // 事前準備として少し下げたところに透明にして配置。
  $('.my-effect').css({ position: 'relative', left: 0, top: EffectTop, opacity: 0, transition: EffectTime + 'ms' });
  // スクロールイベント
  $(window).on('scroll load', function() {
    var scTop = $(this).scrollTop();
    var scBottom = scTop + $(this).height();
    var effectPos = scBottom - EffectH;
    // エフェクト対象それぞれの位置とスクロール位置を比べて
    // 範囲に入っていればエフェクトを実行する
    $('.my-effect').each( function() {
      var thisPos = $(this).offset().top;
      if ( thisPos < effectPos ) {
        $(this).css({ 'opacity' : 1, top: 0 });
      }
    });
  });
})(jQuery);

(function ($) {
  // 画面下からどの程度の位置でエフェクトするかの設定
  var EffectH = 200;
  // どのくらい動かすかの設定
  var EffectTop = 30;
  // エフェクト時間(ms)
  var EffectTime = 1600;
  // 事前準備として少し下げたところに透明にして配置。
  $('.my-effect__second').css({ position: 'relative', left: 0, top: EffectTop, opacity: 0, transition: EffectTime + 'ms' });
  // スクロールイベント
  $(window).on('scroll load', function() {
    var scTop = $(this).scrollTop();
    var scBottom = scTop + $(this).height();
    var effectPos = scBottom - EffectH;
    // エフェクト対象それぞれの位置とスクロール位置を比べて
    // 範囲に入っていればエフェクトを実行する
    $('.my-effect__second').each( function() {
      var thisPos = $(this).offset().top;
      if ( thisPos < effectPos ) {
        $(this).css({ 'opacity' : 1, top: 0 });
      }
    });
  });
})(jQuery);




});
