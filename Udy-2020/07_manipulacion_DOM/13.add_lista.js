// cambiar el diseño de nuestro sitio

////// agregar elementos a la lista
var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

// evento submit del formulario
form.addEventListener('submit', agregarItem);

// evento para aliminar item
lista.addEventListener('click', eliminarItem);

// evento para filtro
filtro.addEventListener('keyup', filtrarItems);

// funcion para agregar elemento a la lista
function agregarItem(e) {
   e.preventDefault();
   var newItem = document.getElementById('item').value;
   // console.log(`captura nuevo item `, newItem);
   var li = document.createElement('li');
   li.className = 'list-group-item';
   li.appendChild(document.createTextNode(newItem));
   var botonDel = document.createElement('button');
   botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
   botonDel.appendChild(document.createTextNode('XY'));
   li.appendChild(botonDel);
   lista.appendChild(li);
}

// funcion para eliminar un Item de la lista
function eliminarItem(e) {
   if (e.target.classList.contains('eliminar')) {
      if (confirm('¿Are you sure ?')) {
         var li = e.target.parentElement;
         lista.removeChild(li);
      }
   }
}

//funcion para filtrar elementos
function filtrarItems(e) {
   var texto = e.target.value.toLowerCase();
   var items = lista.getElementsByTagName('li');
   Array.from(items).forEach(function (item) {
      var itemNombre = item.firstChild.textContent;
      if (itemNombre.toLowerCase().indexOf(texto) != -1) {
         item.style.display = 'block';
      } else {
         item.style.display = 'none';
      }
   });
}
