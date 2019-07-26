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

  $(".im1").hide();
  $("#a").animate({
      opacity:1
  });
  $('#a').hover(function(){
      $(this).stop().animate({
          opacity: .4},200);
     $('.im1').fadeIn();
  },
  function(){
      $(this).stop().animate({
          opacity: 1},500);
          $('.im1').fadeOut();
      });
//  .............................
      $(".im2").hide();
  $("#b").animate({
      opacity:1
  });
  $('#b').hover(function(){
      $(this).stop().animate({
          opacity: .4},200);
     $('.im2').fadeIn();
  },
  function(){
      $(this).stop().animate({
          opacity: 1},500);
          $('.im2').fadeOut();
      });
    //   .............................
    $(".im3").hide();
  $("#c").animate({
      opacity:1
  });
  $('#c').hover(function(){
      $(this).stop().animate({
          opacity: .4},200);
     $('.im3').fadeIn();
  },
  function(){
      $(this).stop().animate({
          opacity: 1},500);
          $('.im3').fadeOut();
      });

    // .............................
    $(".im4").hide();
  $("#d").animate({
      opacity:1
  });
  $('#d').hover(function(){
      $(this).stop().animate({
          opacity: .4},200);
     $('.im4').fadeIn();
  },
  function(){
      $(this).stop().animate({
          opacity: 1},500);
          $('.im4').fadeOut();
      });
    // .............................
    $(".im5").hide();
    $("#e").animate({
        opacity:1
    });
    $('#e').hover(function(){
        $(this).stop().animate({
            opacity: .4},200);
       $('.im5').fadeIn();
    },
    function(){
        $(this).stop().animate({
            opacity: 1},500);
            $('.im5').fadeOut();
        });
    //.............................
    $(".im6").hide();
    $("#f").animate({
        opacity:1
    });
    $('#f').hover(function(){
        $(this).stop().animate({
            opacity: .4},200);
       $('.im6').fadeIn();
    },
    function(){
        $(this).stop().animate({
            opacity: 1},500);
            $('.im6').fadeOut();
        });
    //.............................
    $(".im7").hide();
  $("#g").animate({
      opacity:1
  });
  $('#g').hover(function(){
      $(this).stop().animate({
          opacity: .4},200);
     $('.im7').fadeIn();
  },
  function(){
      $(this).stop().animate({
          opacity: 1},500);
          $('.im7').fadeOut();
      });
    //.............................
    $(".im8").hide();
    $("#h").animate({
        opacity:1
    });
    $('#h').hover(function(){
        $(this).stop().animate({
            opacity: .4},200);
       $('.im8').fadeIn();
    },
    function(){
        $(this).stop().animate({
            opacity: 1},500);
            $('.im8').fadeOut();
        });

