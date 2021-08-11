/**
 * the funtion wellcome returns a mesage
 * this is a sample of structure of a function
 *
 */
function wellcome() {
   return 'you are wellcome';
}
var mensaje = wellcome();
console.log(mensaje);

// Partes de una funcion
// paramentros (paramentros), codigo, salida (return)

function cuadradoNumero(num) {
   var resultado = num * num;
   return resultado;
   //console.log('tu nuemro es ', num);
}

var num = 5;
// cuadradoNumero(num);
console.log('el cuadrado de tu nro', num, ' es ', cuadradoNumero(num));

// Funcion para convertir grados farenheit a celcius
//  32F = 0C, 68F = 20c
//  C = (F-32) * 5/9

function farenheit2celcius(farenheit) {
   var celcius = ((farenheit - 32) * 5) / 9;
   return celcius;
}
var gradof = 132;

console.log('tus ', gradof, 'grados F son ', farenheit2celcius(gradof), 'C');

/**
 * calcula la edad de una persona
 */

function calcula_edad(year_t, year_b) {
   return year_t - year_b;
}

console.log(calcula_edad(2021, 1979));

function jubilacion(year_b) {
   var edad = calcula_edad(2021, year_b);
   return 65 - edad;
}

console.log(jubilacion(1979));

/**
 * Funciones como expresiones
 */

var prueba = function (name) {
   return 'Mensaje de prueba ' + name;
};

console.log(prueba('Jorge'));

var prueba = function (name) {
   return 'Mensaje de prueba ' + name;
};

// argumento indefinido
console.log(prueba());

// argumentos nulos
var a;
a = null;
console.log(a);

//Argumentos default
var sum = function (a = 5, b = 4, c = 3) {
   return a + b + c;
};
console.log(sum(10, null, 6));
console.log(sum(10, null, null));
console.log(sum(null, null, null));
console.log(sum());

// Plantilla de cadenas (Template strings)
var nombre = 'Jorge';
console.log(`El nombre es : ${nombre}`);

/**
 * ejercicio
 */
var calculaScore = function (nombre, pos, neg) {
   var scorePos = pos;
   var scoreNeg = neg;
   var score = '';

   if (scorePos > 90) {
      score = 'A';
   } else if (scorePos >= 70) {
      score = 'B';
   } else if (scorePos >= 45) {
      score = 'C';
   } else {
      score = 'D';
   }
   return `${nombre} tiene el SCORE ${score} en positivos ${scorePos}%y en negativos ${scoreNeg}%`;
};

console.log(calculaScore('Jorge', 62, 50));
