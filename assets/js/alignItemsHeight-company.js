$(document).ready(function(){

  alignItems();

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
      itemsInRow = 2;
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
});
