/**
 * Created by Administrator on 2016/12/4 0004.
 */
$(function () {
    eventType = isMobile()?'tap':'click';

    //判断点击事件是pc端还是移动端
    //isMobile()已经在前面定义过了
   $('#menu').on(eventType,function(){
       $('#mask').css('display','block').css('height',document.documentElement.scrollHeight);
       console.log(document.documentElement.scrollHeight);
       $('#menu1').slideRightShow()
   })
    $('#mask').on(eventType,function(){
        $('#mask').hide();
        $('#menu1').slideLeftHide()
    })



//右滑动显示
    $.fn.slideRightShow = function(speed, callback) {
        this.animate({
            width: "show",
            paddingRight: "show",
            paddingLeft: "show",
            marginRight: "show",
            marginLeft: "show"
        }, speed, callback);
    }

//左滑动隐藏
    $.fn.slideLeftHide = function(speed, callback) {
        this.animate({
            width : "hide",
            paddingLeft : "hide",
            paddingRight : "hide",
            marginLeft : "hide",
            marginRight : "hide"
        }, speed, callback);
    }
//子菜单
    $('.two').each(function(){
        this.click=0;//自定义标识符
    })
    //var click = 0;
    $('.two').on(eventType, function () {
        //this.click=1;
        if(this.click == 0){
            $(this).find('ul a').css('display','block');
            $('#menu1').css('height','auto');//高度变成auto，根据内容自适应
            this.click = 1
        }
        else{
            $(this).find('ul a').css('display','none');
            $('#menu1').css('height','100%');
            this.click = 0;
        };
    })

})