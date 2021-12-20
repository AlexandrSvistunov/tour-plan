$(window).scroll(function() {
    $('.subscribe').bgscroll({
        direction: 'bottom', // направление bottom или top
        bgpositionx: 0, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
        debug: false, // Режим отладки
        min: 0, // минимальное положение (в %) на которое может смещаться фон
        max: 100 // максимальное положение (в %) на которое может смещаться фон
    });

});


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

