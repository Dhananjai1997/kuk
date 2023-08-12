var swiper = new Swiper(".slide-content", {
  spaceBetween: 25,
  speed: 1000,
  centerSlide: 'true',
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200:{
      slidesPerView: 3,
    },
  },
});

var swiper1 = new Swiper(".slide-content-1", {
  spaceBetween: 25,
  speed: 1000,
  centerSlide: 'true',
  autoplay: {
    delay: 2000,
    reverseDirection:true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 4,
    },
  },
});