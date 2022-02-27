
function consola(constructor: Function) {
  console.log(constructor);
}

// TIP: DECORADOR FACTORY
function imprimirConsola(imprimir: boolean): Function {
  if (imprimir) {
    return consola;
  } else {
    return null;
  }
}

@imprimirConsola(true)
class VillanoC {
  constructor(public nombre: string) {

  }
}

function planVillano(constructor: Function) {
  constructor.prototype.imprimirPlan = function () {
    console.log(`El plan de ` + this.nombre + ` es dominar el mundo`)
  }
}

function imprimible(constructor: Function) {
  constructor.prototype.imprimir = function () {
    console.log(this)
  }
}

@imprimible
@planVillano
class VillanoFav {
  constructor(public nombre: string, public poder?: string) {

  }
}

let lex = new VillanoFav('Lex Luthor', 'inteligencia');
lex.imprimirPlan();
lex.imprimir();

// **********************************

function editable(esEditable: boolean) {
  return function (target: any, nombrePropiedad: string, descriptor: PropertyDescriptor) {
    descriptor.writable = esEditable;
  }
}

function editableProp(esEditable: boolean): any {
  return function (target: any, nombrePropiedad: string, descriptor: PropertyDescriptor) {
    let descriptor: PropertyDescriptor = {
      writable: esEditable
    }
    return descriptor;
  }
}

class superVillano {
  @editableProp(true)
  public nombre: string;
  constructor(public nombre: string) {
    this.nombre = nombre;
  }

  @editable(true)
  plan() {
    console.log(`Dominar el mundo`);
  }
}

let ares = new superVillano('Ares')
ares.plan = function () {
  console.log(`Cortar flores`);
}

ares.plan();