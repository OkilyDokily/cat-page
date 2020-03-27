$(document).ready(function(){
  $("#kittenimg").click(function(){
    $("#kittenimg").fadeToggle();
    $("#kittenmessage").fadeToggle();
  });

  $("#kittenmessage").click(function(){
    $("#kittenimg").fadeToggle();
    $("#kittenmessage").fadeToggle();
  });

  $("#darktoggle").click(function(){
    $("body").toggleClass("brightbody");
    $("body").toggleClass("darkbody");
  
    $("#asyoucansee").toggleClass("light");
    $("#asyoucansee").toggleClass("dark");
    
    $("#list").toggleClass("lightlist");
    $("#list").toggleClass("darklist");
  });

});