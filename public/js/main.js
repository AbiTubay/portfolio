const menuButton = document.querySelector('#menuButton');
const flyoutMenu = document.querySelector('#flyoutMenu');
const menu = document.querySelector('#menu');
const menuItems = document.querySelectorAll('.menu-item');

menuButton.addEventListener('click', toggleMenu);
menuItems.forEach(item =>
    item.addEventListener('click', toggleMenu));

let showMenu = false;

function toggleMenu() {
    if(!showMenu){
        menuButton.classList.add('close');
        flyoutMenu.classList.add('show');
        menu.classList.add('show');
        menuItems.forEach(item => {
            item.classList.add('show');
        });
        showMenu = true;
    }else{
        menuButton.classList.remove('close');
        flyoutMenu.classList.remove('show');
        menu.classList.remove('show');
        menuItems.forEach(item => {
            item.classList.remove('show');
        });
        showMenu = false;
    }
}