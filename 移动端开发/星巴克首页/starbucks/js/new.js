/**
 * Created by Administrator on 2016/12/4 0004.
 */
$(function () {
    eventType = isMobile()?'tap':'click';
    //判断点击事件是pc端还是移动端
    //isMobile()已经在前面定义过了
    $('#tab span').on(eventType,function(){
        var index = $(this).index();
        var imgNum = $('.slide-box li').size();
        var tabNum = $("#tab span:visible").size();
        //获取正显示的span的个数
        var num = Math.ceil(imgNum/tabNum);
        var iLeft = -num*290*index;
        console.log(num+"DDD"+index);
        console.log(iLeft)
        if(index == tabNum-1){
            iLeft = $('.slide-box').width()-$('.slide-box ul').width();
        }
        $('.slide-box ul').animate({
            left:iLeft
        })
    })
})