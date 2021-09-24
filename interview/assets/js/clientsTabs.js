var image = document.querySelector('.clients__image');
var links = document.querySelectorAll('.menu__item a');

for(let link of links){
    link.addEventListener('click', (event)=>{
        event.preventDefault();
        let path = link.getAttribute('href');
        image.style.backgroundImage = 'url(assets/img/'+path+')';
    });
}