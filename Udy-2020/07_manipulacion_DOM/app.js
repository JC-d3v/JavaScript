//EXAMINANDO EL DOM
// console.dir(document);

console.log(document.title);
document.title = 'test01';
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.links);

//getElementById
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(header);
headerTitle.textContent = 'Hola';
headerTitle.innerText = 'adios';
headerTitle.innerHTML = '<h1>test</h1>';

// getElementsByClassName
var items = document.getElementsByClassName('list-group-item');
var itm = 3;
console.log(items[itm - 1]);
items[itm - 1].textContent = 'tester nro ' + itm;

// getElementsByTagName
var items2 = document.getElementsByTagName('li');
items2[0].textContent = 'testrer';

// Consulta por selectores
// Query selector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 6px #ccc';

var input = document.querySelector('input');
input.value = 'ingrese su texxto';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'enviar';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

// Query selectorAll

var items = document.querySelectorAll('.list-group-item');
items[2].style.color = 'green';

var titulos = document.querySelectorAll('.title');
titulos[0].textContent = 'Prueba de titulos';

var impar = document.querySelectorAll('li:nth-child(odd)');
var par = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < impar.length; i++) {
   impar[i].style.backgroundColor = '#ccc';
   par[i].style.backgroundColor = '#ddd';
}

// parent node
var itemlist = document.querySelector('#items');
// var itemlist = document.querySelector('.list-group-item');
console.log(itemlist.parentNode);
var main = itemlist.parentNode;
main.style.backgroundColor = '#ddd';
console.log(main.parentNode.parentNode);

// parent element
var itemlist = document.querySelector('#items');
// var itemlist = document.querySelector('.list-group-item');
console.log(itemlist.parentElement);
var main = itemlist.parentElement;
main.style.backgroundColor = '#ddd';
console.log(main.parentElement.parentElement);
