/*
onblur(): se pierde el foco.
onchange(): al modificar el valor del componente.
onbeforeunload(): se lanza al intentar cerrar una ventana.
onclick(): al hacer clic en un elemento.
ondblclick(): al hacer doble click.
onerror(): si se produce un error al cargar la página web o una imagen.
onfocus(): cuando un componente obtiene el foco.
onkeydown(): al pulsar cualquier tecla.
onkeypress(): al pulsar una tecla correspondiente a un carácter.
onkeyup(): al leventar cualquier una tecla.
onload(): se produce al terminar de cargarse la página web o una imagen.
onmousedown(): al presionar un botón del ratón.
onmousemove(): se ha movido el ratón.
onmouseout(): el cursor del ratón sale del área ocupada por un elemento.
onmouseover(): el cursor del ratón entra en el área ocupada por un elemento.
onmouseup(): al dejar de presionar un botón del ratón.
onresize(): al redimensionar una ventana o frame.
onselect(): cuando se selecciona un texto.
onunload(): al salir de la página web.
*/

const boton = document.querySelector('button');
const cuerpo = document.querySelector('body');
const formulario = document.querySelector('#formulario');

function pulsar() {
   alert('haspulsado el boton');
}

window.addEventListener('resize', (e) => {
   cuerpo.style.background = 'green';
   // alert('has cambiado el tamaño de ventana');
});

formulario.addEventListener('focus', (e) => {
   formulario.style.background = 'orange';
});

formulario.addEventListener('blur', (e) => {
   formulario.style.background = 'yellow';
});

formulario.addEventListener('change', (e) => {
   cuerpo.style.background = 'red';
});
