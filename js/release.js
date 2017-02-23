+(function(){	
		//右边的楼层跳转
		$('#fixedBtn li').click(function(){
		var love=$(this).index();
		 $('html,body').animate({scrollTop:$('.tiao').eq(love).offset().top+1}, 800);
	})
		
		var sTop=null;
		$("#fixedBtn li").eq(0).css("background","#841C24").siblings("li").css("background","white");
		
		var win = window || document;
		
		$(win).scroll(function(){		
			sTop=document.documentElement.scrollTop || document.body.scrollTop;			
			$(".a").each(function(i,o){
					var aTop=$(this).offset().top;
				if(sTop>=aTop){
					$("#fixedBtn li").eq(i).css("background","#841C24").siblings("li").css("background","white");
				}
				
			})
			
			
		})
		
})()

/*视频配置*/
+(function(){
	//盒子的大小
	//在火狐下的高度
	 window.onresize = function(){
        	$("#a1").css("width","60%");
			$("#a1").css("height","auto");
			//$(".main_three").css("height",$(".main_two").css("height"));
        }
	
		//视频地址
	var flashvars={
		f:'http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4',
		c:0,
		s:1,
		b:1,
		i:"../img/release/release_vidio.jpg"
	};
		var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
   	 	var video=['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4'];
    	CKobject.embed('/ckplayer/ckplayer.swf','a1','ckplayer_a1',"100%","100%",true,flashvars,video,params);
})()
