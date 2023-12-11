import { openMenu, closeMenu, burgerEl, menuEl } from './burger';

const navItems = document.querySelectorAll('.header-nav-item');

burgerEl.addEventListener('click', () => {
  if (menuEl.classList.contains('is-hidden')) {
    openMenu();
  } else {
    closeMenu();
  }
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    closeMenu();
  });
});

// Перевірка ширини вікна
function checkWindowWidth() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1440) {
    burgerEl.style.display = 'none';
  } else {
    burgerEl.style.display = 'block';
  }
}

checkWindowWidth();

window.addEventListener('resize', checkWindowWidth);
