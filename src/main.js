import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './css/styles.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const buttonNext = document.querySelector('.swiper-button-next');
  const buttonPrev = document.querySelector('.swiper-button-prev');
  console.log(buttonNext);
  console.log(buttonPrev);

  buttonNext.addEventListener('click', () => {
    swiper.slideNext();
  });
  buttonPrev.addEventListener('click', () => {
    swiper.slidePrev();
  });

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
