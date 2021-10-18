// TIP: __.childNodes : nos devuelve los nodos hijo de un elemento.
var itemlistNode = document.querySelector('#items');
console.log(`itemlistNode.childNodes : `, itemlistNode.childNodes);

// TIP: __.children : nos devuelve los elementos hijo en un array de un elemento
var itemListChilden = document.querySelector('#items');
console.log(`itemListChildren : `, itemListChilden.children);

// TIP: __.firstChild); primer nodo
//
var first = document.querySelector('#items');
console.log(`primer nodo : __.firstChild; : `, first.firstChild);

// TIP: __.firstElementChild); primer elemento
console.log(`primer elemento : __.firstChild; : `, first.firstElementChild);
first.firstElementChild.textContent = 'primer';

// TIP: __.lastChild  ; last node
var last = document.querySelector('#items');
console.log(`ultimo nodo : __.lastChild : `, last.lastChild);

// TIP: __.lastElementChild ; last element child
console.log(`__.lastElementChild : `, last.lastElementChild);
last.lastElementChild.textContent = 'ultimo';
