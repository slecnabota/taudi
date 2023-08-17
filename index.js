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
    300: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 1023px
    1199: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});


// product open Modal Cards
function initModalSlider() {
  return new Swiper('#modalSwiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '#modalNext',
      prevEl: '#modalPrev',
    },
  });
}
let modalSlider = initModalSlider();

const slides = document.querySelectorAll(".product-slide");

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    modalSlider.destroy();
    modalSlider = initModalSlider();
    modalSlider.slideTo(index);
    openModal();
  });
});

const closeModalButton = document.getElementById("modalClose");
closeModalButton.addEventListener("click", closeModal);

function openModal() {
  const modal = document.getElementById("productModal");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("productModal");
  modal.style.display = "none";
}

const certificate = new Swiper('#certificateSwiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '#certificateNext',
    prevEl: '#certificatePrev',
  },
  breakpoints: {
    320: {

    },
    600: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1601: {
      slidesPerView: 2,
      spaceBetween: 100,
    }
  }
});
