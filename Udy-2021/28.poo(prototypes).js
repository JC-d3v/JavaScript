function tiburon(nombre, cientifico) {
   this.nombre = nombre;
   this.cientifico = cientifico;
}

//metodos

tiburon.prototype.atacar = function () {
   // return 'cuidado en el agua';
   console.log(`cuidado, fuera del agua`);
};

//instancia de clases

const martillo = new tiburon('hammer', 'tudum');
console.log(`instancia`, martillo.atacar());

//herencia
function tiburonToro(nombre, cientifico, peligrosidad) {
   this.super = tiburon;
   this.super(nombre, cientifico);
   this.peligrosidad = peligrosidad;
}

//instancia heredados
const costero = (tiburonToro.prototype = new tiburon());
tiburonToro.prototype.constructor = tiburon;

//Sobreescritura de metodos
tiburonToro.prototype.atacar = function () {
   console.log(`cuidado, toro en las proximidades`);
};

// metodos
tiburonToro.prototype.mutilar = function () {
   console.log(`metodo : Riesgo de amputacion si se produce un ataque`);
};

costero.atacar();

costero.mutilar();
