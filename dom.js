console.log(document.domain);
console.log(document.title);
document.title=123;
console.log(document.all);
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var additems = document.getElementsByClassName('title');
additems[0].style.color='green';