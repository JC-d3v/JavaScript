var Avenger = /** @class */ (function () {
    // TIP: CONSTRUCTOR CLASS
    function Avenger(nombre, equipo, nombreReal) {
        // TIP: DEFINICION CLASS
        this.nombre = 'Antman'; // TIP: PUBLIC acceso desde cuaquier punto
        this.equipo = ''; // TIP: PROTECTED cambios desde la clase o sus herencias. 
        this.nombreReal = 'Scott Lang'; // TIP: PRIVATE solo cambios desde la misma clase
        this.puedePelear = true;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    Avenger.prototype.listoPelea = function () {
        this.puedePelear = !this.puedePelear;
    };
    Avenger.prototype.listoPelea2 = function () {
        this.puedePelear = !this.puedePelear;
    };
    return Avenger;
}());
var antman = new Avenger('ant-man', 'team cap', 'scott');
antman.nombre = 'hormiga';
antman.listoPelea2();
console.log(antman);
antman.bio();
