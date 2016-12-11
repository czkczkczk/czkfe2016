/**
 * Created by Administrator on 2016/12/11 0011.
 */
define(['jquery'],function($){
    function Carousel(settings){
        this.defaultSettings = {
            imgsUrl: [],
            buttonStyle: "circle",//square
            arrowsStyle: "bottom",//center
            speed: 500,
            location: "body"
        };
        $.extend(this.defaultSettings, settings);
        this.$container = $('<div class="carousel-container">');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$tab = $('<ul class="carousel-tabs"></ul>');
        this.$arrows = $('<div class="carousel-arrows"></div>').addClass(this.defaultSettings.arrowsStyle);
        this.$prev = $('<span class="carousel-arrows-prev">&lt;</span>').addClass(this.defaultSettings.arrowsStyle);
        this.$next = $('<span class="carousel-arrows-next">&gt;</span>').addClass(this.defaultSettings.arrowsStyle);
    };

    Carousel.prototype.init = function(){
        var that = this;
        var nowIdx = 0
        this.$arrows.append(this.$prev).append(this.$next);
        this.$container.append(this.$imgs).append(this.$tab).append(this.$arrows);
        $(this.defaultSettings.location).append(this.$container);

        for(var i=0;i<this.defaultSettings.imgsUrl.length;i++){
            this.$imgs.append($("<img src='"+ this.defaultSettings.imgsUrl[i] +"'>"));
            this.$tab.append($("<li>"+(this.defaultSettings.buttonStyle == 'circle'?'':(i+1))+"</li>"));
        };

        $('img:first-child',this.$imgs).addClass('selected');
        $('li:first-child',this.$tab).addClass('selected');
        $('li',this.$tab).addClass(this.defaultSettings.buttonStyle);

        $('li',this.$tab).on('mouseover', function(){
            nowIdx = $(this).index();
            changeImg();
        });

        this.$next.on('click', function(){
            nowIdx++;
            if(nowIdx == that.defaultSettings.imgsUrl.length){
                nowIdx = 0
            }
            changeImg();
        });
        this.$prev.on("click", function(){
            nowIdx--;
            if(nowIdx == -1){
                nowIdx = that.defaultSettings.imgsUrl.length - 1;
            }
            changeImg();

        });
        play();
        this.$container.hover(function(){
            clearInterval(that.timer);
        },function(){
            play();
        });
        function  changeImg(){
            $("img", that.$imgs).eq(nowIdx).addClass("selected").siblings().removeClass("selected");
            $("li", that.$tab).eq(nowIdx).addClass("selected").siblings().removeClass("selected");
        }
        //var timer;
        function play(){
            //方法里也可以定义属性
          that.timer=  setInterval(function(){
                that.$next.trigger('click');
            },that.defaultSettings.speed);
        }

    };



    return Carousel;
})