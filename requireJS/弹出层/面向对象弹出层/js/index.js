/**
 * Created by Administrator on 2016/12/8 0008.
 */
//如果要引进jquery文件推荐写法就是jquery.js
require(['jquery','dialog'], function ($,Dialog) {
    //function里的dialog是前面require引入的dialog.js的返回值
    $('#open').on('click', function () {
        //在这里定义一个变量，往方法里传参数，使弹出层的样式是可以变化的
        var settings= {
            //width:500,
            //height:400,
            title:'我的弹出层',
            content:'login.html'
        };
        //这个参数要在new的时候就传进去
        var dialog = new Dialog(settings);
        dialog.open();
        var dialog2 = new Dialog();
        dialog2.open();

    });
});