"use strict";
let heroe = "Batman";
function llamaHeroe(nomnbre, cuando) {
    return heroe + '/' + cuando + nomnbre;
}
console.log(llamaHeroe(heroe, "now"));
function nombreCompleto(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
;
console.log(nombreCompleto("Bruce"));
function nombreHeroe(nombre, add = "man") {
    return nombre + '-' + add;
}
;
console.log(nombreHeroe('aqua'));
function nomPropio(nom, capitalizado = true) {
    if (capitalizado) {
        return nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase();
    }
    else {
        return nom;
    }
}
;
console.log(nomPropio('ironman'));
function nomComp(nombre, ...resto) {
    return nombre + '+' + resto.join('/');
}
let superman = nomComp('Clark', 'Joseph', 'Kent');
let ironman = nomComp('Anthony', 'Edward', 'Stark', 'tercero');
console.log(superman);
console.log(ironman);
function saludar() {
    return "Hola ;-)";
}
let miFuncion;
miFuncion = saludar;
console.log(miFuncion("qw", "qw"));
miFuncion = llamaHeroe;
console.log(miFuncion('aqua', 'now'));
