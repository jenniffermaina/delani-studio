
/************************* WHAT WE DO ***************************************************/
$(document).ready(function(){
  $(".tgl p").hide();
$("#dsn").click(function(){
    $("#dsn img").toggle();
   $("#dsn p").toggle();
});
$("#dvpt").click(function(){
  $("#dvpt img").toggle();
 $("#dvpt p").toggle();
});
$("#mngt").click(function(){
  $("#mngt img").toggle();
 $("#mngt p").toggle();
});
/******************* PORTFOLIO *************************************/
$(document).ready(function() {
  $('.text').hide();
  $('img').animate({
      opacity:1
      
  });

  $('img').hover(function() {
      $(this).stop().animate({opacity:4},200);
      $('.text').fadeIn();

  }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.text').fadeOut();
  });

})

/*************** FORM SUBMISSION *********************************/
$("#submission").submit(function(event){
  var data_1 = $("input:first").val();
  var data_2 = $("input#mail").val();
  if(data_1 && data_2 != ""  ){
    $(".message").text("Thank you " + data_1 + " Your message has been received");
    $(".message").removeClass("error");
    $(".message").addClass("success");
  }else{
    $(".message").text("Error!!! Please fill in all the details correctly");
    $(".message").addClass("error");
  }
  event.preventDefault();
});

});

