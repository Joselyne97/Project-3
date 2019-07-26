$(document).ready(function() {
   $("#pic1").click(function() {
$(".dede").toggle();
$(".pic1").toggle();
   });
});
$(document).ready(function() {
    $("#par1").click(function() {
 $(".dede").toggle();
 $(".pic1").toggle();
    });
 });

$(document).ready(function() {
    $("#pic2").click(function() {
 $(".deve").toggle();
 $(".pic2").toggle();
    });
 });
 $(document).ready(function() {
    $("#deve").click(function() {
 $(".deve").toggle()
 ;$(".pic2").toggle();
    });
 });
 $(document).ready(function() {
    $("#pic3").click(function() {
 $(".pro").toggle();
 $(".pic3").toggle();
    });
 });
 $(document).ready(function() {
    $("#pro").click(function() {
 $(".pro").toggle();
 $(".pic3").toggle();
    });
 });
 
 $(document).ready(function(){
    $("form").submit(function(){
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var text = document.getElementById("textarea");
      alert("Hey " + name.value + "! We have received your message,Thank You!");
    });
  });