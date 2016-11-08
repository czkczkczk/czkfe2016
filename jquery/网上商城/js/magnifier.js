/**
 * Created by Administrator on 2016/11/7 0007.
 */
$(function(){
    var $imgIndex = 0;/*'#simg 里div的索引值*/
    var $index = 0;/*'#simg 里div的图片的索引*/
    $('#color li').on('click',function(){
        $index=0;
        $imgIndex=$(this).index();
       //$('#simg div').eq($imgIndex).find("img").eq(0).show().siblings().hide();没用
        //此处是实现每次点击颜色选项的时候，显示的都是div里的第一张图片
        $('#simg div').eq($imgIndex).show().siblings().hide();
        $('#small-img div').eq($imgIndex).show().siblings().hide();

    });
    /* 通过选项显示局部图片大小--*/
    $('#small-img ul li').on('click',function(){
        /*此处li的索引每次都更改*/
        $index=$(this).index();
        $('#simg div').eq($imgIndex).find("img").eq($index).show().siblings().hide();
        //找到#simg里div的索引，通过找到的div找div里面图片的索引，这个索引对应上面li索引
        //此处还有别的写法，参考后面的评分显示

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
        /*age和client的区别就是page的参照点不随滚动条变化，
        client需要*/


        if($tt<0){
            $tt=0;
        }
        console.log($('body').scrollTop());
        //if($tt>e.clientY-$top-$("#drag").height()){
        //    $tt=e.clientY-$top-$("#drag").height()
        //}
        //有问题有问题因为e.clientY是变量
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
        //一定要先设置范围在执行
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