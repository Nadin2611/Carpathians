const moreDetailsButtons = document.querySelectorAll('.tours-item-button');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let isModalOpen = false;

const timeout = 800;

if (moreDetailsButtons.length > 0) {
  for (let index = 0; index < moreDetailsButtons.length; index++) {
    const button = moreDetailsButtons[index];
    button.addEventListener('click', openModal);
  }
}

const modalCloseButtons = document.querySelectorAll('.more-details-close-btn');
if (modalCloseButtons.length > 0) {
  for (let index = 0; index < modalCloseButtons.length; index++) {
    const element = modalCloseButtons[index];
    element.addEventListener('click', closeModal);
  }
}

// const modalEl = document.querySelector('.backdrop');
// const moreDetailsButton = document.querySelector('.tours-item-button');
// let isModalOpen = false;

// export function openModal() {
//   console.log('Opening modal');
//   if (!isModalOpen) {
//     modalEl.classList.remove('is-hidden');

//     console.log(moreDetailsButton);
//     isModalOpen = true;
//     console.log(isModalOpen);
//   }
// }

// export function closeModal() {
//   if (isModalOpen) {
//     modalEl.classList.add('is-hidden');
//     isModalOpen = false;
//   }
// }

// moreDetailsButton.addEventListener('click', openModal);

// const moreDetailsButton = document.querySelector('.tours-item-button');
// moreDetailsButton.addEventListener('click', openModal());

// // Присвоєння подій на кнопки відкриття модального вікна
// const moreDetailsButtons = document.querySelectorAll('.tours-item-button');
// moreDetailsButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log(moreDetailsButtons);
//     openModal();
//     console.log(isModalOpen);
//   });
// });

// moreDetailsButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log(modalEl);

//     if (!isModalOpen) {
//       modalEl.classList.remove('is-hidden');
//       document.body.classList.add('no-scroll');

//       anime({
//         targets: modalEl,
//         translateX: ['100%', '0%'],
//         duration: 300,
//         easing: 'linear',
//         begin: () => {
//           modalEl.style.transform = 'translateX(100%)';
//         },
//         complete: () => {
//           isModalOpen = true;
//         },
//       });
//     }
//   });
// });

// // Закриття модального вікна при кліку на хрестик чи поза вікном
// var modals = document.querySelectorAll('.modal');
// modals.forEach(function (modal) {
//   modal.addEventListener('click', function (event) {
//     if (event.target === modal || event.target.className === 'close') {
//       modal.style.display = 'none';
//       // Відновіть автовідтворення Swiper після закриття модального вікна, якщо це необхідно
//       // mySwiper.autoplay.start();
//     }
//   });
// });
