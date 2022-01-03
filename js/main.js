$(document).ready(function() {

    // **************Подключаем parallax эффект***********

    $(window).scroll(function() {
        $(".subscribe").bgscroll({
            direction: "bottom", // направление bottom или top
            bgpositionx: 0, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
            debug: false, // Режим отладки
            min: 0, // минимальное положение (в %) на которое может смещаться фон
            max: 100, // максимальное положение (в %) на которое может смещаться фон
        });
    });

    //
    // ****************Подключаем 1-й слайдер*************

    const hotelSwiper = new Swiper(".hotel__slider", {
        // Optional parameters

        loop: true,

        // // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: ".hotel__swiper-button--next",
            prevEl: ".hotel__swiper-button--prev",
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

    // **************Подключаем 2-й слайдер*************

    const reviewsSwiper = new Swiper(".reviews-slider", {
        // Optional parameters

        loop: true,

        // // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: ".reviews__swiper-button--next",
            prevEl: ".reviews__swiper-button--prev",
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


    // **************Мобильное всплывающее меню********

    var menuButton = document.querySelector(".menu-burger");
    menuButton.addEventListener("click", function() {
        document
            .querySelector(".header-nav")
            .classList.toggle("header-nav--mobile");
    });



    // ********Модальное всплывающее окно*********

    var modalButtton = $("[data-toggle=modal]"); // Ищем кнопку вызова окна
    var closeModalButtton = $(".booking-modal__close"); // Ищем крестик close

    // Отслеживаем клик по кнопке вызова окна
    modalButtton.on('click', openModal);

    // Отслеживаем клик по крестику close
    closeModalButtton.on('click', closeModal);

    // Функция открытия окна
    function openModal() {
        var modalOverlay = $(".modal__overlay"); //Находим оверлей
        var bookingModal = $(".booking-modal"); // Находим модальное окно
        modalOverlay.addClass('modal__overlay--visible'); // Навешиваем класс-модификатор
        bookingModal.addClass('booking-modal--visible'); // Навешиваем класс-модификатор
    }

    // Функция закрытия окна
    function closeModal() {
        var modalOverlay = $(".modal__overlay"); //Находим оверлей
        var bookingModal = $(".booking-modal"); // Находим модальное окно
        modalOverlay.removeClass('modal__overlay--visible'); // Убираем класс-модификатор
        bookingModal.removeClass('booking-modal--visible'); // Убираем класс-модификатор
    }

    // Закрываем окно клавишей ESC
    $(document).on('keydown', function(event) {
        if (event.keyCode == 27) {
            closeModal();
        }
    });



    // *************Валидация форм*************

    // Валидация модального окна-формы
    $('.validate-form').each(function() {
        $(this).validate({

            errorClass: "invalid",

            messages: {
                name: {
                    required: "Please enter a name",
                    minlength: "Your name must be at least 2 characters"
                },
                phone: "Phone is required",
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                }
            }
        })

    });


    // *************Валидация телефона*************
    $(".mask-phone").mask("+7 (999) 999 - 9999");
});