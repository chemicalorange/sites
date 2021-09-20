
var header = document.querySelector('.header');
var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.menu');
burger.addEventListener('click', ()=>{
    menu.classList.toggle('show');
    header.classList.toggle('forMenu');
    document.querySelector('body').classList.toggle('lock');
    burger.classList.toggle('active');
    
});

