//啟用jquery ui tabs 
$(function(){
    $("#tabs").tabs();
});

//交換下拉選單定位
$(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
        $('.dropdown-menu, navbar-collapse').css("bottom", "100%");
        $('.dropdown-menu, navbar-collapse').css("top", "auto");
    }else{
        $('.dropdown-menu, navbar-collapse').css("top", "100%");
        $('.dropdown-menu, navbar-collapse').css("bottom", "auto");
    }
});


$(window).scroll(function(){ /*抓卷軸的動作*/ 
    var h = $(window).height()-400; /*視窗高度剪掉400後*/
    if($(this).scrollTop()>h){
        $('#food_1').css('animation-name','food_1'); 
        $('#food_2').css('animation-name','food_2');
    }
    });

//啟用lightbox
lightbox.option({
    'wrapAround' :true
});