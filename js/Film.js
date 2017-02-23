/*中文*/

$(function(){

	
		
	$('#gd').click(function(){
		var a = $(document).width();
		
		if(a>1440){
			$('#dy').css('display','block')
			$('#batu').css('margin-bottom','30%')
		}else{
			$('#batu').css('margin-bottom','0%')
			$('#batu').addClass('marg');
			$('#dy').css('display','block')
		}
	})
	$('#gdtwo').click(function(){
		$('.batu').css('margin-bottom','30%')
		$('#gdtwo').css('top','115%')
		$('.cc').css('display','block')
	})
	
//	var ss =$('window').width();
	//console.log(ss);
	
	
	

})

if (!!window.ActiveXObject || "ActiveXObject" in window){
				$("#batu>div").mouseenter(function(){
					$(this).find("#hmb").css({
				    	"opacity":"0.5",
				    	"filter":"alpha(opacity=50)"
				    	
				  	 });
					
				})
				
				$("#batu>div").mouseleave(function(){
					$(this).find("#hmb").css({
				    	"opacity":"0",
				    	"filter":"alpha(opacity=0)"
				    	
				  	 });
					
				})
				
				
			    	
			    }


