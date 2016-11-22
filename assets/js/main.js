$(documet).ready(function(){

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
      console.log("isledi");
      $(this).find(".post-item").each(function(){
        if($(this).height() > maxHeight)
        maxHeight = $(this).height();
      });

      $(this).find(".post-item").each(function(){
        $(this).height(maxHeight);
      });

    });
  })
});
