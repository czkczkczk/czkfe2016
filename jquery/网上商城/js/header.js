/**
 * Created by Administrator on 2016/11/4 0004.
 */
$(function(){
    $('#skin li').on('click',function(){
        var $id = this.id;
        $(this).addClass('selected').siblings().removeClass('selected');
        $('#nav').attr('class',$id+"_color");
        $('#hh').attr('class',$id+"_color");



    })
})