// TIP: operadores de comparacion
console.log(`--Operadores de comparacion--`);
//1.-  > mayor que
console.log(`6>"5"   : `, 5 > '5');
//2.-  < menor que
console.log(`6<"5"   : `, 6 < '5');
//3.-  >= mayor o igual que
console.log(`5>=4"   : `, 5 >= 4);
//4.-  <= menor o igual que
console.log(`5<=5    : `, 5 <= 5);
//5.-  == igual que
console.log(`5=="5"  : `, 5 == '5');
//6.-  === Estrictamente igual que (igual valor y tipo de dato)
console.log(`5==="5" : `, 5 === '5');
//7.-  != diferente que
console.log(`5!="5"  : `, 5 != '5');
//8.-  !== estrictamente diferente que (distinto valor y tipo de dato)
console.log(`5!=="5" : `, 5 !== '5');

// TIP: Operadores Aritmeticos
console.log(`--operadores aritmeticos--`);
console.log(`suma 5 + 8            : `, 5 + 8);
console.log(`resta 5 - 8           : `, 5 - 8);
console.log(`multiplicacion 5 * 8  : `, 5 * 8);
console.log(`division 5 / 8        : `, 5 / 8);
console.log(`residuo mod 5 % 2     : `, 5 % 2);

// TIP: Operadores Logicos
console.log(`--Operadores Logicos---`);
// ! operador de negacion
// && operador AND
// || operador OR

if (2 > 3 || 1 == 1) {
   console.log(`SI`);
} else {
   console.log(`NO`);
}
