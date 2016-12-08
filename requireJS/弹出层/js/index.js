/**
 * Created by Administrator on 2016/12/8 0008.
 */
//如果要引进jquery文件推荐写法就是jquery.js
require(['jquery','dialog'], function ($,dialog) {
    //function里的dialog是前面require引入的dialog.js的返回值
    $('#open').on('click', function () {
        //在这里定义一个变量，往方法里传参数，使弹出层的样式是可以变化的
        var settings= {
            width:500,
            height:400,
            title:'我的弹出层',
            content:'这是蠢办法，不是面向对象的方法'
        };
        //没传值就是dialog.js里的定义的默认值
        dialog.open();
        //穿参数settings会根据变量settings设置的值改变
        //dialog.open(settings);
    });
});