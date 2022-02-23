// TIP: USO LET 
let variable: string = "algo"
if (true) {
    let variable: string = "otro"
}
console.log(variable);

// TIP: CONST solo una asignacion
const CONSTANTE: string = "activo";

// TIP: templates LITERAL
let nombre1: string = "Alice";
let nombre2: string = 'Bob';
let nombre3: string = `Carol`;

console.log(`este es une mensjae 
donde tennemos otra linea ${nombre1} 
con otro nombre ${nombre2}  y una operacion ${5 + 2}`);

// TIP: ARROW Functions
let sumar = (a, b) => a + b;
// function sumar(a,b){
//     return a+b;
// }
console.log(sumar(4, 8));
let darOrdenHulk = (orden: string) => `Hulk ${orden}`;
// function darOrdenHulk(orden:string):string {
//     return `Hulk ${orden}`;
// }
console.log(darOrdenHulk('smash'));

let capitan = {
    sub: "bucky",
    darOrden: function () {
        let self = this
        setTimeout(function () {
            console.log(self.sub + ' figth');
        }, 1000)
    }
}
capitan.darOrden();

let capitan_flecha = {
    sub: "buckkk",
    darOrden: function () {
        setTimeout(() => console.log(this.sub + " figth"), 1000);
    }
};

capitan_flecha.darOrden();

// TIP: destructuracion de objetos
let avengers = {
    nick: "Samuel Jackson",
    iron: "Robert Downey Jr.",
    vision: "Paul Bettany"
}
let { nick, iron: warmachine, vision } = avengers;
console.log(warmachine);

// TIP: destructuracion de arrays
let justiceLeague = ['superman', 'batman', 'flash', 'aquaman'];
let [jl1, jl2, jl3, jl4] = justiceLeague;
//let [, , jl3, ] = justiceLeague;
console.log(jl3);

// TIP: ciclo _ for of
for (let heroeOf of justiceLeague) {
    console.log(heroeOf);
}

// TIP: CLASES ES6
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