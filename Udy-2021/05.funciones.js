/**
 * Funciones
 */

// Funciones declaradas

// funciones expresadas

// funciones autoejecutables

// funciones flecha

// TIP: FUNCIONES DECLARADAS
// hoisting permite la elevacion de las variables
// permite ejecutar la funcion antes de su declaracion
saludo('juan', 'perez', 'soliz');

function saludo(nombre, app, apm) {
   console.log(`Hola ${nombre} ${app} ${apm} primer mundo`);
}

// TIP: FUNCIONES EXPRESADAS
// No ocurre el efecto de elevacion de hoisting
// No se puede tener acceso a la funcion antes de la declaracion
const saludo2 = function (nombre, app, apm) {
   console.log(`dos Hola ${nombre} ${app} ${apm} primer mundo`);
};
saludo2('juan', 'perez', 'soliz');

// TIP: Funciones de FLECHA  (base)
const suma = (num1, num2) => {
   console.log(num1 + num2);
};
suma(5, 3);

// TIP: Funciones de FLECHA (mejorada)
const suma2 = (num1, num2) => console.log(num1 + num2);
suma2(4, 6);

// Funciones anonimas AUTOEJECUTABLES Y AUTOEJECUTABLES
// TIP: funcion clasica autoejecutables
const saludo3 = (function () {
   console.log('saludos 3 HOLAAAAA');
})();

// TIP: funcion moderna autoejecutable
const saludo4 = (() => {
   console.log('saludos 4 HOLAAAAA');
})();

// TIP: funcion clasica anonima autoejecutable
(function () {
   console.log('saludos 5');
})();

// TIP: funcion moderna anonima autoejecutable
(() => {
   console.log('saludos 6');
})();
