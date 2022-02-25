"use strict";
let variable = "algo";
if (true) {
    let variable = "otro";
}
console.log(variable);
const CONSTANTE = "activo";
let nombre1 = "Alice";
let nombre2 = 'Bob';
let nombre3 = `Carol`;
console.log(`este es une mensjae 
donde tennemos otra linea ${nombre1} 
con otro nombre ${nombre2}  y una operacion ${5 + 2}`);
let sumar = (a, b) => a + b;
console.log(sumar(4, 8));
let darOrdenHulk = (orden) => `Hulk ${orden}`;
console.log(darOrdenHulk('smash'));
let capitan = {
    sub: "bucky",
    darOrden: function () {
        let self = this;
        setTimeout(function () {
            console.log(self.sub + ' figth');
        }, 1000);
    }
};
capitan.darOrden();
let capitan_flecha = {
    sub: "buckkk",
    darOrden: function () {
        setTimeout(() => console.log(this.sub + " figth"), 1000);
    }
};
capitan_flecha.darOrden();
let avengers = {
    nick: "Samuel Jackson",
    iron: "Robert Downey Jr.",
    vision: "Paul Bettany"
};
let { nick, iron: warmachine, vision } = avengers;
console.log(warmachine);
let justiceLeague = ['superman', 'batman', 'flash', 'aquaman'];
let [jl1, jl2, jl3, jl4] = justiceLeague;
console.log(jl3);
for (let heroeOf of justiceLeague) {
    console.log(heroeOf);
}
class Personaje {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
}
let gata = new Personaje('Black Cat', 'Escapista');
console.log(gata);
class PersonajeVolador extends Personaje {
    constructor(nombre, poder) {
        super(nombre, poder);
        this.vuela = true;
    }
}
let mothman = new PersonajeVolador('moth-Man', 'predestinacion');
console.log(mothman);
