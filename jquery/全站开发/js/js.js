/**
 * Created by Administrator on 2016/11/2 0002.
 */
$(function(){
    var $this=$('input');
$('input').on('focus',function(){

    if(this.value == this.defaultValue){
        this.value = ''
    }
}).on('blur',function(){
    if(this.value==''){
        this.value=this.defaultValue
    }
})
    $('input').on('keypress',function(event){
        if(event.keyCode==13){
            $this.val($(this).val())
        }
    })
    var index = 0;
    $('#left').on('click', function () {
        index-- ;
        if(index<0){
           index=1;
        }
        $('#img img').eq(index).show().siblings().hide()
    })
    $('#right').on('click',function(){
        index++;
        if(index==$('#img img').size()){
            index=0;
        }
        $('#img img').eq(index).show().siblings().hide()
    })
})
//$('#right').on('click', function () {
//    index++;
//    if(index==$('#img img').size()){
//        index=0;
//    }
//  $('#img img').animate(
//      top:-index*$('#img img').eq(0).height
//  )
//})
