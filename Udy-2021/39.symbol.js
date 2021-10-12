// Es un dato primitivo que permite crear
//identificadores unicos
// y evitar colisiones

let nombre1 = Symbol('nombre');
let nombre2 = Symbol('nombre');

console.log(`comparacion : `, nombre1 === nombre2);

let objeto = { [nombre1]: 'Peter' };

objeto.nombre1 = 'antonio';

console.log(`obj : `, objeto[nombre1]);

objeto[nombre1] = 'Luis';

console.log(`obj : `, objeto[nombre1]);
