// TIP: PARAMETROS OBLIGATORIOS
var heroe = "Batman";
function llamaHeroe(nomnbre, cuando) {
    return heroe + '/' + cuando + nomnbre;
}
console.log(llamaHeroe(heroe, "now"));
// TIP: PARAMETROS OPCIONALES "___?"
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
// TIP: PARAMETROS POR DEFECTO "____ = 'man' "
function nombreHeroe(nombre, add) {
    if (add === void 0) { add = "man"; }
    return nombre + '-' + add;
}
;
console.log(nombreHeroe('aqua'));
function nomPropio(nom, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase();
    }
    else {
        return nom;
    }
}
;
console.log(nomPropio('ironman'));
// TIP: PARAMETROS REST
function nomComp(nombre) {
    var resto = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        resto[_i - 1] = arguments[_i];
    }
    return nombre + '+' + resto.join('/');
}
var superman = nomComp('Clark', 'Joseph', 'Kent');
var ironman = nomComp('Anthony', 'Edward', 'Stark', 'tercero');
console.log(superman);
console.log(ironman);
// TIP: TIPO FUNCION 
function saludar() {
    return "Hola ;-)";
}
var miFuncion;
miFuncion = saludar;
console.log(miFuncion("qw", "qw"));
miFuncion = llamaHeroe;
console.log(miFuncion('aqua', 'now'));
