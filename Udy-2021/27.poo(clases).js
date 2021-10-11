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

   // metodos estaticos
   static ruedas() {
      return 'las ruedas son del kit std';
   }
}

// instancias de clases
const coche = new Automovil('kia', 'seat', 2000, 'gas', 'blue');

console.log(`instancia de automovil`, coche);
