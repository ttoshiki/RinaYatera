$(function(){
 /*jQueryが動きます*/
	
(function ($) {
  // 画面下からどの程度の位置でエフェクトするかの設定
  var EffectH = 250;
  // どのくらい動かすかの設定
  var EffectTop = 80;
  // エフェクト時間(ms)
  var EffectTime = 600; 
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
   
