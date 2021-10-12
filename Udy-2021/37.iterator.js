let numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

let iterator = numbers[Symbol.iterator]();

// proporciona dos valores el INDICE y _DONE
// DONE = false si la lista no ha terminado true si ha terfinado

console.log(`numeros : `, iterator.next());
console.log(`numeros : `, iterator.next());
console.log(`numeros : `, iterator.next());
console.log(`numeros : `, iterator.next());
console.log(`numeros : `, iterator.next());
console.log(`numeros : `, iterator.next());
console.log(`numeros : `, iterator.next());
console.log(`numeros : `, iterator.next());
console.log(`numeros : `, iterator.next());
console.log(`numeros : `, iterator.next());
