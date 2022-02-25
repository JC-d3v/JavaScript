// TIP: INTERFACE
interface Xmen1 {
  nombre: string;
  poder?: string;  // TIP: Propiedades opcionales
  regenerar?(nombreReal: string): void;
}

function enviarMision(xmen: Xmen1) {
  console.log(`Enviando a la mision a ${xmen.nombre}`);
  xmen.regenerar('logan');
};

function enviarCuartel(xmen: Xmen1) {
  console.log(`Enviando al cuartel a ${xmen.nombre}`);
}

let wolverine1: Xmen1 = {
  nombre: 'Wolverine',
  regenerar(x: string) {
    console.log(`Se ha regenerado a ${x}`);
  }
};

enviarMision(wolverine1);
enviarCuartel(wolverine1);
