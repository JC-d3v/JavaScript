// TIP: // FIXME: break corta la ejecucion a partir de l uso de break
// TIP: // FIXME: return
// TIP: // FIXME: continue

const animales = ['perro', 'ardilla', 'buho', 'cobra', 'oso', 'pato', 'vaca'];

for (let index = 0; index < animales.length; index++) {
   if (index === 3) {
      continue;
   }
   if (index === 3) {
      break;
   } else {
      console.log(index, animales[index]);
   }
}

function saludo(nombre) {
   return `Este es un saludo para ti...${nombre}`;
   //console.log(`Este es un saludo para ti...${nombre}`);
}

console.log(saludo('jorge'));

console.log(`msg`, animales[2]);

const add = (a, b) => a + b;
const result = add(10, 11);

result;

animales;
