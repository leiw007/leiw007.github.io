$(function(){
	//wap下拉菜单
	$('.hd_nav').click(function(){	  
	  if(!$(this).hasClass('active')){
		$(this).addClass('active');
		$('.wapMenu').slideDown(200);	
	  }else{
		$(this).removeClass('active');
		$('.wapMenu').slideUp(100);
	  }
	});
	$('.MenuA').click(function(){	
	  if(parseFloat($('body').width())<960){
		 if(!$(this).hasClass('MenuAO')){
			 $(".MenuA").removeClass("MenuAO");
			$(".Nav").slideUp(200);
			$(this).next(".Nav").slideDown(200);
			$(this).addClass("MenuAO");
		 }else{
			$(".MenuA").removeClass("MenuAO");
			$(".Nav").slideUp(200);
		}
	  }	  
	});
	  //导航下拉
	$("a.MenuA").mouseover(function(){
		if(parseFloat($('body').width())>960){
			$(this).next(".Nav").slideDown(200);
			$(this).addClass("MenuAO");
		}
	});
    $(".Menu li").mouseleave(function(){
		if(parseFloat($('body').width())>960){
			$(this).children(".Nav").slideUp(200);
			$(this).children(".MenuA").removeClass("MenuAO");
		}
	});
	

	
	//锚点跳转滑动效果
	$('a[href*=#],area[href*=#]').click(function() { 
		console.log(this.pathname)  
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');                  
			if ($target.length){var targetOffset = $target.offset().top;$('html,body').animate({scrollTop: targetOffset},1000);return false;} 
			}            
	  }); 

});
$(window).resize(function () {          //当浏览器大小变化时

    if($(window).width()>960){
		$('.Menu').css("display","block");
		$('.wapMenu').css("display","none");
		$('.hd_nav').addClass('active');
	  }
	  else{
		  $('.Menu').css("display","none");
		  $('.hd_nav').removeClass('active');
	  }
})
