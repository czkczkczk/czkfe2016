/**
 * Created by Administrator on 2016/11/7 0007.
 */
$(function(){
    /*控制图片显示对应颜色*/
    var $imgIndex = 0;/*'#simg 里div的索引值*/
    var $index = 0;/*'#simg 里div的图片的索引*/
    $('#color li').on('click',function(){
        $imgIndex=$(this).index();
        $('#simg div').eq($imgIndex).find("img").eq(0).show().siblings().hide();
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
    /*改变尺寸*/
    $('#size li').on('click',function(){
        $('#size strong').text($(this).text());
    })
    /*改变数量和总价钱*/
    $('select').on('change',function(){
        $('#money strong').text(200*$(this).val());
    })
    /*评分显示*/
    $('#star a').on('click',function(){
        var $title=this.title
        var $starIndex = $(this).index("#star a")+1;//在#star a中找this的索引
        $("#star a").removeClass();//每次点击都要先清除a的class，不能后面用兄弟。因为所有的a不是兄弟
        $("#star a:lt("+$starIndex+")").addClass('selected');
        alert('感谢你给了'+$title)
        // $('#star li:lt('+$starIndex+')').find("a").addClass('selected');

        return false;
    })




})