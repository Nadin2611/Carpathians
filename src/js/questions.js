// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.querySelector('.questions-form');
//   const submitButton = document.querySelector('.questions-button');
//   const nameInput = document.getElementById('userName');
//   const phoneInput = document.getElementById('userNumber');
//   const questionInput = document.querySelector(
//     '.questions-form [name="userquestion"]'
//   );

//   function validateInputs() {
//     const isNameValid =
//       /^[a-zA-Zа-яА-ЯІіЇїЄє ]+(([' \-][a-zA-Zа-яА-ЯІіЇїЄє ])?[a-zA-Zа-яА-ЯІіЇїЄє])+$/.test(
//         nameInput.value
//       );
//     const isPhoneValid = /^\+?[0-9\s\-\(\)]+$/.test(phoneInput.value);
//     const isQuestionsValid = questionInput.value.trim() !== '';

//     submitButton = !(isNameValid && isPhoneValid && isQuestionsValid);
//   }

//   nameInput.addEventListener('input', validateInputs);
//   phoneInput.addEventListener('input', validateInputs);
//   questionInput.addEventListener('input', validateInputs);

//   validateInputs();

//   form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     alert('Ваші дані були відправлені.');

//     // Якщо вам потрібно перенаправити користувача на іншу сторінку, використовуйте, наприклад, window.location.href
//     // window.location.href = 'нова-сторінка.html';
//   });
// });
