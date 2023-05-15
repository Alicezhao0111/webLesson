// 新增類別：addClass()
// 刪除類別：removeClass()

$(function () {
    // 背景變色
    $('.cssAnim').hover(function () {
        $(this).addClass('bgColor');
    }, function () {
        $(this).removeClass('bgColor');
    });

    // 圓角變化
    $('.cssAnim2').hover(function () {
        $(this).addClass('bdrRadius');
    }, function () {
        $(this).removeClass('bdrRadius');
    });

    // 旋轉
    $(function () {
        $('.cssAnim3').hover(function () {
            $(this).addClass('rotateX');
        }, function () {
            $(this).removeClass('rotateX');
        });

        $('.cssAnim4').hover(function () {
            $(this).addClass('rotateY');
        }, function () {
            $(this).removeClass('rotateY');
        });
    });

    // 圖片
    $(function () {
        $('.cssAnim5').hover(function () {
            $(this).addClass('imgScale');
        }, function () {
            $(this).removeClass('imgScale');
        });
    });

});
