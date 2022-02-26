// TIP: GENERIC T (funciones genericas) 
function regresar<T>(arg: T) {
  return arg
}

function regresar2(arg: any) {
  return arg
}
console.log(regresar2(123.12345));
console.log(regresar(123.12345).toFixed(2));
console.log(regresar('test').toUpperCase());

function funcionGenerica<T>(arg: T) {
  return arg;
}

type HeroeT = {
  nombreH: string;
  poderH: string
}

type VillanoT = {
  nombreV: string;
  poderV: string;
}

let deadPool = {
  nombre: "DeadPool",
  poder: "Regeneracion"
}

console.log(funcionGenerica<VillanoT>(deadPool));

// TIP: ARREGLOS GENERICOS
let arregloGenerico: Array<String> = ['Flash', 'Batman', 'Aquaman'];
arregloGenerico.push('123');

let arregloNormal: string[] = ['Lex', 'Joker'];

// TIP: CLASES GENERICAS
class Cuadrado<T extends number | string>{
  base: T;
  altura: T;
  area(): number {
    // TIP: casteo de base y altura como numeros
    return +this.base * +this.altura;
  }
}

let forma = new Cuadrado<number | string>();

forma.base = '10';
forma.altura = 10;
console.log(forma.area());