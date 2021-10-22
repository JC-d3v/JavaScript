class persona {
   constructor(nombre, edad, live) {
      this.name = nombre;
      this.edad = edad;
      this.live = live;
   }
   getBio() {
      let bio = `${this.name} tiene ${this.edad} años y esta ${this.live}`;
      return bio;
   }
}

const persona1 = new persona('pepe', 20, true);
const persona2 = new persona('ana', 25, true);
const persona3 = new persona('karen', 25, false);

console.log(`Obj : `, persona1);
console.log(`Obj : `, persona2);
console.log(`Obj : `, persona3);
