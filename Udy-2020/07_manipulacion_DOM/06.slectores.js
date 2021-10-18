// TIP: __.querySelector()  : permite seleccionar EL PRIMER ELEMENTO
// a travez del ID
var header = document.querySelector('#main-header');
header.style.borderBottom = 'dotted 6px #ccc';

// a traves del TAG
var input = document.querySelector('input');
input.value = 'ingrese su texxto';

// a traves del tag de manera mas especifica
var submit = document.querySelector('input[type="submit"]');
submit.value = 'enviar urgente ';

// a traves del CLASS
//recordar que aplica al primero de los elementos
var item = document.querySelector('.list-group-item');
item.style.color = 'red';

// TIP: __.querySelectorAll()  : selecciona todos los elementos en un array
// a taves del CLASS
var items = document.querySelectorAll('.list-group-item');
items[2].style.color = 'green';

var titulos = document.querySelectorAll('.title');
titulos[0].textContent = 'Prueba de titulos querySelectorAll';
console.log(`querySelectorAll : `, titulos);

//recorrer todo el array coloreando filas
var impar = document.querySelectorAll('li:nth-child(odd)');
var par = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i < impar.length; i++) {
   impar[i].style.backgroundColor = '#ccc';
   par[i].style.backgroundColor = '#ddd';
}
