// definicion de arrays
var fruits = ['Manzana', 'naranja', 'Limon', 'banana'];
var drinks = new Array('Coffee', 'Tea', 'Limonade', 'milk');
console.log(fruits[1]);
console.log(drinks[2]);

// operaciones con arreglos

for (i = 0; i <= drinks.length - 1; i++) {
   console.log(drinks[i]);
}

fruits.forEach(function (elemento, indice, array) {
   console.log(elemento, indice);
});
console.log(fruits);

fruits.push('mango');
console.log(fruits);

fruits.unshift('pera');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

var position = fruits.indexOf('Limon');
console.log(position);

fruits.splice(1, 2);
console.log(fruits);

//arreglos con diferentes tipos

var persona = ['nombre', 'App', 33, 408888, 5.6];
console.log(persona);

// creando objetos en forma literal

var perro = {
   nombre: 'Fernando',
   edad: 2.11,
   color: 'dorado',
   juguetes: ['sogas', 'pelotas', 'palos'],
};
console.log(perro);
console.log(perro.color);
console.log(perro['nombre']);

perro.nombre = 'Fernando Alonzo';
console.log(perro);

// Creando obejtos con la sintaxis object

var dog = new Object();
dog.nombre = 'fernando A';
dog.edad = '2 años';
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
console.log(perrito);
