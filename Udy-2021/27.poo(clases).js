class Automovil {
   constructor(marca, modelo, anio, combustible, color) {
      this.marca = marca;
      this.modelo = modelo;
      this.anio = anio;
      this.combustible = combustible;
      this.color = color;
   }

   // getter
   get getColor() {
      return this.color;
   }

   // setter
   set setColor(color) {
      this.color = color;
   }

   // metodos

   velocidad(velocidad) {
      if (velocidad > 200) {
         return 'ya no debes acelerar, maximo permitido';
      } else {
         return `estas a ${200 - velocidad} de alcansar el limite permitido`;
      }
   }

   // metodos estaticos pertenecen a la clase
   static ruedas() {
      return 'las ruedas son del kit std';
   }
}

// instancias de clases
const coche = new Automovil('kia', 'seat', 2000, 'gas', 'blue');

console.log(`instancia de clase : `, coche);

coche.setColor = 'green';
console.log(`instancia de clase : `, coche);
console.log(`metodo velocidad : `, coche.velocidad(170));

console.log(`metodo de  clase : `, Automovil.ruedas());

// herencia
// en ele contructor de la calse heredada primero colocamos las caractersticas propias
// y luego las heredadas

// en el super lo que heredamos

class nautica extends Automovil {
   constructor(materialCasco, tipoMotor, marca, modelo) {
      super(marca, modelo);
      this.materialCasco = materialCasco;
      this.tipoMotor = tipoMotor;
   }
}

const nautilus = new nautica('metal', 'combustion', 'yamaha', 2020);
console.log(`clase heredada : `, nautilus);

nautilus.color = 'gris';
console.log(`Nautilus obj : `, nautilus);
