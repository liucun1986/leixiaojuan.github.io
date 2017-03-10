$(function() {
    function hideDialog() {
        $(".dialog-wrap").hide();
        $("body").removeClass("no-scroll");
    }
    $(".detail-btn").delegate(".btn", "click", function() {
        $(".dialog-wrap").show();
        $("body").addClass("no-scroll");
    });
    $(".dialog-wrap .bg").click(function() {
        hideDialog();
    });
    $(".confirm").click(function() {
        hideDialog();
    });
    $(".cart-mode span").click(function() {
        $(this).siblings().removeClass('active').end().addClass('active');
    });

    // 增加按钮
    $(".cart-num .add").click(function() {
            var t = $(this).parent().find('.num');
            t.val(parseInt(t.val()) + 1)
        })
        // 减少按钮
    $(".cart-num .min").click(function() {
            var t = $(this).parent().find('.num');
            t.val(parseInt(t.val()) - 1)
            if (parseInt(t.val()) < 1) {
                t.val(1);
            }
        })
        // 购物车 全选、反选
    $(".confirm-btn").delegate('#all', 'click', function(event) {
        var isChecked = $(this).prop("checked");
        $(".orders-list .weui-check").each(function() {
            $(this).prop("checked", isChecked);
        });
    });
});