"use strict";
class Avenger {
    constructor(nombre, equipo, nombreReal) {
        this.nombre = 'Antman';
        this.equipo = '';
        this.nombreReal = 'Scott Lang';
        this.puedePelear = true;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    bio() {
        let mensaje = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
        console.log(mensaje);
    }
    listoPelea() {
        this.puedePelear = !this.puedePelear;
    }
    listoPelea2() {
        this.puedePelear = !this.puedePelear;
    }
}
let antman = new Avenger('ant-man', 'team cap', 'scott');
antman.nombre = 'hormiga';
antman.listoPelea2();
console.log(antman);
antman.bio();
