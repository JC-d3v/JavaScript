class animal {
   constructor(nombre, raza) {
      this.nombre = nombre;
      this.raza = raza;
   }
   ladrar() {
      console.log(`guau guau`);
   }
}

export const perro = new animal('fido', 'boxer');
