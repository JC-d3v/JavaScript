// TIP: maps ES6

const datos = new Map();

datos.set('nombre', 'Grover');
datos.set('edad', 30);
datos.set(1, 'grover@email.com');
datos.set(2, 'grover@gggil.com');
datos.set('movil', 999999999);

console.log(`datos : `, typeof datos);

console.log(`key datos 'edad' : `, datos.get('edad'));
console.log(`key datos 1: `, datos.get(1));

// example 2
const contacts = new Map();
contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' });
contacts.has('Jessie'); // true
contacts.get('Hilary'); // undefined
contacts.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' });
contacts.get('Jessie'); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond'); // false
contacts.delete('Jessie'); // true
console.log(contacts.size); // 1

// recorrer mapa

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

map1.forEach(function (value, key) {
   console.log(`key=${key} >>> value=${value}`);
});

console.log(`msg`, map1);
