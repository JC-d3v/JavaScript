// FIXME: REVISAR
// TIP: __.createElement('div'); crea un nuevo elelemto TagName
var nuevoDiv = document.createElement('div');

// TIP: __.className : añade el nombre de CLASS
nuevoDiv.className = 'hola';

// TIP: __.id : añade el nombre de ID
nuevoDiv.id = 'div-hola';

// TIP: __.setAttribute ('nom_atrib', 'attrib')
nuevoDiv.setAttribute('title', 'Hola mundo');
console.log(`nuevo elemento : `, nuevoDiv);

// TIP: __.createTextNode('Hola mundo'); Crea nuevo nodo de texto
var nuevoNodoText = document.createTextNode('Hola Mundo');

// TIP: __.appendChild(nuevoNodoText); : añade un nodo hijo
nuevoDiv.appendChild(nuevoNodoText);
console.log(`nuevo div con nodo texto`, nuevoDiv);

//para especificar la clase y su contenedor ('header .container')
var contenedor = document.querySelector('.container');
console.log(`contenedor : `, contenedor);

var h1 = document.querySelector('h1');
console.log(`h1 `, h1);

// TIP: __.insertBefore(nuevoDiv, h1); inserta en el contenedor nuestro nuevoDiv antes de H1
contenedor.insertBefore(nuevoDiv, h1);
