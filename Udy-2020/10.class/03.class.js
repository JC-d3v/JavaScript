class Persona {
  constructor(nombre, edad, live, trabajos = []) {
    this.name = nombre;
    this.edad = edad;
    this.live = live;
    this.trabajos = trabajos;
  }
  getBio() {
    let bio = `${this.name} tiene ${this.edad} años y esta ${this.live} `;

    this.trabajos.forEach((trabajo) => {
      bio += `${trabajo} `;
    });

    return bio;
  }
}

const persona1 = new Persona('pepe', 20, true, ['arq', 'ing']);
const persona2 = new Persona('ana', 25, true, ['doc', 'med']);
const persona3 = new Persona('karen', 25, false, ['sec', 'aux', 'asis']);

console.log(`Obj : `, persona1.getBio());
console.log(`Obj : `, persona2.getBio());
console.log(`Obj : `, persona3.getBio());

// TIP: extends : subclasses
class Humano extends Persona {
  constructor(nombre, edad, live, trabajos = [], sueldo, puesto) {
    // TIP: super : superConstructor nuevas propiedades
    super(nombre, edad, live, trabajos);
    this.sueldo = sueldo;
    this.puesto = puesto;
  }
  // TIP: Redefnicion de metodo de clase extendida
  getBio() {
    return `${super.getBio()} con un sueldo de ${this.sueldo} como ${this.puesto}`;
    // `Nombre : ${this.nombre}, puesto ${this.puesto}, salario: ${this.sueldo}`;
  }
}

const ser1 = new Humano('pepito', 20, true, ['arq', 'ing'], 1000, 'jefe');
const ser2 = new Humano('anita', 25, true, ['doc', 'med'], 1500, 'gerente');
const ser3 = new Humano('karencita', 25, false, ['sec', 'aux', 'asis'], 1750, 'presi');

console.log(`Obj : `, ser1.getBio());
console.log(`Obj : `, ser2.getBio());
console.log(`Obj : `, ser3.getBio());
