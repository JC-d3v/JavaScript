// TIP:  setTimeout : Aplica un timer en milisegundos
//var idTemporizador = scope.setTimeout(funcion[, retraso, parametro1, parametro2, ...]);
//var idTimeout = scope.setTimeout(funcion[, retraso]);
//var idTimeout = scope.setTimeout(codigo[, retraso]);

// TIP: clearTimeout: borra el retrazo asignado
//window.clearTimeout(timeoutID)

const pantalla = document.querySelector('body');

let retardo = setTimeout(() => {
   pantalla.style.background = 'green';
   clearTimeout(retardo);
   console.log(`Se ha limpiado el contador`);
}, 1000 * 3);

// TIP: --.setinterval()  Eejcuta codigo cada que se termina un periodo de tiempo
//var procesoID = window.setInterval(función, intervaloDeTiempo[, parámetro1, parámetro2, ... , parámetroN]);
//var procesoID = window.setInterval(código, intervaloDeTiempo);

// let contador = setInterval(() => {
//    contador > 10 ? clearInterval(newcontador) : document.write(contador++);
// }, 2000);

function holaMundo() {
   let saludo = window.requestAnimationFrame(holaMundo);
   console.log(`hola mundo`);
   saludo > 5000 ? window.cancelAnimationFrame(saludo) : null;
}

holaMundo();
