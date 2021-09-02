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
