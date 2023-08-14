const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;


if (burger && menu) {
    const aduptiveMenu = burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('no_scroll');
    })
}

export default aduptiveMenu;