"use strict";
function enviarMision(xmen) {
    console.log(`Enviando a la mision a ${xmen.nombre}`);
    xmen.regenerar('logan');
}
;
function enviarCuartel(xmen) {
    console.log(`Enviando al cuartel a ${xmen.nombre}`);
}
let wolverine1 = {
    nombre: 'Wolverine',
    regenerar(x) {
        console.log(`Se ha regenerado a ${x}`);
    }
};
enviarMision(wolverine1);
enviarCuartel(wolverine1);
