let swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
     el: ".swiper-pagination",
     clickable: true,
    },
    navigator: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
})
