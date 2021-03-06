/* Vanilla Javascript 

window.addEventListener('load', function(){
alert('Ondigital');
});

 jQuery 

$(function(){
	//alert('Ondigital');
});


 jQuery no Conflict 
$.noConflict();
jQuery(document).ready(function($) {
	console.log('Hello');	
});

*/

/* Objetos de Jquery 
// Selección de pseudo-selectores
$(':checked')
$(':input')
$(':selected')

// jQuery Object 
// los elementos de un jQo se puedan acceder mediante un índice pero realmente son objetos

target.innerHTML = '<td>hello</td>';
$( target ).html('<td>Hello</td>'); 

// anexión de elementos JS vanilla
var target = document.getElementById('target');
var newE = document.createElement("div");
target.parentNode.insertBefore( newElement, target.nextSibling);

// anexión de elementos jQuery
var target = document.getElementById('target');
var newE = document.createElement("div");
$( target ).after ( newElement );
*/

$(function(){
	var header 		= $('#app-header');
	var subtitle 	= $('h1', header[0]);
	console.log(subtitle);


	// Más Velocidad para buscar
	$('#app-header').find('h1');

	/* Refinamiento de Selectores para mayor velocidad */

	// El elemento div.foo contiene elementos p
	$('div.foo').has('p');

	// El elemento h1 que no posean la clase bar
	$('h1').not('.bar');

	// Un item de una lista desordenada con la clase current
	$('ul li').filter('.current');

	// El primer item de una lista desordenada
	$('ul li').first();

	// El sexto item de una lista desrodenada
	$('ul li').eq(5);

	/*
		Pseudo Selectores

		Selecciona elementos <button> y con el atributo type='button'
			:checkbox
			Selecciona elementos <input> con el atributo type='checkbox'
			:checked
			Selecciona elementos <input> del tipo checkbox seleccionados
			:disabled
			Selecciona elementos del formulario que están deshabitados
			:enabled
			Selecciona elementos del formulario que están habilitados
			:file
			Selecciona elementos <input> con el atributo type='file'
			:image
			Selecciona elementos <input> con el atributo type='image'
			:input
			Selecciona elementos <input>, <textarea> y <select>
			:password
			Selecciona elementos <input> con el atributo type='password'
			:radio
			Selecciona elementos <input> con el atributo type='radio'
			:reset
			Selecciona elementos <input> con el atributo type='reset'
			:selected
			Selecciona elementos <options> que están seleccionados
			:submit
			Selecciona elementos <input> con el atributo type='submit'
			:text
			Selecciona elementos <input> con el atributo type='text'

	*/

  // Obtiene todos los elementos inputs dentro del formulario #myForm
  $('#myForm :input');

  // Encadenamiento
  $('#myForm').find('h3').eq(2).html('Nuevo texto para el tercer elemento h3');

  // Obtener Propiedades CSS

  // Propiedad Individual
  $('h4').css('fontSize', '100px');

  // Propiedades Múltiples
  $('h5').click(function(event){
    event.preventDefault();
      $(this).css({
        'fontSize': '100px',
        'color' : 'red'
      });
  });

  // Trabajar con clases

  subtitle.addClass('big');
  subtitle.removeClass('big');
  subtitle.toggleClass('big');


  // Atributos
  $('a').attr('href', 'index.html');

  $('a').attr({
    'title': 'Aquí el título que cambia',
    'href': 'index.html'
  });

  var a = $('<a>', {
    href: 'http://platzi.com',
    target: '_blank',
    html: 'Ir a platzi'
  });

  header.append(a);
  a.addClass('danger');

  setTimeout(function(){
    a.toggleClass('danger')
  }, 2000);

});


/* Ejemplos de Closure */
const name = 'Arnold';

function alerta(){
	alert('Hola' + name);
}


/* Eventos Funciones y Callbacks */
function suma(num1, num2){
	return num1 + num2;
}

function resta(num1,num2){
	return num1 - num2;
}

function division(num1,num2){
	return num1 / num2;
}

function multiplicacion(num1,num2){
	return num1 * num2;
}

function calculadora(cuenta, num1, num2){
	return cuenta(num1, num2);
}


calculadora(suma, 1, 3);

/* Callbacks Asíncronos */
var postId = "123187039";

obtenerLikes(postId, function(likes){
	alert("Se encontraron " + likes.lenght + " likes");
});


function obtenerLikes(postId, fn){
	setTimeout(function(){
		fn(['123132a34534519874639', '123a34534519864639', '123132a34534519874659'])
	}, 5000);
}

/* Eventos */

// Vanilla Javascript
var button = document.getElementById('myButton');

button.addEventListener('click', function(event){
	alert('Me hicieron Click');
});


// jQuery
$('#button').click(function(){
	alert('Me Hicieron Click');
});

$('#button').on('click', function(){
	alert('Me Hicieron Click');	
});

$('.product button.like').click(function(event) {
	$(this)
		.closest('.product')
		.addClass('liked');
});


/* Múltiples Eventos un solo Handler */
$('input').on('click change', function(event) {
	event.preventDefault();
	console.log("Me hicieron Click o me cambiaron el texto");
});

/* Múltiples Eventos un diferentes Handlers */
$('p').on({
	"click": function(){console.log("Me hicieron ckick");},
	"mouser": function(){console.log("Me pasaron el mouse por arriba");}
});


















