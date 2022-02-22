// TIP: BOOLEAN
let estaVivo: boolean = true;
console.log(estaVivo);

// TIP: NUMBER
let edad: number = 30;
let salary: number = 2000.123;
console.log(edad, salary);

// TIP: STRING
let mensaje: string = 'Este es mi mensaje';
console.log(mensaje);

// TIP: ANY
let cantidad: any = 123;
cantidad = 123456;
console.log(cantidad);
cantidad = true;
console.log(cantidad);
cantidad = "mucho"
console.log(cantidad);

// TIP: ARRAY
let arreglo: number[] = [1, 2, 3, 4, 5, 6];
arreglo.push(80);
let arreglo_cad: string[] = ['uno', 'dos', 'tres'];
arreglo_cad.push('once');
console.log(arreglo);

// TIP: TUPLAS
let movies: [string, number] = ["Logan", 8];
movies[0] = "8";
movies[1] = 8;
console.log(movies);

// TIP: ENUM 
enum Volumen {
    min = 1,
    medio = 5,
    alto = 10
}
let audio: number = Volumen.medio;
console.log(Volumen);
console.log(audio);
console.log(Volumen[10]);

// TIP: VOID
function help(): void {
    console.log(`S.O.S`);
}
help();

// TIP: NEVER
// function error(mensaje): never {
//     throw new Error(mensaje);
// }
// error("Error critico... linea");

// TIP: Aserciones de tipo CAST;
let cualquier: any = "lo que sea";
let largoDeCadena: number = (<string>cualquier).length;
console.log(largoDeCadena);

