// TIP: BOOLEAN
var estaVivo = true;
console.log(estaVivo);
// TIP: NUMBER
var edad = 30;
var salary = 2000.123;
console.log(edad, salary);
// TIP: STRING
var mensaje = 'Este es mi mensaje';
console.log(mensaje);
// TIP: ANY
var cantidad = 123;
cantidad = 123456;
console.log(cantidad);
cantidad = true;
console.log(cantidad);
cantidad = "mucho";
console.log(cantidad);
// TIP: ARRAY
var arreglo = [1, 2, 3, 4, 5, 6];
arreglo.push(80);
var arreglo_cad = ['uno', 'dos', 'tres'];
arreglo_cad.push('once');
console.log(arreglo);
// TIP: TUPLAS
var movies = ["Logan", 8];
movies[0] = "8";
movies[1] = 8;
console.log(movies);
// TIP: ENUM 
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["alto"] = 10] = "alto";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(Volumen);
console.log(audio);
console.log(Volumen[10]);
// TIP: VOID
function help() {
    console.log("S.O.S");
}
help();
// TIP: NEVER
// function error(mensaje): never {
//     throw new Error(mensaje);
// }
// error("Error critico... linea");
// TIP: Aserciones de tipo CAST;
var cualquier = "lo que sea";
var largoDeCadena = cualquier.length;
console.log(largoDeCadena);
