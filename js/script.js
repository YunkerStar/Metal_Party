$(function(){
  $("#bg").hide();
  $("#party_img").click(function(){
    $("#bg").fadeIn(300);
  });
  $("#ok").click(function(){
    $("#bg").fadeOut(300);
  });
});
