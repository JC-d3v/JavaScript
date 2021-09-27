const cafeteria = {
   nombre: 'los pinos',
   actividad(juego) {
      console.log(`soy ${this.nombre} y estoy jugando ${juego}`);
   },
};

const persona = {
   nombre: 'jorge',
};

// TIP: --.call acceder al contexto de otro objeto
let accederCall = cafeteria.actividad.call(persona, 'billar');

// TIP: --.apply acceder al contexto de otro objeto
let accederApply = cafeteria.actividad.apply(persona, ['poker']);

// TIP: --.bind retorna una nueva funcion con el nuevo objeto
const jugar = cafeteria.actividad.bind(persona);
jugar('futbolin');
