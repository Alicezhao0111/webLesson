// animate()方法製作動畫
// 由於animate()方法會產生連續播放，所以可搭配stop()方法來控制播放

$(function(){
	$('.fadeBtn').hover(function(){
		// 滑鼠移入時淡出且放大文字
		$(this).stop().animate({opacity:'0.5',fontSize:'22px'},300);
	}, function(){
		// 滑鼠離開時淡入且還原文字大小
		$(this).stop().animate({opacity:'1',fontSize:'18px'},300);
	});
});
