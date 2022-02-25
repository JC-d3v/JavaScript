class Heroe {

  constructor(public nombre: string, private nombreReal: string) {
    console.log(`cosntructor Heroe`);
  }
  protected getNombre(): string {
    console.log(`get nombre Protegido`);
    return this.nombre;
  }
}

class Xmen extends Heroe {
  constructor(a: string, b: string) {
    super(a, b);
    console.log(`cosntructor Xmen`);
  }
  public getName(): string {
    console.log(`get Name publico`);
    return super.getNombre();
  }
}

//let ironman: Heroe = new Heroe('Ironman', 'Tony');
//console.log(ironman);


let wolverine: Xmen = new Xmen('Wolverine', 'Logan');
console.log(wolverine);

console.log(wolverine.getName());