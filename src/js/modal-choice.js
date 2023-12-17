const moreDetailsButtons = document.querySelectorAll('.tours-item-button');
const modalElHoverla = document.querySelector('.hoverla');
const modalElBukovel = document.querySelector('.bukovel');
const modalElCarpathians = document.querySelector('.carpathians');

let isModalOpen = false;

moreDetailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');

    if (modalId === 'hoverla') {
      openModal(modalElHoverla);
    } else if (modalId === 'bukovel') {
      openModal(modalElBukovel);
    } else if (modalId === 'carpathians') {
      openModal(modalElCarpathians);
    }
  });
});

const openModal = modalElement => {
  isModalOpen = true;
  modalElement.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  const closeButton = modalElement.querySelector('.icon-close-modal');

  closeButton.removeEventListener('click', closeModal);
  closeButton.addEventListener('click', closeModal);
};

const closeModal = () => {
  isModalOpen = false;
  modalElHoverla.classList.add('is-hidden');
  modalElBukovel.classList.add('is-hidden');
  modalElCarpathians.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
};

const modalElButtons = document.querySelectorAll('.tours-button');

modalElButtons.forEach(button => {
  button.addEventListener('click', closeModal);
});
