$(document).ready(function(){

// RESIZING all post-items
  $(window).resize(function(){
    if(window.width > 993)
      resizeElements();
    else
      $(".post-item").each(function(){
        $(this).height(auto);
      })
  })

  $(function resizeElements(){
    $("#category > .row").each(function(){
      var maxHeight=0;
      // console.log("isledi");
      $(this).find(".post-item").each(function(){
        if($(this).height() > maxHeight)
        maxHeight = $(this).height();
      });

      $(this).find(".post-item").each(function(){
        $(this).height(maxHeight);
      });

    });
  })
// End of resizing all post-items

// MENU
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
// end of menu
});
