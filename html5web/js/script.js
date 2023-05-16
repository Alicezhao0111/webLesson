    // 換圖輪播 Auto Switching Images for CSS-Slider
  function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });

  
  $(document).ready(function () {

    //---漢堡按鈕---
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active'); /*點擊這個this=>hamburger加上"is active"*/
        $('.navigation').toggleClass('show');/*點擊navigation加上"show"*//*所以css有這兩個class*/ 
    });

    // 滑動至指定區塊位置
    /*$(".menu a")取得括號內元素*/ /*.click()"行為"後面一定要小括號，括號內寫入"要做的下一件事"沒有可不寫*/ 
    // function(參數，沒有可不寫){}
    $(".menu a").click(function () { 
// 這邊的this =>.menu a
      var btn = $(this).attr("href"); /*取得"href"這個屬性(attr)*/ 
      var pos = $(btn).offset();/*取得正在按的那個按鈕的座標位置*/ 
      $("html,body").animate({scrollTop:pos.top},1000); //1000是速度，若沒寫則為預設0.4秒


     });
});



///// Anchor Smooth Scroll /////
//   $('.main-menu a, .learn-more-button a').click(function(e){
    
//     e.preventDefault();
        
//     var target = $(this).attr('href');
        
//     $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
//     return false;
//   });