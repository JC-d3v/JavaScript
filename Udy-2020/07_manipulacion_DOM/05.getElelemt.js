// TIP: __.getElementById() : recupera un elemento por el ID
console.log(`document.getElementById() : `, document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
headerTitle.textContent = 'saludos humano';

var titleGroup = document.getElementById('titleGroup');
titleGroup.innerText = 'Adios humano';

var itemsID = document.getElementById('titleItems');
itemsID.innerHTML = '<h3>Bye</h3>';

// TIP: __.getElementsByClassName() : recupera elementos por nombre de clase
// me recupera los items como array
var items = document.getElementsByClassName('list-group-item');
console.log(`__.getElementsByClassName`, items);
items[0].innerText = 'primer item';
items[1].innerHTML = '<h3>xxx item</h3>';

// TIP: __..getElementsByTagName('li') : recupera todos los elementos por el tag
//recupera en forma de array
var tags01 = document.getElementsByTagName('li');
tags01[2].textContent = 'by tag xx';
