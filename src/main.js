import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import './css/styles.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const buttonNext = document.querySelector('.swiper-button-next');
  const buttonPrev = document.querySelector('.swiper-button-prev');

  buttonNext.addEventListener('click', () => {
    swiper.slideNext();
  });
  buttonPrev.addEventListener('click', () => {
    swiper.slidePrev();
  });
});

const roundButton = document.querySelector('.reviews-button');
const backEl = document.querySelector('.back-container');

roundButton.addEventListener('click', () => {
  backEl.classList.toggle('round');
});
