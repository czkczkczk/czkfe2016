/**
 * Created by Administrator on 2016/11/4 0004.
 */
$(function(){
    $('#brand-tab li').on('click',function(){
        $(this).addClass('selected').siblings().removeClass()
        var $index=$(this).index()
        if($index==4){
            $index=0
        }
        $('#brand-img').animate({

            left:-$('#brand-imga').width()*($index)

        });
    });
});