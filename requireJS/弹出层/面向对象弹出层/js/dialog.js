/**
 * Created by Administrator on 2016/12/8 0008.
 */
define(['jquery'],function($){
    function Dialog(settings){
        this.defaultSettings = {
            width: 400,
            height: 300,
            title: "弹出层",
            content: ""
        };
        $.extend(this.defaultSettings,settings);
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box = $('<div class="dialog-box"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-title-item"></div>');
        this.$close = $('<div class="dialog-title-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
    };
    //方法写在原型下
    Dialog.prototype.open = function(){
        this.$container.append(this.$mask).append(this.$box);
        this.$box.css({
            width:this.defaultSettings.width,
            height:this.defaultSettings.height
        }).append(this.$title).append(this.$content);
        //title的内容html（）
        this.$item.html(this.defaultSettings.title);
        this.$title.append(this.$item).append(this.$close);
        //jquery用法.load(),如果加载的空文件加载的是html自己。
        //从服务器载入数据并且将返回的HTML的代码并插入至匹配的元素中
       //这里需要加判断，如果没有判断，前面还不传值，它的content不是默认走它的默认值，而是引入整个html
        if(this.defaultSettings.content){
            this.$content.load(this.defaultSettings.content);
        }

        $('body').append(this.$container);

        //这个关闭事件在打开的时候就已经绑定了
        var that = this;
        //通过that这个变量保存这个this，此时的this指的是Dialog这个对象，关闭事件要清除的就是这个对象
        this.$close.on('click',function(){
            //this.close(),这是错误的
            // 因为这个this指的是this.$close这个事件源
            that.close();
        })
    };

    Dialog.prototype.close = function(){
         this.$container.remove()
    };
    return Dialog;
});