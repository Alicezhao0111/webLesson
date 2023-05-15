
$(function () {
    // 以load方法載入所有元素後再進行處理
    // 這是為了防止頁面尚未完全載入顯示前就開始News Ticker的相關動作
    $(window).load(function () {
        // 定義變數
        var thisTicker = $('.ticker'),
            tickerUl = thisTicker.find('ul'),       // ul
            tickerLl = tickerUl.find('li'),         // 所有的 li
            liFirst = tickerUl.find('li:first');    // 第一個 li

        // 將第一個項目設定為顯示
        // 將CSS設定為 display:block，並使用 opacity 屬性值淡入顯示
        // 執行中的 li 項目會被加上 showlist 類別，之後切換會以此作為判斷
        liFirst.css({ display: 'block', opacity: '0', zIndex: '98' }).stop().animate({ opacity: '1' }, 1000, 'linear').addClass('showlist');

        // 重覆執行切換項目，每6秒切換一次
        // 將目前的li元素淡出隱藏，同時將下一個li元素淡入顯示，再把開頭隱藏項目移到最後
        setInterval(function () {
            // 將目前顯示的li存入變數showLi
            var showLi = thisTicker.find('.showlist');
            // 將目前li元素淡出動畫後，利用 next()方法找到本身的下一個li元素淡入顯示
            // 並附加 showlist 類別
            // 接著用 end()方法回到剛剛隱蔵的li元素
            // 利用 appendTo 方法將該 li 元素加到ul元素尾端
            // 此時因為加上的li元素已存在於ul中，因此會將相同的li元素刪除，
            // 結果就是將開頭的li元素移到尾端，然後再隱藏 display:none，並移除showlist類別
            showLi.animate({ opacity: '0' }, 1000, 'linear', function () {
                $(this).next().css({ display: 'block', opacity: '0', zIndex: '99' }).animate({ opacity: '1' }, 1000, 'swing').addClass('showlist').end().appendTo(tickerUl).css({ display: 'none', zIndex: '98' }).removeClass('showlist');
            });
        }, 1000);
    });
});
