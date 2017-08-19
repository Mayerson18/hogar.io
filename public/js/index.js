"use strict";

function snack() {
   var x = document.getElementById("snackbar")
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 }

    $('form').validate({ // initialize the plugin
       rules: {
           nombre: {
               required: true
           },
           email: {
               required: true,
               email: true
           },
           telefono: {
             required: true
           }
       },
       submitHandler: function (form) {
         var form = $(form).serializeArray();
         var nombre = form[0].value;
         var email = form[1].value;
         var telefono = form[2].value;
           analytics.identify('miguel@parawebs.com', {
             firstName: nombre,
             lastName: telefono,
             email: email
           });
           snack();//ENVIADO
           return false;
       }
   });

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


!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
analytics.load("Uuthfscltct5TU3PKnzTR9YiuTvvCkD0");
analytics.page();
}}();

function Cotizar(){
  analytics.page('Cotizar', {
    title: 'Cotizar',
    url: 'https://hogar.io',
    path: '/Cotizar'
  });
}

function Descargar(){
  analytics.page('Descargar', {
    title: 'Descargar',
    url: 'https://hogar.io',
    path: '/Descargar'
  });
}

$(".click").click(function(){
  $(".modal").addClass("fadeIn animated");
})

$(".click1").click(function(){
  $(".modal1").addClass("is-active");
  Cotizar();
})

$(".click2").click(function(){
  $(".modal2").addClass("is-active");
  Descargar();
})

$(".modal-background").click(function(){
  $(".modal").removeClass("is-active");
  $(".modal").removeClass("fadeIn animated");
})

$(".modal-close").click(function(){
  $(".modal").removeClass("is-active");
  $(".modal").removeClass("fadeIn animated");
})

$('.submitt').click(function(){
    ($(this).parent().submit())
});

$('form').submit(function(ev) {
    ev.preventDefault(); // to stop the form from submitting

    if($(this).hasClass("cotizar")){
      analytics.track('Solicito Cotización', {
        title: 'Solicito Cotización',
      });
    }

    if($(this).hasClass("Descarga")){
      analytics.track('Solicito Descarga', {
        title: 'Solicito Descarga',
      });
    }

    if($(this).hasClass("form-contactenos")){
      analytics.track('Solicito Descarga', {
        title: 'Solicito Descarga',
      });
    }


    if(false){
      this.submit();
      analytics.identify('miguel@parawebs.com', {
        firstName: 'Peter',
        lastName: 'Gibbons',
        email: 'miguel@parawebs.com'
      });
    }
});
