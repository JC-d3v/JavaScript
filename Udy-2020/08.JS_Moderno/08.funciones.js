// funcinoes flecha
const years = [2000, 2005, 2008, 2012];

//ES5
var edad5 = years.map(function (el) {
   return 2021 - el;
});
console.log(`edad ES5 : `, edad5);

//ES6
let edad6 = years.map((el) => 2021 - el);
console.log(`Edad ES6 : `, edad6);

edad6 = years.map((el, index) => `${index + 1}a edad , ${2021 - el}`);
console.log(`msg`, edad6);

edad6 = years.map((el, index) => {
   const yearActual = (actual = new Date().getFullYear());
   const edad = yearActual - el;
   return `${index + 1}a Edad  :${edad}`;
});

console.log(`edad`, edad6);

//ES5
function cuadrado1(num) {
   return num * num;
}
console.log(`cuadrado : `, cuadrado1(5));

//ES5
const cuadrado2 = function (num) {
   return num * num;
};
console.log(`cuadrado : `, cuadrado2(3));

//ES6
//funcion fecha

const cuadrado3 = (num) => num * num;
console.log(`cuadrado : `, cuadrado3(4));

const personas = [
   { nombre: 'pablo', edad: 20 },
   { nombre: 'hugo', edad: 25 },
   { nombre: 'paco', edad: 30 },
   { nombre: 'luis', edad: 35 },
];

const menores30 = personas.filter(function (persona) {
   return persona.edad < 30;
});
console.log(`msg`, menores30);

const menores306 = personas.filter((persona) => persona.edad < 35);
console.log(`msg`, menores306);
