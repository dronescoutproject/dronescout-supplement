function hide(){
  $("#content").hide();
  $("#wip").hide();
  $("#loading").fadeIn();
}
function wip(){
  $("#content").hide();
  $("#loading").hide();
  $("#wip").fadeIn();
}
function back(){
  $("#loading").hide();
  $("#wip").hide();
  $("#content").fadeIn();
}
