import "jquery";

console.log('Hola mundo');

$(document).ready(function () {
  console.log('Pagina lista y cargada');

  $("h1").text("Hola desde Typescript");
  $("p").text("Hola desde este parrafo..")
});

$("#botAlerta").on("click", function () {
  alert("Hola mundo desde TS")
})