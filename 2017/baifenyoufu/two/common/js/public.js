$(function() {
    $(".home-tab ul.home-ul li").click(function() {
        var index = $(this).index() + 1;
        $(this).siblings().removeClass('active').end().addClass('active');
        $(".sug"+index).siblings().hide().end().show();
    });
    


});
