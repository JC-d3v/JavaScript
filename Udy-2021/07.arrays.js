/**
 * ARRAYS
 */

const frutas = ['platano', 'manzana', 'pera', 'piña', 'uva', 'platano', 'sandia'];

const numeros = [10, 15, 17, 19];

const colores = ['rojo', 'azul', 'amarillo'];

const varios = [true, { color: 'rojo' }, false, 98, -34, 'hola que tal'];
// console.log(varios);

const verduras = ['lechuga', 'pepinillo', 'tomate', 'alcaparras'];
//data
const persona = {
   nombre: 'jorge',
   edad: 42,
   estado: { soltero: true, casado: false },
};

// console.log(persona);

const empresa = [
   { id: 0, nombre: 'hugo', edad: 10 },
   { id: 1, nombre: 'paco', edad: 11 },
   { id: 2, nombre: 'luis', edad: 12 },
];

// console.log(empresa);

/**
 * Metodos de los ARRAYS
 */

console.log(frutas);
console.log(numeros);

// TIP: CONCAT: nos une arrays o añade varios
// añade el elemento LIMON
console.log(frutas.concat('limon'));

// TIP: EVERY: recorre todos los varios del array y verifica si cumplen la condicion
// devuelve TRUE / FALSE
const test = (elemento) => elemento < 20;
console.log('EVERY: ' + numeros.every(test));

// TIP: SOME: recorre todos los elementos del array y verifica si alguno cumple la condicion
// devuelve TRUE / FALSE
const test2 = (elemento) => elemento < 1;
console.log('SOME: ' + numeros.some(test));

// TIP: FILTER: Crea un nuevo array con los registros que cumplen la condicion
const test3 = (elemento) => elemento < 16;
console.log('FILTER: ' + numeros.filter(test3));

// TIP: FIND: retorna el valor del primer array que cumple la condicion
// si no existe ninguno devuelve UNDEFINED
const test4 = (elemento) => elemento > 16;
console.log('FIND: ' + numeros.find(test4));

// TIP: FINDINDEX: retorna el INDEICE del primer valor del array que cumple la condicion
// si no existe ninguno devuelve UNDEFINED
console.log('FINDINDEX: ' + numeros.findIndex(test4));

// TIP: FOREACH: recorre cada uno de los elementos del array y realiza una accion
frutas.forEach((element) => console.log('Helado de: ' + element));

// TIP: INCLUDES: determina si en el array se incluye un elemento determinado
// devuleve TRUE / FALSE
console.log('includes: ' + frutas.includes('pera'));

// TIP: INDEXOF: Retorna el primer numero de indice del primer elemenmto encontrado
// devuelve -1 si no encuentra ninguno
console.log('indexOf: ' + frutas.indexOf('piña'));

// TIP: JOIN: Crea una cadena con todos los elementos del array separados por un delimitador
console.log('join: ' + frutas.join('/'));

// TIP: LASTINDEXOF: Retorna el ultimo numero de indice del ultimo elemenmto encontrado
// devuelve -1 si no encuentra ninguno
console.log('indexOf: ' + frutas.lastIndexOf('platano'));

// TIP: LENGTH: Nos indica la cantidad de elementos en nuestro array
console.log('Length: ' + frutas.length);

// TIP: MAP: Crea un nuevo array poblado con los resultados de una
//funcion aplicada a cada elemento del array
console.log(numeros);
const map1 = numeros.map((x) => x + 2);
console.log(map1);

// TIP: PUSH: Agrega un elemento al final de la lista.
// y nos devuelve la cantidad actual de elementos
console.log('PUSH: ' + numeros.push('100'));
console.log('Despues PUSH ' + numeros);

// TIP: POP: Devuelve el ultimo elemento del array y lo
//Elimina del mismo
console.log('Antes POP ' + numeros);
console.log('POP: ' + numeros.pop());
console.log('Despues POP ' + numeros);

// TIP: UNSHIFT: Agrega elementos al principio del array y devuelve la longitud del array
console.log('UNSHIFT: ' + colores.unshift('verde', 'gris'));
console.log(colores);

// TIP: SHIFT: Remueve el primer elemento de un array y retorna el elmento removido
console.log('SHIFT: ' + colores.shift());
console.log(colores);

// FIXME: REDUCE
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// TIP: REVERSE: Invierte el orden de los elementos del array
console.log('Antes REVERSE: ' + frutas);
console.log('Despues REVERSE: ' + frutas.reverse());

// TIP: SLICE: devuleve como resultado un array con los elementos
// deonde el indice INICIAL y [FINAL NO INCLUIDO] INICIAL y FINAL son indices
console.log(frutas.slice(2));
console.log(frutas.slice(2, 5));

// TIP: SORT: Nos ordena el array alfabeticamente de manera escendente
console.log('SORT: ' + frutas.sort());

// TIP: SPLICE:
const months = ['Jan', 'March', 'April', 'MES', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log('SPLICE: insert ::' + months);

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log('SPLICE: replace ::' + months);

months.splice(2, 1);
// quita en el indice 2 un elemento
console.log('SPLICE: Quita ::' + months);
