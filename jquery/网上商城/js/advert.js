/**
 * Created by Administrator on 2016/11/4 0004.
 */
$(function(){
    //�����ʾ���صķ���
    //$('#a-content a').on('click',function(){
    //    var $index =$(this).index();
    //
    //    $(this).addClass('selected').siblings().removeClass();
    //    $('#advert img').eq($index).show().siblings().hide();
    //
    //})
    /*��������jquery�ı�z-index�����Բ���html���cssд��*/

    $('#advert img').each(function(index,img){
        $(img).css('z-index', ($('#advert img').size() - index));
    });
    var a=5;
    /*���뵭��
    * ����������mouseover��hover*/
    //$('#a-content a').on('mouseover',function(){
    //    a++;
    //    var $index =$(this).index();
    //    //alert($index)
    //    $(this).addClass('selected').siblings().removeClass();
    //    $('#advert img').eq($index).css("z-index",a).css("opacity",0).animate({opacity:1},800);
    //    //alert($('#advert img').index());
    //})
    $('#a-content a').hover(function(){
        a++;
        var $index =$(this).index();
        //alert($index)
        $(this).addClass('selected').siblings().removeClass().unbind('hover');
        $('#advert img').eq($index).css("z-index",a).css("opacity",0).animate({opacity:1},800);
        //alert($('#advert img').index());
    },function(){})
})
