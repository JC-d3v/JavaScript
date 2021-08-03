/*
** ejemplode sentencias 
** Sentencia if else
** Sintaxis
if (condición) sentencia1 [else sentencia2]
** 
*/

var nombre, estadoCivil, registrado;
nombre = 'jorge';
estadoCivil = 'Soltero';
registrado = false;

if (registrado) {
   // salida verdadera
   console.log(nombre + ' es una persona registrada ;-)');
} else {
   //salida falso
   console.log(nombre + ' no esta registrado .-(');
}

/****
 * sentencias condicionales
 * and or not
 */
var edad, nombre;
edad = 116;
nombre = 'jorge';
if (edad <= 12) {
   console.log(nombre + ' es un niño');
} else if (edad <= 16) {
   console.log(nombre + ' es un adolescente');
} else console.log(nombre + ' es un adulto');

// AND
if (edad > 12 && edad < 18) {
   console.log(nombre + ' es un adolescente');
} else console.log(nombre + ' NO es un adolescente');

// Operador ternario
edad >= 18 ? console.log(nombre + ' es un mayor') : console.log(nombre + ' es menor');

// sentencia switch
var mes;
mes = 2;
switch (mes) {
   case 1:
      console.log('enero');
      break;
   case 2:
      console.log('febrero');
      break;
   case 3:
      console.log('marzo');
      break;
   case 4:
      console.log('abril');
      break;
   default:
      console.log('mes no considerado');
}

// sentencia FOR
var i;
for (i = 1; i <= 10; i++) {
   console.log('for ' + i);
}

// Sentencia While

var i = 1;
while (i <= 10) {
   console.log('while' + i);
   i += 2;
}

// sentencia DO WHILE
var i;
i = 1;
do {
   console.log('while' + i);
   i += 2;
} while (i <= 10);

/** VAlores FALSOS Y VERDADEROS
 * SON FALSOS SI: undefined, null, 0, ''
 * SON VERDADEROS SI: NOT valores falsos
 */

var valor123;
// valor123=null;
// valor=0;
// valor='';
if (valor123) {
   console.log('VERDADERO');
} else {
   console.log('FALSO');
}

/** Iguales y estrictamente iguales
 * doble signo de igualdad == iguales
 * triple signo de igualdad === estrictamente iguales
 */

var a, b;
a = 2;
b = '2';
if (a == b) console.log('son Iguales');
else console.log('no son iguales');

if (a === b) console.log('son estrictamente Iguales');
else console.log('no son estrictamenbte iguales');

// MATRIZ
var notas, promedio;

notas = [51, 51, 51];
promedio = notas[1];

/*
 *
 * Tenemos dos alumnos Pablo y Maria
 * cada uno de ellos tiene sus calificaciones
 *
 * calccular el promedio de cada alumno
 * indicar como aprobado si supera 60pts
 *
 */

var promedioPablo = (70 + 80 + 60) / 3;
var promedioMaria = (7 + 80 + 60) / 3;

if (promedioPablo > promedioMaria) {
   console.log('El promedio de pablo es mayor');
} else if (promedioPablo < promedioMaria) {
   console.log('El promedio de maria es mayor');
} else {
   console.log('los promedios son iguales');
}

if (promedioPablo > 51) {
   console.log('pablo aprobo');
} else {
   console.log('Pablo no aprobo');
}

if (promedioMaria > 51) {
   console.log('maria aprobo');
} else {
   console.log('maria no aprobo');
}
