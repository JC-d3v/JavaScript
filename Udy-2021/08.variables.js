/**
 * Variables
 */

// las variables se pueden definir con LET VAR CONST

// TIP: Inicio de variables
let coche;

// TIP: declaro variable
coche = 'opel';

// TIP: compruebo valor en consola
console.log(coche);

// TIP: Tipos de datos

// tenemos los objetos y primitivos

// dentro de los objetos

// TIP: objeto

const mascota = {
   nombre: 'Fernando',
   edad: 2,
   raza: 'Golden',
};

// TIP: array o lista

const listaCompra = ['manzanas', 'Peras', 'naranjas'];

const oficios = ['ing', 'adm', 'cont'];

console.log(oficios);

console.log(typeof oficios);

// tipos de datos primitivos

// TIP: numbers o numeros
const edad = 5;

// TIP: integer
console.log(edad);

// TIP: float
const temp = 23.5;
console.log(temp);
console.log(typeof temp);

// TIP: strings o cadenas de texto
const nombre = 'maria';
const str_num = '9';

console.log(str_num);
console.log(typeof str_num);

// TIP: boolean
const isMan = true;
const isWoman = false;

// TIP: undefined
let empleados;
console.log(empleados);

// TIP: null
let pais = null;
console.log(pais);

// TIP: // FIXME:  Ambito de las variables
// Alcance de las variables
//
console.log('--Alcance de las variables--');

// Ambito superGlobal = Tenemos acceso desde cualquier archivo

// Ambito global = tenemos acceso desde todo el archivo

var perrito = 'Fernando';
console.log(`var Global: ${perrito}`);

let pez = 'tiburon';
console.log(`let Global: ${pez}`);

// Ambito local = El que cuyo contexto esta dentro de la funcion
//var respeta el ambito local - no puedo casar al gato de la funcion

function saltar() {
   var gato = 'Bruce';
}
// console.log(`var Local: ${gato}`);

// Ambito de bloque = el que cuyo contexto esta dentro de un bloque
// definido con llaves como en bucles FOR o condicionales IF
// VAR no respeta el bloque - el appelido sale del bloque
let nombre2 = 'maria';
if (nombre2 === 'maria') {
   var apellido = 'Gonzales';
   let mascota2 = 'gatillo';
}

console.log(`var bloque: ${apellido}`);
//console.log(`let bloque: ${mascota2}`);

// IMPORTANTE: la definicion de variables con VAR no respeta el contexto
//de bloque de un FOR o IF

// La palabra VAR  respeta el contexto local pero no el de bloque

// La palabra LET respeta el contexto local  y tambien el de bloque

// La palabra CONST respeta el contexto local  y tambien el de bloque

//contexto global
let velocidad_var = 8;

//contexto local

//contexto de bloque
if (velocidad_var > 5) {
   const gato_var = 'Bruce';
}

// console.log(perro_var);

// console.log(gato_var);

console.log(velocidad_var);
