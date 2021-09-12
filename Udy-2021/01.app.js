/**
 * Variables
 */

// las variables se pueden definir con LET VAR CONST

//Inicio de variables
let coche;

//declaro variable
coche = 'opel';

//compruebo valor en consola
console.log(coche);

/**
 * Tipos de datos
 */

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

// numbers o numeros
const edad = 5;

//integer
console.log(edad);

//float
const temp = 23.5;
console.log(temp);
console.log(typeof temp);

//strings o cadenas de texto
const nombre = 'maria';
const str_num = '9';

console.log(str_num);
console.log(typeof str_num);

// boolean
const isMan = true;
const isWoman = false;

//undefined
let empleados;
console.log(empleados);

//null
let pais = null;
console.log(pais);

/**
 * Alcance de las variables
 */
console.log('--Alcance de las variables--');

// Contexto superGlobal = Tenemos acceso desde cualquier archivo

// Contexto global = tenemos acceso desde todo el archivo

// Contexto local = El que cuyo contexto esta dentro de la funcion

// Contexto de bloque = el que cuyo contexto esta dentro de un bloque
//definido con llaves como en bucles FOR o condicionales IF

// IMPORTANTE: la definicion de variables con VAR no respeta el contexto
//de bloque de un FOR o IF

// La palabra VAR  respeta el contexto local pero no el de bloque

// La palabra LET respeta el contexto local  y tambien el de bloque

// La palabra CONST respeta el contexto local  y tambien el de bloque

//contexto global
let velocidad_var = 8;

//contexto local
function saltar() {
   var perro_var = 'feranando';
}

//contexto de bloque
if (velocidad_var > 5) {
   const gato_var = 'Bruce';
}

// console.log(perro_var);

// console.log(gato_var);

console.log(velocidad_var);

/**
 * Concatenar
 */

// cocatenacion tradicional

let frase1 = 'Me gusta mucho pasear';
let frase2 = ', por la calle';

//concatenacion por consola
console.log(frase1 + frase2);

//concatenacion por pantalla
document.write(frase1 + frase2);

//************************************ */
let nombre_c = 'Antonio';
let persona;
let rubia = false;
let pelirroja = true;
let morena = true;
let castanya = false;

if (rubia) {
   persona = 'rubia';
} else if (pelirroja) {
   persona = 'pelirroja';
} else if (castanya) {
   persona = 'castaña';
}

let saludo = 'Hola ' + nombre_c + ' conoces a ' + persona;

console.log(saludo);

//manera moderna de concatenar
let saludo2 = `Hola ${nombre_c} me gusta mucho ir a pasear con ${persona}`;

console.log(saludo2);
