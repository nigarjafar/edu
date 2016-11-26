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

  $("body").click(function(event){
      console.log(event.target.id)
      if(event.target.id!="input-search"){
      $(".navbar .input-group").stop().animate({
      width:"80px"},650);
      $("#input-search").stop().animate({
      width:"67px"},650);
      }

  })
  $("#input-search").focus(function(){
      $(".navbar .input-group").stop().animate({
      width:"220px"},650);
      $("#input-search").stop().animate({
      width:"200px"},650);
    });

  $(".button-search").click(function(){
      $(".navbar .input-group").stop().animate({
      width:"80px"},650);
      $("#input-search").stop().animate({
      width:"67px"},650);

  })




// end of menu
});
