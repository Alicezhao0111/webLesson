// 滑鼠事件：mouseover()移入、mousemove()移動、mouseout()移出
// X、Y座標：pageX、pageY
// append()：將元素加到選擇器之後
// html()：選取$(選擇器)所有的HTML
// fadeIn()淡入、fadeOut()淡出：可搭配速度（slow, normal, fast）
$(function(){
	$('a:has(.ttpShow)').mouseover(function(e){
		$('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
		$('#ttpPanel').css({top:(e.pageY+10) + 'px',left:(e.pageX+10) + 'px'}).fadeIn('fast');
	}).mousemove(function(e){
		$('#ttpPanel').css({top:(e.pageY+10) + 'px',left:(e.pageX+10) + 'px'});
	}).mouseout(function(){
		$('#ttpPanel').remove();
	});
});
