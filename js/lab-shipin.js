window.onload = function () {
	
	var like = document.querySelector('.like');
	var like_sp = document.querySelector('.like_span');
	var n = 3 ;
	like.onclick = function () {
		
		n++;
		like_sp.innerHTML = n ;
	}
	
/*	$('.pinglun').load('pinglun-ch.html');
	$('.Comment').load('pinglun-eg.html');
	
	$('#bottom').load('footer.html');
	$('#footer').load('footer-Eg.html');*/
	
/*	$('#tou').load('header.html');
	$('#head').load('header-Eg.html');*/
}
