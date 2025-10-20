new Swiper(".landing-swiper", {
  speed: 1600,
  parallax: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".ads-swiper", {
  // Autoplay مستمر
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // حركة دائرية مستمرة
  loop: true,

  // سرعة الانتقال
  speed: 800,

  // التأثير
  effect: "slide",

  // عدد الشرائح المعروضة
  slidesPerView: 1,
  spaceBetween: 20,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Responsive
  // breakpoints: {
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  // },
});
