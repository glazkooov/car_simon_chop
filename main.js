document.querySelectorAll('.accordion_item-header').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const item = this.closest('.accordion_item');
        const isActive = item.classList.contains('active');
        
        // Закрываем все элементы, кроме текущего
        document.querySelectorAll('.accordion_item').forEach(el => {
            if (el !== item) {
                el.classList.remove('active');
                const content = el.querySelector('.accordion_item-content');
                const header = el.querySelector('.accordion_item-header');
                header.setAttribute('aria-expanded', 'false');
                content.setAttribute('aria-hidden', 'true');
            }
        });

        // Переключаем состояние текущего элемента
        item.classList.toggle('active', !isActive);
        
        // Обновляем ARIA-атрибуты
        const content = item.querySelector('.accordion_item-content');
        const ariaState = !isActive;
        this.setAttribute('aria-expanded', ariaState);
        content.setAttribute('aria-hidden', !ariaState);
    });
});



document.addEventListener("DOMContentLoaded", function () {
  const reviewsSwiper = new Swiper('.reviews-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,

      initialSlide: 2,

      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });


  const heroSwiper = new Swiper('.hero_swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    autoHeight: true,

});


const newsSwiper = new Swiper('.news_swiper', {
    slidesPerView: 'auto',

    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
   

});
  
});

window.addEventListener('resize', () => {
    swiper.update();
});
  


// Открытие модального окна
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.modal_overlay').classList.add('active');
        document.querySelector('.modal').style.transform = 'scale(1)';
    });
});

// Закрытие модального окна
document.querySelector('.modal img').addEventListener('click', function() {
    closeModal();
});

document.querySelector('.modal_overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Функция закрытия модального окна
function closeModal() {
    document.querySelector('.modal_overlay').classList.remove('active');
    document.querySelector('.modal').style.transform = 'scale(0.9)';
}

// Валидация формы
document.querySelector('.modal_form form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]');
    const phone = this.querySelector('input[type="tel"]');

    // Валидация имени
    if (!name.value.trim()) {
        alert('Пожалуйста, введите ваше имя');
        return;
    }

    // Валидация телефона
    if (!phone.value.trim() || !/^[\d\+]{11,15}$/.test(phone.value)) {
        alert('Пожалуйста, введите корректный номер телефона');
        return;
    }

    // Отправка формы (заглушка)
    this.reset();
    closeModal();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
});

// Закрытие по Esc
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});



const burger = document.querySelector('.burger');
const menu = document.querySelector('.mobile-menu');
const nav_links = document.querySelectorAll('.nav-mobile a');

burger.addEventListener('click', () => {
menu.classList.toggle('active');
burger.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
        burger.classList.remove('active');
    }

})


nav_links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
      menu.classList.remove('active');
      burger.classList.remove('active');
    });
  });