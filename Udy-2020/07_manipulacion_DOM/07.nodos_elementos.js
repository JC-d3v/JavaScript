// TIP: __.parentNode; selecciona el nodo padre de algun elemento
// seleccionamnos el id #items
var items = document.querySelector('.list-group-item');
console.log(`__.parentNode de ITEMS nodo : `, items.parentNode);
var padre = items.parentNode;
console.log(`msg`, padre);
padre.style.color = 'blue';

// TIP: __.parentElement; nos selecciona el elemento padre
// parent element
var itemlist = document.querySelector('#items');
console.log(`itemlist.parentElement; `, itemlist.parentElement);
var main = itemlist.parentElement;
main.style.backgroundColor = '#ddd';
console.log(`elemento padre del padre de main: `, main.parentElement.parentElement);
