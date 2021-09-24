var swiper = new Swiper(".projects__slider", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".projectsPage__slider", {
    direction:'vertical',
    speed: 1000,
    slidesPerView: 1,
    mousewheel:true,
   
  });

  var swiper = new Swiper(".projectInfo__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2.5,
    spaceBetween: 59,
  });