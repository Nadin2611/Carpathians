const bookTourButton = document.querySelector('.hero-modal-button');
const modalBookElement = document.querySelector('.modal-book');
const closeModalButton = document.querySelector('.modal-btn-close');

let isModalOpen = false;

const openModal = () => {
  isModalOpen = true;
  modalBookElement.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  closeModalButton.removeEventListener('click', closeModal);
  closeModalButton.addEventListener('click', closeModal);
};

const closeModal = () => {
  if (isModalOpen) {
    modalBookElement.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    isModalOpen = false;
  }
};

bookTourButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
