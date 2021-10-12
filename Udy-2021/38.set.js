// los SET son como arrays pero no permiten elementos duplicados

let mochila = new Set(['linterna', 'libro', 'agua', 'lapices']);

// comprobar si un elemento se encuentra en el SET
console.log(`comprueba : `, mochila.has('libro'));

// eliminamos un elemento del SET
mochila.delete('agua');
console.log(`elimina : `, mochila);

//adicionar elementos al SET
mochila.add('hojas');
mochila.add('ipod');

console.log(`adiciona : `, mochila);

// intentamos repetir un elemento
mochila.add('hojas');
console.log(`adiciona : `, mochila);

//tamaño del sET
console.log(`tamaño : `, mochila.size);

// convertir un set en ARRAY
const mochilaArray = [...mochila];
console.log(`array : `, mochilaArray);
