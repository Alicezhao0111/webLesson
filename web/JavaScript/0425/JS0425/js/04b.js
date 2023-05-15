// 由下往上捲動
$(function(){
	$(window).load(function(){
		var thisTicker = $('.ticker'),
		tickerUl = thisTicker.find('ul'),
		tickerLl = tickerUl.find('li'),
		liFirst = tickerUl.find('li:first'),
		// 取得捲動高度
		listHeight = tickerLl.height();
		// 將高度給top屬性，淡入淡出
		liFirst.css({top:listHeight,display:'block',opacity:'0',zIndex:'98'}).stop().animate({top:'0',opacity:'1'},500,'linear').addClass('showlist');

		setInterval(function(){
			var showLi = thisTicker.find('.showlist');
			// 動畫中的top屬性設定為（負號高度）：top:-(listHeight)，使其往上滑動
			showLi.animate({top:-(listHeight),opacity:'0'},500,'linear').next().css({top:listHeight,display:'block',opacity:'0',zIndex:'99'}).animate({top:'0',opacity:'1'},500,'linear').addClass('showlist').end().appendTo(tickerUl).css({zIndex:'98'}).removeClass('showlist');
		},1000);
	});
});
