//DOM TRAVERSING

//Tipos de nodos
// 1.- Node.ELEMENT_NODE            An Element node like <p> or <div>.
// 2.- Node.ATTRIBUTE_NODE          An Attribute of an Element.
// 3.- Node.TEXT_NODE 	            The actual Text inside an Element or Attr.
// 4.- Node.CDATA_SECTION_NODE      A CDATASection, such as <!CDATA[[ … ]]>.
// 7.- Node.PROCESSING_INSTRUCTION_NODE    A ProcessingInstruction of an XML document, such as <?xml-stylesheet … ?>.
// 8.- Node.COMMENT_NODE            A Comment node, such as <!-- … -->.
// 9.- Node.DOCUMENT_NODE           A Document node.
//10.- Node.DOCUMENT_TYPE_NODE      A DocumentType node, such as <!DOCTYPE html>.
//11.- Node.DOCUMENT_FRAGMENT_NODE  A DocumentFragment node.

const lista = document.querySelector('#lista');

console.log(`Hijos de la lista`, lista.children);

console.log(`padre de la lista`, lista.parentElement);

console.log(`hermano previo a la lista`, lista.previousSibling);
//hermano previo tipo nodo de texto H2

console.log(`hermano siguiente de la lista`, lista.nextSibling);
