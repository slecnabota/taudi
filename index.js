//menu
function openMenu() {
    let menu = document.querySelector(".header-burger")
    let icon = document.querySelector(".header__menu")
    icon.classList.toggle("active")
    menu.classList.toggle("active")
}
//swiper products
const product = new Swiper('#productSwiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '#productNext',
      prevEl: '#productPrev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 600px
        600: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 1023px
        1023: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
  });