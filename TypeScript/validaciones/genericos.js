"use strict";
function regresar(arg) {
    return arg;
}
function regresar2(arg) {
    return arg;
}
console.log(regresar2(123.12345));
console.log(regresar(123.12345).toFixed(2));
console.log(regresar('test').toUpperCase());
function funcionGenerica(arg) {
    return arg;
}
let deadPool = {
    nombre: "DeadPool",
    poder: "Regeneracion"
};
console.log(funcionGenerica(deadPool));
let arregloGenerico = ['Flash', 'Batman', 'Aquaman'];
arregloGenerico.push('123');
let arregloNormal = ['Lex', 'Joker'];
class Cuadrado {
    area() {
        return +this.base * +this.altura;
    }
}
let forma = new Cuadrado();
forma.base = '10';
forma.altura = 10;
console.log(forma.area());
