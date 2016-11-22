$(document).ready(function(){
    var check=true;
    $(".button-search").click(function(){
        if(check){
          $(".navbar .input-group").stop().animate({
          width:"220px"},650);
          $(".navbar .input-group input").stop().animate({
          width:"200px"},650);
          check=false;
        }
        else{
          $(".navbar .input-group").stop().animate({
          width:"20px"},650);
          $(".navbar .input-group input").stop().animate({
          width:0},650);
          check=true;
        }


    });
});
