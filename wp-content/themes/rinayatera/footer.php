<?php wp_footer();?>
<script>
$(function () {
	$('.plan-animation__top').css('opacity','0');
	 setTimeout(function(){
		 $('.plan-animation__top').css('opacity','1').textillate({
          in: {
            effect: 'fadeIn',
            shuffle: false,
            delay: 50,
            delayScale: 1.5,
          }});

	 }, 1500);

  $(window).on("scroll load",function(){
    $('.plan-animation').each(function(){
      var windowHeight = $(window).height();
      var scroll = $(window).scrollTop();
      var hogePoint = $(this).offset().top;
      if (scroll > hogePoint - windowHeight){
        $(this).css('opacity',1).textillate({
          in: {
            effect: 'fadeIn',
            shuffle: false,
            delay: 70,
            delayScale: 1.5,
          }});
      }
    });
  });
});
</script>
</body>
</html>
