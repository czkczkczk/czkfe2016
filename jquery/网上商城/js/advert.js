/**
 * Created by Administrator on 2016/11/4 0004.
 */
$(function(){
    $('#a-content a').on('click',function(){
        var $index =$(this).index();
        $(this).addClass('selected').siblings().removeClass();
        $('#advert img').eq($index).show().siblings().hide();
    })
})
