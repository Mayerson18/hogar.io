"use strict";
$(".nav-toggle").click(function() {
  if($(".nav-menu").hasClass("is-active")){
    $(".nav-menu").removeClass("is-active");
    $(".nav-menu").children().removeClass("r");
  }else{
    $(".nav-menu").addClass("is-active");
    $(".nav-menu").children().addClass("r");
  }
});

var someBeforeOrAfterFunction = function(e, animationContext){

	//The event that triggers the animation
	console.log(e);

	//The Animation Context Instance
	console.log(animationContext);
}


$(".click").click(function(){
  $(".modal").addClass("is-active");
})

$(".modal-background").click(function(){
  $(".modal").removeClass("is-active");
})

$(".modal-close").click(function(){
  $(".modal").removeClass("is-active");
})
