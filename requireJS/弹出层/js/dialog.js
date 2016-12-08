/**
 * Created by Administrator on 2016/12/8 0008.
 */
define(['jquery'],function(){

//var obj = {
//    open:
//}
//return obj;
    //在这里写一个方法，
    // 把弹出层的html结构加到body里，这样当做一个模块就不用再前面写死
    return{
        open:function(settings){

            //下面是index.js不传参数情况下的默认样式
            var defaultSettings = {
                width:400,
                height:300,
                title:'弹出层',
                content:'默认'
            };
            //jquery用法，把后面的往前面的合并（目标，参数）
            $.extend(defaultSettings, settings);

            var html = '<div class="dialog-container">'
                      +'<div class="dialog-mask"></div>'
                      +'<div class="dialog-box">'
                        +'<div class="dialog-title">'
                          +'<div class="dialog-title-item">'+defaultSettings.title+'</div>'
                          +'<div class="dialog-title-close">[X]</div>'
                        +'</div>'
                        +'<div class="dialog-content">'+defaultSettings.content+'</div>'
                     +'</div>'
                     +'</div>';
            $('body').append(html);
            $('.dialog-box').css({
                width:defaultSettings.width,
                height:defaultSettings.height,
                marginLeft:-defaultSettings.width/2,
                marginTop:-defaultSettings.height/2
            });
            $('.dialog-content').css({
                height:defaultSettings.height-30
            });
        //这里不能在去写 关闭事件
            $(".dialog-title-close").on("click", function(){
                $(".dialog-container").remove();
            });
        //因为选中关闭的container会把所有弹出的全都关掉
       //，所以去用面向对象的方法，把每一个弹出层都当成一个对象
        }
    }
});