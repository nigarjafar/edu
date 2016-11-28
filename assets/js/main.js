$(document).ready(function(){
  alignItems();
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
$(window).resize(function(){
  location.reload();
});

function alignItems(){
  var h = $(document).width()+17;
  var itemsInRow;
  var itemHeight;
  var maxHeight=0;
  var beginningOfRow=0;
  var items = $(".post-item").length;

  if(h >= 992){
    itemsInRow = 3;
  }
  else if(h >= 768){
    itemsInRow = 2;
  }

  for(var itemID=0;itemID<items;itemID++){
    console.log(itemID+"--------------");
    if(itemID % itemsInRow == 0){
      beginningOfRow = itemID;
      maxHeight=0;
      console.log("NEW ROW");
    }

    for(var i=beginningOfRow;i<beginningOfRow+itemsInRow;i++){
      itemHeight = $(".post-item:eq("+i+")").height();
      if(itemHeight > maxHeight)
        maxHeight = itemHeight;
      console.log("item: "+itemHeight+"max: "+maxHeight);
    }

    for(var j=beginningOfRow;j<beginningOfRow+itemsInRow;j++){
      $(".post-item:eq("+j+")").height(maxHeight);
      console.log(itemID+" -> "+j);
    }
  }
}

// console.log("N: "+(n)+" cH: "+cH+" maxH: "+maxH+" cDist: "+cDist+" dist: "+dist);
// End of resizing all post-items

// Search

  $("body").click(function(event){
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

//Collapse-menu

$("#navbar-collapse .navbar-nav li a").click(function(){
  //check if dropdown menu is open or closed
  console.log( $(this))
  var check= $(this).parent().find(".dropdown-menu").css("display")!="block"
  $("#navbar-collapse .navbar-nav li .dropdown-menu").slideUp()
  if(check)
    $(this).parent().find(".dropdown-menu").slideDown();
//if li has an dropdown-menu, preventDefault(href)
  if($(this).parent().find(".dropdown-menu").length)
    event.preventDefault();
})


//Collapse menu open/close
$("#collapse-button").click(function(){
  if($("#navbar-collapse").css("left")=="-200px"){
    $("#navbar-collapse").animate({ left:"0px"},500);
  }
  else{
  $("#navbar-collapse").animate({ left:"-200px"},500);
  }
})

//width 975
console.log($(window).width())
NavbarCollapse();

});

$(window).resize(NavbarCollapse());

function NavbarCollapse(){
  if( $(window).width() <995 ){
    $("#navbar").prop("id","navbar-collapse")
  }
  else{
    $("#navbar-collapse").prop("id","navbar")
  }
}
