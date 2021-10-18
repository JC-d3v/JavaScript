// TIP: Template Strings ES6
let nombre = 'pepe';
let app = 'vasquez';
const ciudad = 'City1';
const year = 1999;

function edad(year) {
   return 2021 - year;
}

// ES5
console.log(nombre, app, 'nacio en la ciudad de', ciudad, 'y tiene ', edad(year), 'años');

// ES6
console.log(`${nombre} ${app} nacio en la ciudad de ${ciudad} y tiene ${edad(year)}`);
