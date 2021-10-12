const automovil = function (color, marca, velocidad) {
   this.color = color;
   this.marca = marca;
   this.velocidad = velocidad;

   this.acelerar = function () {
      console.log(`estoy acelerando...`);
   };
};

const seat = new automovil('rojo', 'seat', 2000);

console.log(`instacia : `, seat);

seat.acelerar();
// console.log(`metodo seat : `, seat.acelerar());
