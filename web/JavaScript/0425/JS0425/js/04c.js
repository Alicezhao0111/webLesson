// 從右邊滑入
$(function(){
	$(window).load(function(){
		var thisTicker = $('.ticker'),
		tickerUl = thisTicker.find('ul'),
		tickerLl = tickerUl.find('li'),
		liFirst = tickerUl.find('li:first'),
        // 取得橫向滑動的width屬性值
		ulWidth = tickerUl.width();

        // left:ulWidth（設定給第一個li的left）淡入淡出
		liFirst.css({left:ulWidth,display:'block',opacity:'0',zIndex:'98'}).stop().animate({left:'0',opacity:'1'},1000,'linear').addClass('showlist');

		setInterval(function(){
			var showLi = thisTicker.find('.showlist');

            // left:-(ulWidth)將 left 設定為負數的寬度，往左邊淡出
			showLi.animate({left:-(ulWidth),opacity:'0'},1000,'linear').next().css({left:ulWidth,display:'block',opacity:'0',zIndex:'99'}).animate({left:'0',opacity:'1'},1000,'linear').addClass('showlist').end().appendTo(tickerUl).css({zIndex:'98'}).removeClass('showlist');
		},1000);
	});
});
