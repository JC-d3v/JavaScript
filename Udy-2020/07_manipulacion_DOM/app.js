//EXAMINANDO EL DOM
// console.dir(document);

// console.log(document.title);
// document.title = 'test01';
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);

//getElementById
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(header);
// headerTitle.textContent = 'Hola';
// headerTitle.innerText = 'adios';
// headerTitle.innerHTML = '<h1>test</h1>';

// getElementsByClassName
// var items = document.getElementsByClassName('list-group-item');
// var itm = 3;
// console.log(items[itm - 1]);
// items[itm - 1].textContent = 'tester nro ' + itm;

// getElementsByTagName
// var items2 = document.getElementsByTagName('li');
// items2[0].textContent = 'testrer';

// Consulta por selectores
// Query selector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 6px #ccc';

// var input = document.querySelector('input');
// input.value = 'ingrese su texxto';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'enviar';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// Query selectorAll

// var items = document.querySelectorAll('.list-group-item');
// items[2].style.color = 'green';

// var titulos = document.querySelectorAll('.title');
// titulos[0].textContent = 'Prueba de titulos';

// var impar = document.querySelectorAll('li:nth-child(odd)');
// var par = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < impar.length; i++) {
// impar[i].style.backgroundColor = '#ccc';
// par[i].style.backgroundColor = '#ddd';
// }

// parent node
// var itemlist = document.querySelector('#items');
//aletrnativa
// var itemlist = document.querySelector('.list-group-item');
// console.log(itemlist.parentNode);
// var main = itemlist.parentNode;
// main.style.backgroundColor = '#ddd';
// console.log(main.parentNode.parentNode);

// parent element
// var itemlist = document.querySelector('#items');
//alternativa
// var itemlist = document.querySelector('.list-group-item');
// console.log(itemlist.parentElement);
// var main = itemlist.parentElement;
// main.style.backgroundColor = '#ddd';
// console.log(main.parentElement.parentElement);

//childNodes
// console.log('ChildNodes');
// var itemlist = document.querySelector('#items');
// console.log(itemlist.childNodes);

// Children
// console.log(itemlist.children);

//firstChild/firstElementChild
// console.log('first Nodes');
// console.log(itemlist.firstChild);
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Primer item';

//lastChild/lastElementChild
// console.log('last child---');
// console.log(itemlist.lastChild);
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Ultimo item';

// console.log('---Elementos y nodos hermanos ---');

//previousSibling
// var itemlist = document.querySelector('#items');
// console.log(itemlist.previousSibling);

//previousElementSibling
// console.log(itemlist.previousElementSibling);

//nextSibling
// console.log(itemlist.nextSibling);

//nextElementSibling
// console.log(itemlist.nextElementSibling);

// createElement
// tagName

// var nuevoDiv = document.createElement('div');
// nuevoDiv.className = 'hola';
// nuevoDiv.id = 'div-hola';
// nuevoDiv.setAttribute('title', 'Hola nuevo mundo');
// console.log(nuevoDiv);

//createTextNode
// var nuevoNodoText = document.createTextNode('Hola viejo mundo');
// nuevoDiv.appendChild(nuevoNodoText);
// console.log(nuevoDiv);

// var contenedor = document.querySelector('header .container');
// console.log(contenedor);

// var h1 = document.querySelector('h1');
// console.log(h1);

// contenedor.insertBefore(nuevoDiv, h1);

// eventos
// aternativa uno

// document.getElementById('boton').addEventListener('click', function hacerclick() {
//    console.log('usted hizo click');
// });

// document.getElementById('boton').addEventListener('click', hacerclick);
// var a = 1;
// function hacerclick() {
//    console.log('usted hizo click');
//    document.getElementById('header-title').textContent = 'Texto cambiado' + a + 'veces';
//    a++;
// }

// cambiar el diseño de nuestro sitio

// agregar elementos a la lista
var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
// var newItem = document.getElementById('item').value;

form.addEventListener('submit', agregarItem);

function agregarItem(e) {
   e.preventDefault();
   var newItem = document.getElementById('item').value;

   var li = document.createElement('li');
   li.className = 'list-group-item';
   li.appendChild(document.createTextNode(newItem));

   var botonDel = document.createElement('button');
   botonDel.className = 'btn btn-danger btn-sm float-right';
   botonDel.appendChild(document.createTextNode('Y'));

   li.appendChild(botonDel);
   lista.appendChild(li);
   console.log(li);
}
