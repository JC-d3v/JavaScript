class Heroe {

    private _nombre: string;
    constructor(nombre?: string) {
        this._nombre = nombre;
    }
    get nombre(): string {
        console.log(`pasams por get nombre`);
        if (this._nombre) {
            return this._nombre;
        } else {
            return 'no hay nombre'
        }
    }

    set nombre(nombre: string) {
        console.log(`pasamos por set nombre`);
        if (nombre.length <= 3) {
            return;
        }
        this._nombre = nombre;
    }
}

let storm: Heroe = new Heroe('stormy');
console.log(storm.nombre);

storm.nombre = 'lee';
console.log(storm.nombre);
