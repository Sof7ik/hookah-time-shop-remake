document.addEventListener('DOMContentLoaded', e => {
    setTimeout( () => {
        const swiper = new Swiper('.swiper-container', {
            speed: 400,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                985: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                746: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                0: {
                    spaceBetween: 25,
                    slidesPerView: 'auto',
                    observeParents: true,
                    observer: true
                }
            }
        });
    }, 500)
})