/**
 * Created by Administrator on 2016/11/4 0004.
 */
$(function(){
    $('#skin li').on('click',function(){
        console.log(11)
        $(this).addClass('selected').siblings().removeClass('selected')

    })
})