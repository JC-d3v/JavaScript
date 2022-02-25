"use strict";
let flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ['correr muy rapido', 'Viajar en el tiempo']
};
flash = {
    nombre: 'Clark Kent',
    edad: 500,
    poderes: ['volar']
};
let dcHeroes = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ['correr muy rapido', 'Viajar en el tiempo']
};
let marvelHeroe = {
    nombre: "Bruce",
    edad: 40,
    poderes: ['inteligencia'],
    getNombre() {
        return this.nombre;
    }
};
console.log(marvelHeroe.getNombre());
let heroes = {
    nombre: 'Dr. Manhatan',
    edad: 150,
    poderes: ['God'],
    getNombre() {
        return this.nombre;
    }
};
let loquesea;
loquesea = 'text';
loquesea = 10;
let cosa = 1.123;
console.log(typeof cosa);
