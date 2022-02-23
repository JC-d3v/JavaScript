// TIP: PARAMETROS OBLIGATORIOS
let heroe: string = "Batman";
function llamaHeroe(nomnbre: string, cuando: string): string {
    return heroe + '/' + cuando + nomnbre;
}

console.log(llamaHeroe(heroe, "now"));

// TIP: PARAMETROS OPCIONALES "___?"
function nombreCompleto(nombre: string, apellido?: string): string {
    if (apellido) {
        return nombre + ' ' + apellido
    } else {
        return nombre;
    }
};

console.log(nombreCompleto("Bruce"));

// TIP: PARAMETROS POR DEFECTO "____ = 'man' "
function nombreHeroe(nombre: string, add: string = "man"): string {
    return nombre + '-' + add;
};

console.log(nombreHeroe('aqua'));

function nomPropio(nom: string, capitalizado: boolean = true): string {
    if (capitalizado) {
        return nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase();
    } else {
        return nom;
    }
};
console.log(nomPropio('ironman'));

// TIP: PARAMETROS REST
function nomComp(nombre: string, ...resto: string[]): string {
    return nombre + '+' + resto.join('/');
}
let superman: string = nomComp('Clark', 'Joseph', 'Kent');
let ironman: string = nomComp('Anthony', 'Edward', 'Stark', 'tercero');
console.log(superman);
console.log(ironman);

// TIP: TIPO FUNCION 
function saludar(): string {
    return "Hola ;-)";
}
let miFuncion: (x: string, y: string) => string;
miFuncion = saludar;
console.log(miFuncion("qw", "qw"));
miFuncion = llamaHeroe;
console.log(miFuncion('aqua', 'now'));


