// definicion de arrays
console.log('--definicion de arrays--');
var fruits = ['Manzana', 'naranja', 'Limon', 'banana'];
var drinks = new Array('Coffee', 'Tea', 'Limonade', 'milk');

// operaciones con arreglos

console.log('--operaciones con arrays - recorrido--');
console.log(fruits[1]);
console.log(drinks[2]);

for (i = 0; i <= drinks.length - 1; i++) {
   console.log(drinks[i]);
}

fruits.forEach(function (elemento, indice, array) {
   console.log(elemento, indice);
});
console.log(fruits);

console.log('--insercion de elementos --');

fruits.push('mango');
console.log(fruits);

fruits.unshift('pera');
console.log(fruits);

console.log('--elimanacion de elementos --');

console.log(fruits.pop());
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);

console.log('--posicion de elementos en el array--');

// var position = fruits.indexOf('Limon');
// console.log(position);
console.log(fruits.indexOf('Limon'));

fruits.splice(1, 2);
console.log(fruits);

//arreglos con diferentes tipos
console.log('--array de diferentes tipos--');

var persona = ['nombre', 'App', 33, 408888, 5.6];
console.log(persona);

// creando objetos en forma literal
console.log('--creacion de objetos de forma literals - tipos--');

var perro = {
   nombre: 'Fernando',
   edad: 2.11,
   color: 'dorado',
   juguetes: ['sogas', 'pelotas', 'palos'],
};
console.log('--mostrando propiedades del objeto');
console.log(perro);
console.log(perro.color);
console.log(perro['nombre']);

console.log('--cambiando propiedades del objeto--');
perro.nombre = 'Fernando Alonzo';
console.log(perro);

// Creando obejtos con la sintaxis object

console.log('--creando objetos con OBJECT--');
var dog = new Object();
dog.name = 'fernando A';
dog.age = '2 años';
dog.color = 'doradito claro';

console.log(dog);

// objetos y metodos
var perrito = {
   //propiedades
   nombre: 'Fernandito',
   edad: 2.11,
   color: 'dorado',
   juguetes: ['sogas', 'pelotas', 'palos'],
   cantidad: 3,
   palabras: 'ns/nr',
   //metodos
   ladra: function () {
      this.palabras = this.cantidad + 'guau' + this.palabras;
   },
};
console.log(perrito);

perrito.ladra();
perrito.ladra();
perrito.ladra();

console.log(perrito);
