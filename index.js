const menu_click = document.querySelector('.menu__section__hamburguer');
const main_sidebar = document.querySelector('.main__sidebar');
const closeBtn = document.querySelector('.main__sidebar__menu__close');
const image = document.querySelector('.main__content__image')
const body = document.body;

menu_click.addEventListener('click', () => {
    main_sidebar.style.display = 'block';
    body.style.background = '#000000bf'
    image.style.background = ''
})

closeBtn.addEventListener('click', () => {
    main_sidebar.style.display = 'none';
    body.style.background = '#ffffff'
    image.style.background = '';
})

