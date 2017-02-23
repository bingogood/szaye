+(function(){
			
		
			
			if (!!window.ActiveXObject || "ActiveXObject" in window){
				$(".meiti_img_wrap a").mouseenter(function(){
					$(this).find(".img_wrap div").css({
				    	"opacity":"0.5",
				    	"filter":"alpha(opacity=50)"	
				  	});
				})
				$(".meiti_img_wrap a").mouseleave(function(){
					$(this).find(".img_wrap div").css({
				    	"opacity":"0",
				    	"filter":"alpha(opacity=0)"
				  	});	
				})	
			    }

			
	
				new Swiper('#index_banner .swiper-container',{
					autoplay:3000,
					speed:1000,
					loop:true,
					autoplayDisableOnInteraction:false,
					grabCursor:true
				})
		//宽比上固定宽 等于高比上固定高
			var bannerH=$("#index_banner").height();
			var bannerW=$("#index_banner").width();
			var bannerImgBl=$("#index_banner").width()/1440;
				$("#index_banner").css("height",bannerH*bannerImgBl+"px");
			
				window.onresize=function(){
					//外部的高
					bannerImgBl=$("#index_banner").width()/1440;
					$("#index_banner").css("height",bannerH*bannerImgBl+"px");
				}
		/*视频滑动到区域播放*/
		$(document).scroll(function(){
			var vidioTop=$("#index_main_wdy").offset().top;
				if($(document).scrollTop()>vidioTop-$("#index_main_wdy video").height()){
					$("#index_main_wdy video")[0].play();
				}else{
					$("#index_main_wdy video")[0].pause();
				}
		})
		
		document.getElementsByTagName("video")[0].oncontextmenu = function ()
        {
            return false;
        }
		
       	 
})()

