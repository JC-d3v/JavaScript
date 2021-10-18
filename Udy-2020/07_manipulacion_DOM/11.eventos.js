function hacerClick() {
   console.log(`Ud le dio click`);
}

function hacerClick2() {
   document.getElementById('header-title').textContent = 'Titulo Cambiado';
}

let conta = 0;
function hacerClick3() {
   conta++;
   document.getElementById('header-title').textContent = 'Titulo Cambiado ' + conta;
}

// TIP: __.addEventListener('click', hacerClick3); : añade un escucha al evento click y ejecuta action
// // alernativa UNO
// document.getElementById('botonera').addEventListener('click', function () {
//    console.log('usted hizo click');
// });

// alernativa DOS
document.getElementById('botonera').addEventListener('click', hacerClick3);
