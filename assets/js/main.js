$(document).ready(function(){
//Search button

// ACTIONS slider
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
//End of ACTIONS slider

// ACTIONS pop up
var open = false;

$("body").click(function(e){
  if(open){
    $("#popUp").css("display","none");
    console.log("closed");
    open=false;
  }
})

$(".add-reminder").click(function(e){
  if(open==false){
    $("#popUp").css("display","initial");
    console.log("opened");
    open=true;
    e.stopPropagation();
  }

})

// End of ACTIONS pop up

  //resizeElements();

// RESIZING all post-items


// End of resizing all post-items

// Search

  $("body").click(function(event){
      if(event.target.id!="input-search"){
      $(".navbar #full-nav-search").stop().animate({
      width:"80px"},650);
      $("#full-nav-search #input-search").stop().animate({
      width:"67px"},650);
      }

  })
  $("#full-nav-search #input-search").focus(function(){
      $(".navbar #full-nav-search").stop().animate({
      width:"220px"},650);
      $("#full-nav-search #input-search").stop().animate({
      width:"200px"},650);
    });

  $(".button-search").click(function(){
      $(".navbar #full-nav-search").stop().animate({
      width:"80px"},650);
      $("#full-nav-search #input-search").stop().animate({
      width:"67px"},650);

  })




// end of menu

//Collapse-menu

$("#navbar-collapse .navbar-nav li a").click(function(){
  //check if dropdown menu is open or closed
  var check= $(this).parent().find(".dropdown-menu").css("display")!="block"
  $("#navbar-collapse .navbar-nav li .dropdown-menu").slideUp()
  if(check)
    $(this).parent().find(".dropdown-menu").slideDown();
//if li has an dropdown-menu, preventDefault(href)
  if($(this).parent().find(".dropdown-menu").length)
    event.preventDefault();
})



//Collapse menu open/close
// $("#collapse-button").click(function(){
//   if($("#navbar-collapse").css("left")=="-200px"){
//     $("#navbar-collapse").animate({ left:"0px"},500);
//   }
//   else{
//   $("#navbar-collapse").animate({ left:"-200px"},500);
//   }
// })




ToggleCollapseNavbar();
NavbarCollapse();

});

$(window).resize( NavbarCollapse );
$(window).resize( CloseCollapseNavbarWithoutEffect );

function NavbarCollapse(){
  if( $("#top-collapse").css("display")!="none" ){
    $("#navbar").prop("id","navbar-collapse")
  }
  else{
    $("#navbar-collapse").prop("id","navbar")
    $("#navbar").css("left","0px")
  }
}

function ToggleCollapseNavbar(){
  $("#collapse-button").click(function(){
  if($("body").css("left")=="0px"){
  	OpenCollapseNavbar();
  }
  else{
    CloseCollapseNavbar();
  }
})
}

function OpenCollapseNavbar(){

  $("body").animate({ left:"200px"},500);
  $("#top-collapse").animate({ left:"200px"},500);
  $("#navbar-collapse").animate({ left:"0px"},500);
}
function CloseCollapseNavbar(){
  $("body").animate({ left:"0"},500);
  $("#top-collapse").animate({ left:"0"},500);
  $("#navbar-collapse").animate({ left:"-200px"},500);
}

function CloseCollapseNavbarWithoutEffect(){
  $("body").css("left","0");
  $("#top-collapse").css("left","0")
  $("#navbar-collapse").css("left","-200px")
}
