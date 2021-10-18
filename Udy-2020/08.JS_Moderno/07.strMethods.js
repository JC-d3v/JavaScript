let nombre = 'pepe';
let app = 'vasquez';
let nombreCompleto = `${nombre} ${app}`;
console.log(`nombre completo : `, nombreCompleto);

// TIP: __.repeat(5); : Repite la cadena una cantidad de veces
console.log(`${nombre} `.repeat(5));

// TIP: __.includes; : Nombre completo includes PE?
console.log(`__.includes(pe)`, nombreCompleto.includes('pe'));

// TIP: __.startsWith(pe): la cadena empieza con ?
console.log(`__.startsWith()`, nombreCompleto.startsWith('pe'));

// TIP: __.endsWith(pe): la cadena termina con ?
console.log(`__.endsWith()`, nombreCompleto.endsWith('ez'));
