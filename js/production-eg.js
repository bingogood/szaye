window.onload = function(){

	//查看更多
	$('.chakan-more-pro').click(function(){
		$('.main-imgnone-pro').css('display','block')
	})
	
	
	//二级菜单
	var flag=true;
	$('.daohang-pro').click(function(){
		if(! $(Element).is(":animated")){
		  if(flag){
				$(this).siblings('.pro-list-ul').slideDown(500);
				$(this).siblings('.zaoxing-ul-pro').slideDown(500);
				flag=false;
			}else{
				$(this).siblings('.pro-list-ul').slideUp(500);
				$(this).siblings('.zaoxing-ul-pro').slideUp(500);
				flag=true;
			} 
		}
	})
	//手机端移动菜单
		var flag =true ;
		$(".menu-button").click(function(){
			
			if(flag){
				$("body").addClass("open");
				$(".mobile-menu").css("transform","translateX(0)");
				flag = false ;
			}else{
				$("body").removeClass("open");
				$(".mobile-menu").css("transform","translateX(100%)");
				
				flag = true;
			}
		})

		
			//吸顶事件
		$(document).scroll(function(){
			var top = $(document).scrollTop();
			if(top>120){
				$('.logos-area').addClass('fixs');
				$('.main-menu').addClass('move2');
				$('.lang-picker').css('top','25px');
				$(".logos-area").addClass('move');
				$('.menu-container a img').css({'opacity':'1','top':''})
				$(".xiaoshi").css("display",'none')
				$(".app-logo-img").css("opacity",'1');
			}else{
				$('.logos-area').removeClass('fixs');
				$('.main-menu').removeClass('move2');
				$('.lang-picker').css('top','');
				$(".logos-area").removeClass('move')
				$('.menu-container a img').css('opacity','0')
				$(".xiaoshi").css("display",'block');
				$(".app-logo-img").css("opacity",'0');
				
			}
		})
		
		if (!!window.ActiveXObject || "ActiveXObject" in window){
				$(".main-img-pro").mouseenter(function(){
					$(this).find(".main-redimg-pro").css({
				    	"opacity":"0.5",
				    	"filter":"alpha(opacity=50)"				    	
				  	 });
				})
				
				$(".main-img-pro").mouseleave(function(){
					$(this).find(".main-redimg-pro").css({
				    	"opacity":"0",
				    	"filter":"alpha(opacity=0)"				    	
				  	 });					
				})							    	
		}
}