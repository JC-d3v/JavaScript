/**
 * Concatenar
 */
// TIP: cocatenacion tradicional
let frase1 = 'Me gusta mucho pasear';
let frase2 = ', por la calle';
let frasetotal = frase1 + frase2;

console.log(frase1 + frase2);

//************************************ */

let nombre_c = 'Antonio';
let persona;
let rubia = false;
let pelirroja = true;
let morena = true;
let castanya = false;

if (rubia) {
   persona = 'rubia';
} else if (pelirroja) {
   persona = 'pelirroja';
} else if (castanya) {
   persona = 'castaña';
}

let saludo = 'Hola ' + nombre_c + ' conoces a ' + persona;

console.log(saludo);

// TIP: manera moderna de concatenar
let saludo2 = `Hola ${nombre_c} me gusta mucho ir a pasear con ${persona}`;

console.log(saludo2);
