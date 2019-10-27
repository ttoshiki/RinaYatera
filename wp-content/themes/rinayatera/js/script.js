//jQuery.event.add(window,"load",function() { 
$(window).on('load',function(){
	 $('.loading').delay(700).fadeOut(1000);
	 $('.loading-name').delay(500).fadeOut(500);
	 $('.loading-job').delay(500).fadeOut(500);
   setTimeout(function(){ $(".loading").fadeOut(500);},5000);
});

$(function(){
 /*jQueryが動きます*/
	


    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') >= 0 || ua.indexOf('Android') >= 0 && ua.indexOf('Mobile') >= 0){
        // スマートフォン用コード
		var device = 'sp';
	
		
    } else {
		var device = 'pc';
		
        // PC用コード
    }
	
  
$('.menu-trigger').on('click',function(){
	$(this).toggleClass('active');
	$('.header-nav').fadeToggle(700);
	 $('.header-inner').toggleClass('header-inner__active'); 
	 $('.menu-trigger_place').toggleClass('menu-trigger_place__active'); 
	 $('.navigation').toggleClass('navigation_active'); 
});
	
$('.nav-list__child01>a').on('click',function(){
	$('.menu-trigger').toggleClass('active');
	if(device ==='sp'){
	  $('.header-nav').fadeToggle(700); 
	 
	 $('.header-inner').toggleClass('header-inner__active'); 
	 $('.menu-trigger_place').toggleClass('menu-trigger_place__active'); }
});

$('.nav-list__child02>a').on('click',function(){
	$('.menu-trigger').toggleClass('active');
	if(device ==='sp'){
	   	$('.header-nav').fadeToggle(700);
	   
	 $('.header-inner').toggleClass('header-inner__active'); 
	 $('.menu-trigger_place').toggleClass('menu-trigger_place__active'); }
});
	

	
//$(window).on('load resize', function(){
//    //リサイズ時の処理
//	var h = window.innerHeight; //ウィンドウの高さ
//	var Widthtop = window.innerWidth; //ウィンドウの高さ
//	var W = h *1.6;
//	var H = Widthtop /1.6;
//	if ( h < H) {
//		 $('.slider').css('width', Widthtop + "px");		
//		 $('.slider').css('height', H + "px"); 
//	}else{
//		$('.slider').css('height', h + "px"); //可変部分の高さを適用		
//	 	$('.slider').css('width', W + "px"); //可変部分の幅を適用
//	}
//	
//});

	
 var pagetop = $('.btn-pagetop');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });


//    //subtitle.hide();
//    $(window).scroll(function () {
//		var scroollNum = $(this).scrollTop();
//		console.log(scroollNum);
//		//otherの距離を取得
//		var otherH = $("#other").offset().top;
//		var hikaku = otherH -200;
//		//アーティストテキスト
//		var subtitle= $('.photos.lowpage_h2');   
//        if ($(this).scrollTop() > hikaku) {  //100pxスクロールしたら表示
//            subtitle.fadeOut();
//		}else{
//			subtitle.fadeIn();
//		}
//    });
	
//(function ($) {
//  // 画面下からどの程度の位置でエフェクトするかの設定
//  var EffectH = 100;
//  // どのくらい動かすかの設定
//  var EffectTop = 30;
//  // エフェクト時間(ms)
//  var EffectTime = 800; 
//  // 事前準備として少し下げたところに透明にして配置。
//  $('.my-effect').css({ position: 'relative', left: 0, top: EffectTop, opacity: 0, transition: EffectTime + 'ms' });
//  // スクロールイベント
//  $(window).on('scroll load', function() {
//    var scTop = $(this).scrollTop();
//    var scBottom = scTop + $(this).height();
//    var effectPos = scBottom - EffectH;
//    // エフェクト対象それぞれの位置とスクロール位置を比べて
//    // 範囲に入っていればエフェクトを実行する
//    $('.my-effect').each( function() {
//      var thisPos = $(this).offset().top;
//      if ( thisPos < effectPos ) {
//        $(this).css({ 'opacity' : 1, top: 0 });
//      }
//    });
//  });
//})(jQuery);
//
//(function ($) {
//  // 画面下からどの程度の位置でエフェクトするかの設定
//  var EffectH = 200;
//  // どのくらい動かすかの設定
//  var EffectTop = 30;
//  // エフェクト時間(ms)
//  var EffectTime = 1600; 
//  // 事前準備として少し下げたところに透明にして配置。
//  $('.my-effect__second').css({ position: 'relative', left: 0, top: EffectTop, opacity: 0, transition: EffectTime + 'ms' });
//  // スクロールイベント
//  $(window).on('scroll load', function() {
//    var scTop = $(this).scrollTop();
//    var scBottom = scTop + $(this).height();
//    var effectPos = scBottom - EffectH;
//    // エフェクト対象それぞれの位置とスクロール位置を比べて
//    // 範囲に入っていればエフェクトを実行する
//    $('.my-effect__second').each( function() {
//      var thisPos = $(this).offset().top;
//      if ( thisPos < effectPos ) {
//        $(this).css({ 'opacity' : 1, top: 0 });
//      }
//    });
//  });
//})(jQuery);
//
//	
//	

});
   
