/**
 * Created by Administrator on 2016/11/7 0007.
 */
$(function(){

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