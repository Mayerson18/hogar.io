"use strict";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD819a4twnv3KRHnEtoM1j6eeithMWOsaU",
  authDomain: "hogar-4cb77.firebaseapp.com",
  databaseURL: "https://hogar-4cb77.firebaseio.com",
  projectId: "hogar-4cb77",
  storageBucket: "hogar-4cb77.appspot.com",
  messagingSenderId: "178630339964"
};
firebase.initializeApp(config);

/*let nombre = firebase.database().ref().child('nombre');
let telefono = firebase.database().ref().child('telefono');
let email = firebase.database().ref().child('email');*/

function writeNewPost(name,email,cel,ciudad) {
  // A post entry.
  var postData = {
    nombre: name,
    email: email,
    telefono: cel,
    ciudad: ciudad
  };
  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;
  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  return firebase.database().ref().update(updates);
}

function snack() {
   var x = document.getElementById("snackbar")
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 }

    $('.form-contactenos').validate({ // initialize the plugin
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
       messages: {
         nombre: "Por favor especifica tu nombre",
         email: {
           required: "Necesitamos tu dirección de correo",
           email: "Tu correo debe llevar el siguiente formato name@domain.com"
         },
         telefono: "Por favor especifica tu numero telefonico"
       },
       submitHandler: function (form) {
         var form = $(form).serializeArray();
         var nombre = form[0].value;
         var email = form[1].value;
         var telefono = form[2].value;
         let ciudad = "";
         if( typeof form[3] != "undefined"){
          ciudad = form[3].value;
         }
         writeNewPost(nombre,email,telefono,ciudad);
         analytics.identify(email, {
          name: nombre,
          firstName : nombre,
          lastName : "",
          phone : telefono,
          email: email,
          plan: "premium"
        });
         snack();//ENVIADO
         Close();
         return false;
       }
    });

    $('.cotizar').validate({ // initialize the plugin
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
       messages: {
         nombre: "Por favor especifica tu nombre",
         email: {
           required: "Necesitamos tu dirección de correo",
           email: "Tu correo debe llevar el siguiente formato name@domain.com"
         },
         telefono: "Por favor especifica tu numero telefonico"
       },
       submitHandler: function (form) {
         var form = $(form).serializeArray();
         var nombre = form[0].value;
         var email = form[1].value;
         var telefono = form[2].value;
         let ciudad = "";
         if( typeof form[3] != "undefined"){
          ciudad = form[3].value;
         }
         writeNewPost(nombre,email,telefono,ciudad);
         analytics.identify(email, {
          name: nombre,
          firstName : nombre,
          lastName : "",
          phone : telefono,
          email: email,
          plan: "premium",
          city : ciudad
        });
         snack();//ENVIADO
         Close();
         return false;
       }
    });

    $('.Descarga').validate({ // initialize the plugin
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
       messages: {
         nombre: "Por favor especifica tu nombre",
         email: {
           required: "Necesitamos tu dirección de correo",
           email: "Tu correo debe llevar el siguiente formato name@domain.com"
         },
         telefono: "Por favor especifica tu numero telefonico"
       },
       submitHandler: function (form) {
         var form = $(form).serializeArray();
         var nombre = form[0].value;
         var email = form[1].value;
         var telefono = form[2].value;
         let ciudad = "";
         if( typeof form[3] != "undefined"){
          ciudad = form[3].value;
         }
         writeNewPost(nombre,email,telefono,ciudad);
         analytics.identify(email, {
          name: nombre,
          firstName : nombre,
          lastName : "",
          phone : telefono,
          email: email,
          plan: "premium",
          city : ciudad
        });
         snack();//ENVIADO
         Close();
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

/*
analytics.identify("potus@potus.com", {
 name: "potus Gibbons",
 firstName : "potus",
 lastName : "",
 email: "potus@potus.com",
 plan: "premium"
 //logins: 5
});
*/

function Cotizar(){
  analytics.page('Cotizar', {
    title: 'Cotizar',
    url: 'https://hogar.io/cotizar',
    path: '/Cotizar'
  });
}

function Descargar(){
  analytics.page('Descargar', {
    title: 'Descargar',
    url: 'https://hogar.io/descargar',
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
  Close();
})

$(".modal-close").click(function(){
  Close();
})

$('.submitt').click(function(){
    ($(this).parent().submit())
});

function Close(){
  $(".modal").removeClass("is-active");
  $(".modal").removeClass("fadeIn animated");
}

$('form').submit(function(ev) {
    ev.preventDefault(); // to stop the form from submitting
    var form = $(this).serializeArray();
    var nombre = form[0].value;
    var email = form[1].value;
    var telefono = form[2].value;
    let ciudad = "";
    if( typeof form[3] != "undefined"){
     ciudad = form[3].value;
    }

    $(".nombre").val(nombre);
    $(".email").val(email);
    $(".ciudad").val(ciudad);
    $(".telefono").val(telefono);


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

});
