// TIP: this, llamamda a si mismo en las propiedades.

let trabajador1 = {
   nombre: 'John',
   ciudad: 'scz',
   sueldo: 1000,
   trabajar: function () {
      return `trabaj traba trabajo1`;
   },
   viajar: function (city) {
      this.ciudad = city;
   },
};

console.log(`msg`, trabajador1.viajar('tja'));
console.log(`msg`, trabajador1);

// TIP: String class
let nombre = '   jane smith    ';
let clave = '123456pass';
console.log(`msg`, nombre.length);
console.log(`msg`, nombre.toLowerCase());
console.log(`msg`, nombre.toUpperCase());
console.log(`msg`, nombre.trim());
console.log(`msg`, nombre.trim());

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
