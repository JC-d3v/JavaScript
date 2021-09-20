const num1 = 80;
const num2 = 60;
const num3 = 90;
const num4 = 60;
const num5 = 90;
const num6 = 90;

// TIP: IF-ELSE: if (condition) {sent TRUE} else {sent FALSE}
if (num1 > num2) {
   console.log('IF ELSE:', num1 > num2, num1, ' SI es mayor que ', num2);
} else {
   console.log('IF ELSE:', num1 > num2, num1, ' NO es mayor que ', num2);
}

let hora = 11;
console.log('IF-ELSE 2');
if (hora >= 8 && hora <= 10) {
   console.log('EL cafe esta en oferta');
} else if (hora > 10 && hora <= 12) {
   console.log('Las tostadas estan en oferta');
} else if (hora > 12 && hora <= 14) {
   console.log('La cerveza esta en oferta');
} else if (hora > 14 && hora <= 16) {
   console.log('Los menus estan en oferta');
} else if (hora > 16 && hora <= 23.59) {
   console.log('los clases de billar estan en oferta');
} else {
   console.log('No tenemos ofertas disponibles');
}

// TIP: OPERADOR TERNARIO , CONDICIONAL TERNARIO - alernativa a IF
//condition ? exprIfTrue : exprIfFalse
hora = 9;
hora >= 8 && hora <= 10 ? console.log('EL cafe esta en oferta') : null;
hora > 10 && hora <= 12 ? console.log('Las tostadas estan en oferta') : null;
hora > 12 && hora <= 14 ? console.log('La cerveza esta en oferta') : null;
hora > 14 && hora <= 16 ? console.log('Los menus estan en oferta') : null;
hora > 16 && hora <= 23.59 ? console.log('los clases de billar estan en oferta') : null;
hora > 0 && hora < 8 ? console.log('No tenemos ofertas disponibles') : null;

// TIP: switch evalua una expresion y ejectura una instancia case
// switch (expresión) {
//    case valor1: //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
//        [break;]
//   case valor2:  //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
//        [break;]
//   ...
//   case valorN:  //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
//        [break;]
//   default: //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//        [break;]
//   }
let dia;
switch ((dia = 'dom')) {
   case 'lun':
      console.log('Empezamos semana');
      break;
   case 'mie':
      console.log('mitad de semana');
      break;
   case 'dom':
      console.log('Fin de semana');
      break;
   default:
      console.log('No es dia semana');
      break;
}
