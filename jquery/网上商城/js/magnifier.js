/**
 * Created by Administrator on 2016/11/7 0007.
 */
$(function(){
    var $imgIndex = 0;/*'#simg ��div������ֵ*/
    var $index = 0;/*'#simg ��div��ͼƬ������*/
    $('#color li').on('click',function(){
        $index=0;
        $imgIndex=$(this).index();
       //$('#simg div').eq($imgIndex).find("img").eq(0).show().siblings().hide();û��
        //�˴���ʵ��ÿ�ε����ɫѡ���ʱ����ʾ�Ķ���div��ĵ�һ��ͼƬ
        $('#simg div').eq($imgIndex).show().siblings().hide();
        $('#small-img div').eq($imgIndex).show().siblings().hide();

    });
    /* ͨ��ѡ����ʾ�ֲ�ͼƬ��С--*/
    $('#small-img ul li').on('click',function(){
        /*�˴�li������ÿ�ζ�����*/
        $index=$(this).index();
        $('#simg div').eq($imgIndex).find("img").eq($index).show().siblings().hide();
        //�ҵ�#simg��div��������ͨ���ҵ���div��div����ͼƬ�����������������Ӧ����li����
        //�˴����б��д�����ο������������ʾ

    })
   $('#simg').on('mouseover',function(){
       $('#drag').show();
       $("#big-img div").eq($imgIndex).find("img").eq($index).show().siblings().hide();
   });
    $("#simg").on("mousemove",function(e){
        var $left=$("#simg").offset().left;
        var $top=$("#simg").offset().top;
        var $ll= e.pageX-$left-$("#drag").width()/2;
        var $tt=e.pageY-$top-$("#drag").height()/2;
        /*age��client���������page�Ĳ��յ㲻��������仯��
        client��Ҫ*/


        if($tt<0){
            $tt=0;
        }
        console.log($('body').scrollTop());
        //if($tt>e.clientY-$top-$("#drag").height()){
        //    $tt=e.clientY-$top-$("#drag").height()
        //}
        //��������������Ϊe.clientY�Ǳ���
        if($tt>$('#simg').height()-$("#drag").height()){
            $tt=$('#simg').height()-$("#drag").height()
        }
        if($ll>$('#simg').width()-$("#drag").width())[
            $ll=$('#simg').width()-$("#drag").width()
        ]
        if($ll<0){
            $ll=0
        }
        $("#drag").css({"left":$ll,"top":$tt});
        //һ��Ҫ�����÷�Χ��ִ��
        var $fScaleX=$ll/($('#simg').width()-$("#drag").width());
        var $fScaleY=$tt/($('#simg').height()-$('#drag').height());
        $('#big-img div').eq($imgIndex).find('img').eq($index).css('top',-(800-$('#big-img').height())*$fScaleY+ "px");
        $('#big-img div').eq($imgIndex).find('img').eq($index).css('left',-(800-$('#big-img').width())*$fScaleX+ "px");
    });
    $('#simg').on('mouseout',function(){
        $('#drag').hide();
        $("#big-img img").hide();
    })
})