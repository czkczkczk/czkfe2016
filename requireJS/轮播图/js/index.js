/**
 * Created by Administrator on 2016/12/11 0011.
 */
require(['jquery','carousel'],function($,Carousel){
    var imgs = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
    var settings = {
        imgsUrl:imgs,
        buttonStyle:'circle',//square
        arrowsStyle:'bottom',//center
        speed:500,
        location:'#container1'
    };
    var carousel = new Carousel(settings);
    carousel.init();
    var settings2 = {
        imgsUrl:imgs,
        buttonStyle:'square',
        arrowsStyle:'center',
        speed:1000,
        location:'#container2'
    };
    var carousel = new Carousel(settings2);
    carousel.init();
});