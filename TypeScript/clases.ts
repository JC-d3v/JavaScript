class Avenger {
    // TIP: DEFINICION CLASS
    public nombre: string = 'Antman'; // TIP: PUBLIC acceso desde cuaquier punto
    protected equipo: string = '';  // TIP: PROTECTED cambios desde la clase o sus herencias. 
    private nombreReal: string = 'Scott Lang'  // TIP: PRIVATE solo cambios desde la misma clase
    private puedePelear: boolean = true;
    private peleasGanadas: number = 0;

    // TIP: CONSTRUCTOR CLASS
    constructor(nombre: string, equipo: string, nombreReal: string) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal
    }

    public bio(): void {
        let mensaje: string = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
        console.log(mensaje);
    }

    private listoPelea(): void {
        this.puedePelear = !this.puedePelear
    }
    public listoPelea2(): void {
        this.puedePelear = !this.puedePelear
    }
}

let antman: Avenger = new Avenger('ant-man', 'team cap', 'scott');
antman.nombre = 'hormiga';
antman.listoPelea2();
console.log(antman);
antman.bio();