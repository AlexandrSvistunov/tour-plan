const hotelSwiper = new Swiper('.hotel__slider', {
  // Optional parameters
  
  loop: true,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
    navigation: {
    nextEl: '.hotel__swiper-button--next',
    prevEl: '.hotel__swiper-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  //  And if we need scrollbar
  //  scrollbar: {
  //    el: '.swiper-scrollbar',
  //  },
});



const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  
  loop: true,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
    navigation: {
    nextEl: '.reviews__swiper-button--next',
    prevEl: '.reviews__swiper-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  //  And if we need scrollbar
  //  scrollbar: {
  //    el: '.swiper-scrollbar',
  //  },
});
