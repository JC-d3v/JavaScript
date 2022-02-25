"use strict";
class Heroe {
    constructor(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        console.log(`cosntructor Heroe`);
    }
    getNombre() {
        console.log(`get nombre Protegido`);
        return this.nombre;
    }
}
class Xmen extends Heroe {
    constructor(a, b) {
        super(a, b);
        console.log(`cosntructor Xmen`);
    }
    getName() {
        console.log(`get Name publico`);
        return super.getNombre();
    }
}
let wolverine = new Xmen('Wolverine', 'Logan');
console.log(wolverine);
console.log(wolverine.getName());
