// TIP: "..."   : spread operator
let suma = function (a, b, c, d) {
   return a + b + c + d;
};

var ope1 = suma(10, 20, 30, 40);
console.log(`msg`, ope1);

var numeros = [10, 11, 12, 13, 14, 15, 16];
const ope2 = suma(...numeros);

console.log(`msg`, ope2);

// TIP: unir arrays
const male = ['hugo', 'paco', 'lus'];
const female = ['ana', 'maria', 'lorena'];
const rrhh = [...male, ...female];
console.log(`msg`, rrhh);
