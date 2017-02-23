$(function(){
	var fl=true;
	$(".ssss").click(function(){
		if(fl){
			$(".lab-list").slideDown(500);
			fl=false;
		}else{
			$(".lab-list").slideUp(500);
			fl=true;
		}			
	})



if (!window.ActiveXObject || "ActiveXObject" in window){
	
				$(".right-tp1-box1").mouseenter(function(){
					$(this).find("div").css({
				    	"opacity":"1",
				    	"filter":"alpha(opacity=100)"
				    	
				  	 });
					
				})
				
				$(".right-tp1-box1").mouseleave(function(){
					$(this).find("div").css({
				    	"opacity":"0",
				    	"filter":"alpha(opacity=0)"
				    	
				  	 });
					
				})

	
}
})