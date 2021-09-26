// acceso al documento
console.log(`msg`, document.body);

let caja = document.createElement('div');
let caja2 = document.createElement('div');
let caja3 = document.createElement('div');

// dar estilos a nuestra caja
caja.style.width = '100px';
caja.style.height = '100px';
caja.style.backgroundColor = 'green';
caja.style.borderRadius = '9px';

//renderizadoo de elementos
document.body.appendChild(caja);

// TIP: diferencias entre append appendChild
//1.-appendChild NO permite renderizar mas de un elemento.
//2.-Append SI permite renderizar dos o mas ELEMENTOS
document.body.append(caja2, caja3);

//3.-appendChild NO permite renderizar cadenas
//4.-append Si permite varios elementos

caja2.style.width = '100px';
caja2.style.height = '100px';
caja2.style.backgroundColor = 'red';
caja2.style.borderRadius = '9px';

caja3.style.width = '100px';
caja3.style.height = '100px';
caja3.style.backgroundColor = 'blue';
caja3.style.borderRadius = '9px';

//nos dice la codificacion de caracteres
console.log(`codificacion:`, document.characterSet);

// Cuantos hijos tiene el elemento
console.log(`hijos del elemento:`, document.childElementCount);

// nodos hijos del elemento
console.log(`nodos hijos del elemento:`, document.childNodes);

//para devovernos los hijos que tiene
console.log(`hijos del documento:`, document.children);

//clonar el documento
//true clona tambien el contenido, caso contrario false
let clon = document.body.cloneNode(true);
console.log(`clon:`, clon);

// saber tipo de contenido
console.log(`tipo de contenido:`, document.contentType);

//seleccionando elementos
// ID  #sub1
// CLASS  .par
// TAG body
let subtitulo1 = document.querySelector('#sub1');
const enlaces = [...document.querySelectorAll('h2')];
let elemento1 = document.querySelector('#sub4');
let elemento2 = document.getElementById('sub3');
let elemento3 = document.getElementsByClassName('par');
let elemento4 = document.getElementsByTagName('h2');

//creamos atributos
subtitulo1.setAttribute('class', 'tituloClase');

//aplicamos atributos
// subtitulo1.style.color = 'green';
elemento1.textContent = 'test de cambio';
// elemento2.style.color = 'blue';
// elemento3.style.color = 'yellow';
// elemento4.style.color = 'yellow';
enlaces.map((enlace) => {
   enlaces.style.color = 'pink';
   enlaces.style.backgroundColor = 'yellow';
});

// Creando un fragment
// crea un fragmento de documento donde se adiciona los nodos para luego añadirlos al DOM
let contariner = document.createDocumentFragment();
document.appendChild(contariner);

// Creando un nodo de texto
const txtNode = document.createTextNode('soy un nodo de texto');
document.body.appendChild(txtNode);

// querySelectorAll

let enlaces = document.querySelector();
