var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TIP: USO LET 
var variable = "algo";
if (true) {
    var variable_1 = "otro";
}
console.log(variable);
// TIP: CONST solo una asignacion
var CONSTANTE = "activo";
// TIP: templates LITERAL
var nombre1 = "Alice";
var nombre2 = 'Bob';
var nombre3 = "Carol";
console.log("este es une mensjae \ndonde tennemos otra linea " + nombre1 + " \ncon otro nombre " + nombre2 + "  y una operacion " + (5 + 2));
// TIP: ARROW Functions
var sumar = function (a, b) { return a + b; };
// function sumar(a,b){
//     return a+b;
// }
console.log(sumar(4, 8));
var darOrdenHulk = function (orden) { return "Hulk " + orden; };
// function darOrdenHulk(orden:string):string {
//     return `Hulk ${orden}`;
// }
console.log(darOrdenHulk('smash'));
var capitan = {
    sub: "bucky",
    darOrden: function () {
        var self = this;
        setTimeout(function () {
            console.log(self.sub + ' figth');
        }, 1000);
    }
};
capitan.darOrden();
var capitan_flecha = {
    sub: "buckkk",
    darOrden: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.sub + " figth"); }, 1000);
    }
};
capitan_flecha.darOrden();
// TIP: destructuracion de objetos
var avengers = {
    nick: "Samuel Jackson",
    iron: "Robert Downey Jr.",
    vision: "Paul Bettany"
};
var nick = avengers.nick, warmachine = avengers.iron, vision = avengers.vision;
console.log(warmachine);
// TIP: destructuracion de arrays
var justiceLeague = ['superman', 'batman', 'flash', 'aquaman'];
var jl1 = justiceLeague[0], jl2 = justiceLeague[1], jl3 = justiceLeague[2], jl4 = justiceLeague[3];
//let [, , jl3, ] = justiceLeague;
console.log(jl3);
// TIP: ciclo _ for of
for (var _i = 0, justiceLeague_1 = justiceLeague; _i < justiceLeague_1.length; _i++) {
    var heroeOf = justiceLeague_1[_i];
    console.log(heroeOf);
}
// TIP: CLASES ES6
var Personaje = /** @class */ (function () {
    function Personaje(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    return Personaje;
}());
var gata = new Personaje('Black Cat', 'Escapista');
console.log(gata);
var PersonajeVolador = /** @class */ (function (_super) {
    __extends(PersonajeVolador, _super);
    function PersonajeVolador(nombre, poder) {
        var _this = _super.call(this, nombre, poder) || this;
        _this.vuela = true;
        return _this;
    }
    return PersonajeVolador;
}(Personaje));
var mothman = new PersonajeVolador('moth-Man', 'predestinacion');
console.log(mothman);
