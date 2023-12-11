import './js/header';
import './js/burger';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './css/styles.css';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const roundButtons = document.querySelectorAll('.reviews-button');
  const backEl = document.querySelectorAll('.back-container');
  const frontEl = document.querySelectorAll('.front-container');

  console.log(roundButtons);
  console.log(backEl);
  console.log(frontEl);

  roundButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      if (!backEl[index].classList.contains('is-hidden')) {
        backEl[index].classList.add('is-hidden');
        button[index].style.display = 'none';
      } else {
        frontEl[index].classList.add('is-hidden');
        backEl[index].classList.remove('is-hidden');
      }
    });
  });

  backEl.forEach((element, index) => {
    element.addEventListener('click', function () {
      if (!backEl[index].classList.contains('is-hidden')) {
        backEl[index].classList.add('is-hidden');
        frontEl[index].classList.remove('is-hidden');
        roundButtons[index].style.display = 'block';
      }
    });
  });
});
