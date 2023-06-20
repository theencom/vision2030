
$(document).ready(function(){
    $(".popup").hide();
    $(".popon").on("click", function(e){
  
        $(".popup").fadeIn(500);
    })
    $(".popoff").on("click", function(e){
  
        $(".popup").fadeOut(500);
    })
});



