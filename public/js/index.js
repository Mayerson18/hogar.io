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
  $(".modal").addClass("fadeIn animated");
})

$(".click1").click(function(){
  $(".modal1").addClass("is-active");
})

$(".click2").click(function(){
  $(".modal2").addClass("is-active");
})

$(".modal-background").click(function(){
  $(".modal").removeClass("is-active");
  $(".modal").removeClass("fadeIn animated");
})

$(".modal-close").click(function(){
  $(".modal").removeClass("is-active");
  $(".modal").removeClass("fadeIn animated");
})

!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
analytics.load("Uuthfscltct5TU3PKnzTR9YiuTvvCkD0");
analytics.page();
}}();
