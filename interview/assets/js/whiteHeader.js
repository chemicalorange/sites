var firstScreenHeight = document.querySelector('.first-screen').clientHeight - 50;
var header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= firstScreenHeight){
        header.classList.add('white');
    }else{
        header.classList.remove('white');
    }
});