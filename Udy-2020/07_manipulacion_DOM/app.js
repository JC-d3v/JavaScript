//EXAMINANDO EL DOM
// TIP: .dir(obj) : Muestra toda la informacion interactiva del documento (objeto)
console.dir(`toda la info: document : `, document);

// TIP: document.url : ruta del documento
console.dir(`Ruta del archivo: --.URL : `, document.URL);

// TIP: document.title : tituo del documento
console.log(document.title);

// TIP: cambia el titulo del documento
document.title = 'nuevo titulo';
console.log(document.title);

console.log('__.head : ', document.head);
console.log('__.body : ', document.body);
console.log('__.all : ', document.all);
// TIP: muestra el indice 17
console.log('__.all[17] : ', document.all[17]);

console.log('.forms[0] : ', document.forms[0]);
console.log('.links : ', document.links);
