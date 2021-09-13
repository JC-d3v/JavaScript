let frase = 'que es uno que no es uno si no son dos';
let frase2 = '  que    es   uno   ';

// TIP: ANCHOR: Crea una etiqueta HTML ancla, con el NAME:test
document.write('<p>' + 'ANCHOR: ' + frase.anchor('test'));

// TIP: BIG: // XXX: Obsoleto
document.write('<p>' + 'BIG: ' + frase.big());

// TIP: BOLD  // XXX: Obsoleto
document.write('<p>' + 'BOLD: ' + frase.bold());

// TIP: CHARAT devuelve el caracater UTF-16 de una cadena
document.write('<p>' + 'charAt: ' + frase.charAt(9));

// TIP: CHARCODEAT: devuelve el codigo UNICODE que coincida con caracter.
document.write('<p>' + 'charCodeAt: ' + frase.charCodeAt(9));

// TIP: CONCAT: Concatena cadenas a la cadena original
document.write('<p>' + 'concat: ' + frase.concat(' Esa es la clave'));

// TIP: ENDSWITH: devuleve TRUE si la cadena termina con los caracteres indicados.
//str.endsWith(searchString[, position])
document.write('<p>' + 'endsWith: ' + frase.endsWith('dos'));
document.write('<p>' + 'endsWith: ' + frase.endsWith('uno', 10));

// TIP: FONTCOLOR: define el color de fuente // XXX: OBSOLETO

// TIP: FONTSIZE: define el tamaño // XXX: OBSOLETO
document.write('<p>' + 'fontsize: ' + frase.fontsize(6));

// TIP: INCLUDES: determina si una cadena de texto puede ser encontrada dentro de otra cadena
// devielve FALSO / VERDADERO
document.write('<p>' + 'includes: ' + frase.includes('uno'));

// TIP: INDEXOF: devuelve el indice del elemento dentro de la cadena, -1 si no existe
//indexOf(searchValue, fromIndex)
document.write('<p>' + 'indexof: ' + frase.indexOf('uno'));
document.write('<p>' + 'indexof: ' + frase.indexOf('uno', 9));

// TIP: italics: aplica italica al texto // XXX: OBSOLETO
document.write('<p>' + 'italics: ' + frase.italics());

// TIP: lastIndexOf: el utimo indice del elemento de la cadena, -1 si no existe
document.write('<p>' + 'lastindexof: ' + frase.lastIndexOf('uno'));

// TIP: LENGTH: nos devuelve el largo de una cadena
document.write('<p>' + 'length: ' + frase.length);

// TIP: LINK: crea un enlace HTML A
document.write('<p>' + 'link: ' + frase.link('test'));

// TIP: MATCH Nos devuelve la coincidencia si existe o NULL sino
document.write('<p>' + 'match: ' + frase.match('dos'));

// TIP: REPEAT Repite la frase n veces
document.write('<p>' + 'repeat: ' + frase.repeat(2));

// TIP: replace: permite reemplazar en la salida un segmento de cadena por otra
document.write('<p>' + 'replace: ' + frase.replace());
document.write('<p>' + 'replace: ' + frase.replace('uno', 'one'));

// TIP: slice: nos extrae una seccion de una cadena y nos devuelve una nueva
document.write('<p>' + 'slice: ' + frase.slice(7, 12));

// TIP: small: // XXX:  nos reduce el tamaño de fuente de nuestro texto
document.write('<p>' + 'small: ' + frase.small(7, 12));

// TIP: split: nos divide la cadena aplicando separadores coma "," a cada elemento indicado
//tb se puede indicar la cantidad de ocurrencias
document.write('<p>' + 'split: ' + frase.split('o'));
document.write('<p>' + 'split: ' + frase.split('o', 3));

// TIP: startsWith: indica si una cadena comienza con un caracter o una cadena indicada
// responde TRUE / FALSE
document.write('<p>' + 'startsWith: ' + frase.startsWith('que'));

// TIP: sub // XXX: OBSOLETO: muestra como subcadena
document.write('<p>' + 'sub: ' + frase.sub(2));

// TIP: substring: retorna la parte de la cadena entre los indices de inicio y fin
document.write('<p>' + 'substring: ' + frase.substring(1, 5));

// TIP: toLocaleLowerCase: nos convierte a misculas en el entorno local
document.write('<p>' + 'toLocaleLowerCase: ' + frase.toLocaleLowerCase());

// TIP: toLocaleUpperCase: nos convierte a mayusculas en el entorno local
document.write('<p>' + 'toLocaleUpperCase: ' + frase.toLocaleUpperCase());

// TIP: toLowerCase: nos convierte a minusculas
document.write('<p>' + 'toLowerCase: ' + frase.toLowerCase());

// TIP: toUpperCase: nos convierte a mayusculas
document.write('<p>' + 'toUpperCase: ' + frase.toUpperCase());

// TIP: trim: nos limpia los espacion no significativos de la cadena
document.write('<p>' + 'trim: ' + frase2.trim());
