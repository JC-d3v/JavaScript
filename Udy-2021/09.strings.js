let frase = 'que es uno que no es uno si no son dos';

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

// TIP: Nos devuelve la coincidencia si existe o NULL sino
document.write('<p>' + 'match: ' + frase.match('dors'));
