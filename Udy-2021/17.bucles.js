// TIP:while : mientras se cumpla una condicion, hacer algo
//while (condition) {
//      }
let timer = 0;

console.log('while : ');
while (timer <= 5) {
   console.log('timer +: ', timer);
   timer++;
}

// TIP: do-while : hacer algo, mientras se cumple una condicion
//  do { sentencias
//     } while (condition);

console.log('Do While : ');
do {
   console.log('timer -:', timer);
   timer--;
} while (timer >= 0);

// TIP: for: ciclo for
//  for (let index = 0; index < array.length; index++) {
//      sentencias }
console.log('ciclo FOR');
for (let index = 0; index < 5; index++) {
   console.log('for :', index);
}

// TIP: FOR-OF: recoorre cada elemento de un array u objeto, elemento recibe el elemento
//  for (const elemento of array) {
//       sentencia; }
console.log('ciclo FOR OF : ');
const cadena = 'jorge';
for (const elemento of cadena) {
   console.log('eslabon :', elemento, cadena);
}

// TIP: FOR-IN: recorre cada elemento del una array u objeto, elemento recibe el INDEX
//  for (const elemento in array-objeto) {
//       sentencia; }
console.log('ciclo FOR IN');
for (const elemento in cadena) {
   console.log('index', elemento, cadena);
}

console.log('objetos for in');
const object = {
   nomobre: 'fernando',
   raza: 'golden',
   edad: 3,
   propietario: 'jorge',
   aficciones: ['saltar', 'jugar', 'pasear'],
};
for (const key in object) {
   console.log(`key: ${key} , value:${object[key]}`);
}
