const menu = document.querySelector('.curtainmenu');
console.log(menu);

function menuClose() {
  menu.style.display = 'none';
}

function menuOpen() {
  menu.style.display = 'flex';
}

const closer = document.querySelector('#closebutton');
console.log(closer);

closer.addEventListener('click', menuClose);

const opener = document.querySelector('#mobilemenubutton');

opener.addEventListener('click', menuOpen);
