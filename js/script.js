"use strict"

// const reviewsSwiper = document.querySelector('.swiper-trainers')

// if (reviewsSwiper) {
//    const swiper = new Swiper('.swiper-trainers', {
//     // Optional parameters
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
//    });
// }

const membershipContainer = document.querySelector('.membership__items');

if (window.innerWidth <= 768) {
  const swiperMembership = new Swiper('.membership__items', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  membershipContainer.classList.add('swiper-wrapper');
  const membershipItems = document.querySelectorAll('.membership__item');
  membershipItems.forEach(item => item.classList.add('swiper-slide'));
}

// Trainers Section Swiper
const reviewsSwiper = document.querySelector('.swiper-trainers');

if (reviewsSwiper) {
  const swiper = new Swiper('.swiper-trainers', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}

// Вибір елементів
const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__list');

// Додавання обробника кліків
burger.addEventListener('click', () => {
  menuList.classList.toggle('active'); // Показати/сховати меню
  burger.classList.toggle('active'); // Змінити стан бургер-кнопки
});



