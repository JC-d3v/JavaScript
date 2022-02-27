"use strict";
class Heroe {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        console.log(`pasams por get nombre`);
        if (this._nombre) {
            return this._nombre;
        }
        else {
            return 'no hay nombre';
        }
    }
    set nombre(nombre) {
        console.log(`pasamos por set nombre`);
        if (nombre.length <= 3) {
            return;
        }
        this._nombre = nombre;
    }
}
let storm = new Heroe('stormy');
console.log(storm.nombre);
storm.nombre = 'lee';
console.log(storm.nombre);
