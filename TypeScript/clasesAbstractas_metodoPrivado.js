"use strict";
class Mutantes {
    constructor(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
}
class Xmen extends Mutantes {
}
let wolverine = new Xmen("Wolverine", "Logan");
console.log(wolverine);
class Apocalipsis {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static llamarApocalipsis() {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis('nombre Apocalipsis');
        }
        return Apocalipsis.instancia;
    }
}
let apocalipsisReal = Apocalipsis.llamarApocalipsis();
console.log(apocalipsisReal);
