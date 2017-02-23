window.onload = function(){
	


		
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
			$('.lang-picker').css('top','35px');
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
}
