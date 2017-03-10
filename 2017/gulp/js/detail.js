$(function() {
    function hideDialog() {
        $(".dialog-wrap").hide();
        $("body").removeClass("no-scroll");
    }
    $(".detail-btn").delegate(".btnShopping", "click", function() {
        $(".dialog-wrap").show();
        $("body").addClass("no-scroll");
    });
    $(".dialog-wrap .bg").click(function() {
        hideDialog();
    });
    $(".confirm").click(function() {
        hideDialog();
    });
    $(".cart-mode span").click(function(){
        $(this).siblings().removeClass('active').end().addClass('active');
    	
    });
});
