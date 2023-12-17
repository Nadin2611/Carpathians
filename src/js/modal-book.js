const bookTourButton = document.querySelector('.hero-modal-button');
const modalBookElement = document.querySelector('.modal-book');
let isModalOpen = false;

const openModal = () => {
  isModalOpen = true;
  modalBookElement.classList.remove('is-hidden');
};

bookTourButton.addEventListener('click', openModal);
