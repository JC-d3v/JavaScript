//exampple 1
let libroA = {
  titulo: 'JS',
  autor: 'perico perez',
  paginas: 400,
  publicado: false,
};

console.log(`objeto.propiedad: ${libroA.titulo}`);
libroA.paginas = 450;
console.log(`objeto.propiedad: ${libroA.paginas}`);

//example 2
let persona = {
  nombre: 'John',
  edad: 121,
  ciudad: 'scz',
};

persona.edad = 212;
console.log(`obj persona`, persona);

//example 3
let libroB = {
  titulo: 'PHP',
  autor: 'JOSE',
  paginas: 700,
  publicado: true,
};

let getResumen = (libro) => {
  return {
    resumenTit: `El libro ${libro.titulo}, escrito por ${libro.autor}`,
    resumenPag: `contine ${libro.paginas} paginas esta publicado ${libro.publicado}.`,
  };
};

let resumenA = getResumen(libroA);
let resumenB = getResumen(libroB);

console.log(`msg`, resumenA);
console.log(`msg`, resumenB);

//example 4
let trabajador1 = {
  nombre: 'John',
  ciudad: 'scz',
  sueldo: 1000,
};

let trabajador2 = {
  nombre: 'Jane',
  ciudad: 'src',
  sueldo: 2000,
};

let trabajador3 = {
  nombre: 'Paul',
  ciudad: 'ben',
  sueldo: 3000,
};

let subeSueldo = (persona, mnt) => {
  persona.sueldo = persona.sueldo + mnt;
  return `${persona.nombre} tendra un incremento de ${mnt} el total sera ${persona.sueldo}}`;
};

console.log(`msg`, subeSueldo(trabajador3, 100));
