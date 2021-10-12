// TIP: spread operator "..."
// unifica los arrays u objetos
const cities = ['sucre', 'lpz', 'cbba', 'tja'];

const countries = ['bol', 'bra', 'chi'];

const mundo = [...cities, ...countries];

console.log(`unificado : `, mundo);

const modelsWoman = {
   sara: 'spain',
   kelly: 'england',
   jordan: 'usa',
   kim: 'corea',
};

const modelsMan = {
   pepe: 'suiz',
   jordan: 'usa',
   jose: 'bra',
};

const models = { ...modelsWoman, ...modelsMan };

console.log(`spread opr : `, models);
