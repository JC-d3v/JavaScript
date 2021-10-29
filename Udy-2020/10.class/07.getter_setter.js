// otra manera de crear atributos a la clase
const datos = {
  // TIP: get getter
  get ubicacion() {
    return this._ubicacion;
  },
  // TIP: set setter
  set ubicacion(valor) {
    this._ubicacion = valor;
  },
};

datos.ubicacion = 'BsAS';
console.log(`msg`, datos.ubicacion);
console.log(`msg`, datos);
