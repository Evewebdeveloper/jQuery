
$(".openNav").click(function(){
  
    $("#leftMenue").css("left" , "0")
})
$(".closeNav").click(function(){
    $("#leftMenue").css("left" , "-270px")

})
$(".accordion h3").click(function(){
    $(this).next().slideToggle();
    $(".accordion div").not($(this).next()).slideUp();
})
$("textarea").keyup(function(){
let myLength =$(this).val().length;
$("#chars").text( 100-myLength <=0 ?  'max length' : 100-myLength);
})



var countDownDate = new Date("Oct 25, 2023 3:14:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("timD").innerHTML = days +""+ "day " ;
  document.getElementById("timH").innerHTML = hours +""+ "hour " ;
  document.getElementById("timM").innerHTML = minutes +""+ "min " ;
  document.getElementById("timS").innerHTML = seconds +""+ "sec " ;

}, 1000);