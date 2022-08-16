var itemsList = document.querySelector('#items');
console.log(itemsList.parentElement);
itemsList.parentElement.style.backgroundColor='yellow';

console.log(itemsList.children);
console.log(itemsList.firstChild);
itemsList.firstElementChild.textContent='whose';
itemsList.lastElementChild.textContent='HEllo';
console.log(itemsList.nextSibling);
console.log(itemsList.nextElementSibling);
console.log(itemsList.previousSibling);
console.log(itemsList.previousElementSibling);
itemsList.previousElementSibling.style.color='red';

// create a new element
var newdiv = document.createElement('div');
newdiv.setAttribute('id','hello1');
newdiv.className='Hello';
newdiv.title='newElement';
//create a text node
var newdivText = document.createTextNode('Hello world');
newdiv.appendChild(newdivText);
//placed it before h1
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newdiv,h1);

var ul = document.querySelector('.items');
ul.firstElementChild.textcontent = 'HEllo';






