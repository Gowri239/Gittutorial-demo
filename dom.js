console.log(document.domain);
console.log(document.title);
document.title=123;
console.log(document.all);
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var additems = document.getElementsByClassName('title');
additems[0].style.color='green';
var items = document.getElementsByClassName('list-group-item');
items[2].style.color='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}