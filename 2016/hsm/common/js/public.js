$(function () {
	$(".home-nav li").click(function(){
        $(this).siblings().removeClass('active').end().addClass('active');
	});	
	

});