import anime from 'animejs';

export const burgerEl = document.querySelector('.header-burger');
export const menuEl = document.querySelector('.header-nav');
export const heroEl = document.querySelector('.hero-container');

let isMenuOpen = false;

console.log(burgerEl);
console.log(menuEl);

// Функція відкриття  меню
export function openMenu() {
  if (!isMenuOpen) {
    menuEl.classList.remove('is-hidden');
    heroEl.classList.add('is-hidden');
    document.body.classList.add('no-scroll');
    // анімація появи  меню
    anime({
      targets: menuEl,
      translateX: ['100%', '0%'],
      duration: 300,
      easing: 'linear',
      begin: () => {
        menuEl.style.transform = 'translateX(100%)';
      },
      complete: () => {
        isMenuOpen = true;
      },
    });
  }
}

// Функція закриття  меню
export function closeMenu() {
  if (isMenuOpen) {
    document.body.classList.remove('no-scroll');
    // анімація закриття  меню
    anime({
      targets: menuEl,
      translateX: ['0%', '100%'],
      duration: 300,
      easing: 'linear',
      begin: () => {
        menuEl.style.transform = 'translateX(0%)';
      },
      complete: () => {
        isMenuOpen = false;
        menuEl.classList.add('is-hidden');
        heroEl.classList.remove('is-hidden');
      },
    });
  }
}
