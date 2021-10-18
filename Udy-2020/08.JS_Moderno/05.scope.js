// definicion de variables
var test;
test = 10;
function prueba() {
   test = 15;
}
prueba();
console.log(`var test : `, test);

// bloques y alcandes de las variables
//let y const respetan el bloque.
{
   const a = 3;
   let b = 4;
   var c = 5;
}

console.log(`msg`, c);

// let test
// test = 10
// function prueba (){
//    test =15
// }
// prueba()
// console.log(`var test : `, test);
