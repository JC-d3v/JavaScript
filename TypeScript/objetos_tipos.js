// TIP: Objetos basicos - propiedades
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ['correr muy rapido', 'Viajar en el tiempo']
};
flash = {
    nombre: 'Clark Kent',
    edad: 500,
    poderes: ['volar']
};
// TIP: Objetos con tipos especificos.
var dcHeroes = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ['correr muy rapido', 'Viajar en el tiempo']
};
// TIP: Objetos con Metodos.
var marvelHeroe = {
    nombre: "Bruce",
    edad: 40,
    poderes: ['inteligencia'],
    getNombre: function () {
        return this.nombre;
    }
};
console.log(marvelHeroe.getNombre());
var heroes = {
    nombre: 'Dr. Manhatan',
    edad: 150,
    poderes: ['God'],
    getNombre: function () {
        return this.nombre;
    }
};
// TIP: Objetos multiples tipos 
var loquesea;
loquesea = 'text';
loquesea = 10;
// TIP: verificar tipo de objeto
var cosa = true;
console.log(typeof cosa);
