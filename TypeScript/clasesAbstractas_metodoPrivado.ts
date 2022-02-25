// TIP: ABSTRACT contenedor de clases modelo padre
abstract class Mutantes {
    constructor(public nombre: string, public nombreReal: string) {
    }
}
class Xmen extends Mutantes {
}

let wolverine = new Xmen("Wolverine", "Logan");
console.log(wolverine);

// TIP: CONSTRUCTOR PRIVADO
class Apocalipsis {
    static instancia: Apocalipsis;

    private constructor(public nombre: string) {
    }

    static llamarApocalipsis() {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis('nombre Apocalipsis');
        }
        return Apocalipsis.instancia;
    }
}

//let apocalipsisFalso = new Apocalipsis() 
let apocalipsisReal = Apocalipsis.llamarApocalipsis();

console.log(apocalipsisReal);