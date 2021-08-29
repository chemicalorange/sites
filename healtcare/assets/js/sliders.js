

  // init Swiper:
  var swiper = new Swiper(".ourService__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop:true,
    
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        // when window width is >= 320px
       
        
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },

        980: {
            slidesPerView: 3,
            spaceBetween: 40
          }
      }
    
  });


  var swiper = new Swiper(".testmonials__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop:true,
    
    loopFillGroupWithBlank: true,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
       
        
        680: {
          slidesPerView: 2,
          spaceBetween: 40
        },

        980: {
            slidesPerView: 3,
            spaceBetween: 40
          }
      }
    
  });