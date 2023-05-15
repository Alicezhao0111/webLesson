$(function(){
	var setFilter = $('#filterBtn'),        // 所有按鈕
	filterBtn = setFilter.find('a'),        // 篩選按鈕中的 a 元素
	btnAll = $('.allItem'),                 // ALL按鈕
	setList = $('#filterList'),             // 所有篩選列表中的元素
	filterList = setList.find('li'),        // 篩選列表中的 li 
	listWidth = filterList.outerWidth();    // 篩選列表的寬度

	filterBtn.click(function(){
        // 檢查是否被點選狀態，不是才執行
		if(!($(this).hasClass('active'))){
            // 目前被點選的按鈕類別儲存到 filterClass
			var filterClass = $(this).attr('class');

            // 使用 each() 方法
			filterList.each(function(){
                // 檢查li中是否有被篩選的類別
				if($(this).hasClass(filterClass)){
                    // yes
                    // 顯示動畫 (1.擴展寬度 2.提升透明度顯示圖片)
					$(this).css({display:'block'}).stop().animate({width:listWidth},1500);
                    // find()方法中，使用全域選擇器「*」，選取filterList所有元素
					$(this).find('*').stop().animate({opacity:'1'},1500);
				} else {
                    // no
                    // 顯示動畫 (隱藏項目)
					$(this).find('*').stop().animate({opacity:'0'},1000);
					$(this).stop().animate({width:'0'},1000,function(){
						$(this).css({display:'none'});
					});
				}
			});
			filterBtn.removeClass('active');    // 清除所有篩選按鈕上的 active 類別
			$(this).addClass('active');         // 將目前點選的項目加上 active 類別
		}
	});

    // 全部顯示
	btnAll.click(function(){
		filterList.each(function(){
			$(this).css({display:'block'}).stop().animate({width:listWidth},1500);
			$(this).find('*').stop().animate({opacity:'1'},1500);
		});
	});
    // 重新載入時，讓ALL按鈕為點選狀態
	btnAll.click(); 
});
