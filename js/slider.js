document.addEventListener('DOMContentLoaded', e => {
    const swiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 23,
        slidesPerView: 4,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            985: {
                slidesPerView: 4,
            },
            745: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 2,
            }
        }
    });
})