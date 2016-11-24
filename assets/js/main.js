$(document).ready(function(){
//Search button

// ACTIONS pop-up
$(".post-item .post-item-image").mouseenter(function(){
  var height = $(this).find("img").height();
  $(this).find("img, .post-item-actions").stop(true,false).animate({
    top: "-"+height+"px",
  },300);
})

$(".post-item .post-item-image").mouseleave(function(){
  $(this).find("img, .post-item-actions").stop(true,false).animate({
    top: "0px",
  },200);
})

//   //resizeElements();
//
// // RESIZING all post-items
//   $(window).resize(function(){
//       //resizeElements();
//   })
//
//   function resizeElements(){
//     if($(window).width() > 993){
//       $("#category > .row").each(function(){
//         var maxHeight=0;
//         console.log("isledi");
//         $(this).find(".post-item").each(function(){
//           if($(this).height() > maxHeight)
//           maxHeight = $(this).height();
//         });
//
//         $(this).find(".post-item").each(function(){
//           $(this).height(maxHeight);
//         });
//
//       });
//     }
//   }
// // End of resizing all post-items

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
