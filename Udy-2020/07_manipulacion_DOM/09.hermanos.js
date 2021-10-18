// console.log('---Elementos y nodos hermanos ---');

// TIP: __.previousSibling;  : Nos devuleve el nodo hermano previo
var itemlist = document.querySelector('#items');
console.log(`__.previeousSibling : `, itemlist.previousSibling);

// TIP: __.previousElementSibling : Nos devuelve el elemento previo
console.log(`msg`, itemlist.previousElementSibling);
itemlist.previousElementSibling.textContent = 'Listado de ITEMS (sibling)';

// TIP: __.nextSibling; : nos devuelve el siguiente nodo hermano
console.log(`__.nextSibling : `, itemlist.nextSibling);

// TIP: __.nextElementSibling;  : Nos devuelve el siguiente elemento hermano
console.log(`__.nextElementSibling : `, itemlist.nextElementSibling);
