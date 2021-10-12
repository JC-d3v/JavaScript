function cargarArchivo() {
   fetch('./31.JSON.json')
      .then((res) => res.json())
      .then((res) => console.log(res));
}
cargarArchivo();
