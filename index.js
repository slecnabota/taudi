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
  loop: false,
  navigation: {
    nextEl: '#certificateNext',
    prevEl: '#certificatePrev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
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
const certificateMSwiper = new Swiper('#certificateMSwiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
});

const certificateButtons = document.querySelectorAll('.certificate-btn');
certificateButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Открываем модальное окно
    openCertificateModal(index);
  });
});
function openCertificateModal(slideIndex) {
  // Открываем модальное окно
  const modal = document.getElementById('certificateModal');
  modal.style.display = 'flex';

  // Создаем Swiper внутри модального окна и устанавливаем начальный слайд
  const certificateMSwiper = new Swiper('#certificateMSwiper', {
    initialSlide: slideIndex,
    // Другие параметры Swiper...
  });

  // Добавляем обработчик события для закрытия модального окна
  const closeBtn = document.getElementById('certificateClose');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    // Уничтожаем Swiper при закрытии модального окна
    certificateMSwiper.destroy();
  });
}
$(document).ready(function () {
  $('#city-menu li').click(function () {
    // Убираем класс selected со всех li
    $('#city-menu li').removeClass('selected');

    // Добавляем класс selected к выбранному li
    $(this).addClass('selected');

    var markerId = $(this).data('marker');
    var marker = markers[markerId];

    if (marker && marker.markerObj) {
        marker.markerObj.openPopup();
    }
});
});

var markers = {
  marker1: {
    address: 'г.Астана',
    address2:'',
    phone: 'Телефон 1',
    coords: [51.169392, 71.449074] 
  },
  marker2: {
    address: 'г.Алматы',
    address2:'г. Алматы, пр. Сүйiнбай, 314',
    phone: 'Телефон 2',
    coords: [43.238949, 76.889709]  
  },
  marker3: {
    address: 'г.Абай',
    address2:'',
    phone: 'Телефон 2',
    coords: [49.631566, 72.853566]
  },
  marker4: {
    address: 'г.Балхаш',
    address2:'',
    phone: 'Телефон 1',
    coords: [46.840499, 74.980003]
  },
  marker5: {
    address: 'Жезказган',
    address2:'',
    phone: 'Телефон 2',
    coords: [47.782892, 67.709953]  
  },
  
  marker6: {
    address: 'г.Костанай',
    address2:'',
    phone: 'Телефон 1',
    coords: [53.214123, 63.635843]
  },
  marker7: {
    address: 'г.Кокшетау',
    address2:'',
    phone: 'Телефон 2',
    coords: [53.283156, 69.378744]  
  },
  marker8: {
    address: 'г.Караганда',
    address2:'',
    phone: 'Телефон 1',
    coords: [49.802392, 73.096834]  
  },
  marker9: {
    address: 'г.Караганда',
    address2:'',
    phone: 'Телефон 2',
    coords: [49.802392, 73.096834]  
  },


  marker10: {
    address: 'г.Петропавловск',
    address2:'',
    phone: 'Телефон 1',
    coords: [54.875900, 69.162378] 
  },
  marker11: {
    address: 'г.Сарань',
    address2:'',
    phone: 'Телефон 2',
    coords: [51.187957, 51.371245]   
  },
  marker12: {
    address: 'г.Талдыкорган',
    address2:'',
    phone: 'Телефон 1',
    coords: [45.015850, 78.377134]
  },
  marker13: {
    address: 'г.Темиртау',
    address2:'',
    phone: 'Телефон 2',
    coords:[50.051162, 72.964872]
  },


  marker14: {
    address: 'г.Шатинск',
    address2:'',
    phone: 'Телефон 1',
    coords: [52.026777, 76.920918]
  },
  marker15: {
    address: 'г.Щучинск',
    address2:'',
    phone: 'Телефон 2',
    coords: [52.933681, 70.199899]  
  },
  marker16: {
    address: 'г.Экибастуз',
    address2:'',
    phone: 'Телефон 1',
    coords: [51.709416, 75.322932]
  },
};

var map = L.map('map').setView([48.0196, 66.9237], 5);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for (var markerId in markers) {
  var marker = markers[markerId];
  marker.markerObj = L.marker(marker.coords).addTo(map);
  marker.markerObj.bindPopup(`<h3>Официальный дистрибьютор по ${marker.address} ТОО «TAUDI»</h3> ` + 
  '<p>marker.address2</p>' + 
  `
  <div class="address-tel">
    <img src="assets/svg/tel-map.svg">
    <div class="adress-tel__inner">
      <a href="tel:+77076622515">+7-707-662-25-15</a>
      <a href="tel:+77078208880">+7-707-820-88-805</a>
    </div>
  </div>
  
  `)
}