// TIP: Objetos basicos - propiedades
let flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ['correr muy rapido', 'Viajar en el tiempo']
};
flash = {
    nombre: 'Clark Kent',
    edad: 500,
    poderes: ['volar']
}

// TIP: Objetos con tipos especificos.
let dcHeroes: { nombre: string, edad: number, poderes: string[] } = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ['correr muy rapido', 'Viajar en el tiempo']
}

// TIP: Objetos con Metodos.
let marvelHeroe: { nombre: string, edad: number, poderes: string[], getNombre: () => string } = {
    nombre: "Bruce",
    edad: 40,
    poderes: ['inteligencia'],
    getNombre() {
        return this.nombre;
    }
}
console.log(marvelHeroe.getNombre());

// TIP: Objetos Tipo Personalizado
type Heroe = {
    nombre: string,
    edad: number,
    poderes: string[],
    getNombre: () => string
}
let heroes: Heroe = {
    nombre: 'Dr. Manhatan',
    edad: 150,
    poderes: ['God'],
    getNombre() {
        return this.nombre;
    }
}

// TIP: Objetos multiples tipos 
let loquesea: string | number | Heroe;
loquesea = 'text';
loquesea = 10;

// TIP: verificar tipo de objeto
let cosa: any = 1.123;
console.log(typeof cosa);