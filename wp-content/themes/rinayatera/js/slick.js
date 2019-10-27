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
	

	
$(window).on('load resize', function(){
    //リサイズ時の処理
	var h = window.innerHeight; //ウィンドウの高さ
	var Widthtop = window.innerWidth; //ウィンドウの高さ
	var W = h *1.6;
	var H = Widthtop /1.6;
	if ( h < H) {
		 $('.slider').css('width', Widthtop + "px");		
		 $('.slider').css('height', H + "px"); 
	}else{
		$('.slider').css('height', h + "px"); //可変部分の高さを適用		
	 	$('.slider').css('width', W + "px"); //可変部分の幅を適用
	}
	
});

$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
	slidesToShow: 1 ,
	initialSlide: 0,
	fade:true,
	arrows:false,
//	lazyLoad: 'progressive',
	speed: 5000,
	infinite: true,
	pauseOnFocus: false,
	pauseOnHover: false,
});
	
	
 
});
   
