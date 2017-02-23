var mySwiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	autoplayDisableOnInteraction: false,

	// 如果需要前进后退按钮
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	
	pagination: '.swiper-pagination',
	paginationClickable:true,

})


$('.project_caixihuan_btn').click(function(e){
	e.preventDefault();
	var num=$(this).find('.project_xihsz').text();
	num ++;	
	$(this).find('.project_xihsz').text(num);
	
	
})

/*$('.headerc').load('header.html');*/
/*$('.headere').load('html/header-Eg.html');*/

/*$('.footc').load('footer.html');*/
/*$('.foote').load('html/footer-Eg.html');*/
