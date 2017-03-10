$(function() {
    $(".home-tab ul.home-ul li").click(function() {
        var index = $(this).index() + 1;
        $(this).siblings().removeClass('active').end().addClass('active');
        $(".tab"+index).siblings().hide().end().show();
    });
    $(".retrieval").click(function(){
    	$(".home-tab-con").slideToggle();
    });
    // 商品筛选-排序
    $(".tab-con-wrap dl").delegate('dd', 'click', function() {
    	var index = $(this).index() + 1;
        $(this).siblings().removeClass('active').end().addClass('active');

        if ($(this).hasClass('up')) {
            $(this).attr('class', 'active down');
            $(this).find('i').html("由高到低");
        } else {
            $(this).attr('class', 'active up');
            $(this).find('i').html("由低到高");
        }
    });
    // 商品筛选-分类
    $(".tab-type span").click(function(){
        $(this).siblings().removeClass('active').end().addClass('active');
    });
    


});
