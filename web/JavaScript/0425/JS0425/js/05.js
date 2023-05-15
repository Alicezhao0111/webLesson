$(function(){
	$('body').append('<a href="javascript:void(0);" id="fixedTop">▲</a>');
	var fixedTop = $('#fixedTop');
	fixedTop.on('click',function(){
        // 捲動畫面到 scrollTop:'0' 位置
		$('html,body').animate({scrollTop:'0'},500);
	});

    // 載入、捲動、調整視窗大小
	$(window).on('load scroll resize',function(){
        // 捲動高度超過100時出現
		var showTop = 100;
        // scrollTop()：取得頁面上方開始的捲動值
		if($(window).scrollTop() > showTop){
			fixedTop.fadeIn('normal');
		} else {
			fixedTop.fadeOut('normal');
		}
	});
});
