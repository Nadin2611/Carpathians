import './js/header';
import './js/burger';
import './js/modal-choice';
import './js/modal-book';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './css/styles.css';

export const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const roundButtons = document.querySelectorAll('.reviews-button');
  const backEl = document.querySelectorAll('.back-container');
  const frontEl = document.querySelectorAll('.front-container');

  roundButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
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
    element.addEventListener('click', () => {
      if (!backEl[index].classList.contains('is-hidden')) {
        backEl[index].classList.add('is-hidden');
        frontEl[index].classList.remove('is-hidden');
        roundButtons[index].style.display = 'block';
      }
    });
  });
});
