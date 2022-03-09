import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const popupContent = modal.querySelector('.popup-content');
  const mobileWidth = 768;

  const nameInput = modal.querySelector('#form3-name');
  const phoneInput = modal.querySelector('#form3-phone');
  const emailInput = modal.querySelector('#form3-email');
  
  let clientWidth = document.documentElement.clientWidth;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (clientWidth >= mobileWidth) {
        popupContent.style.top = '-30%';
      }
      modal.style.display = 'block';

      if (clientWidth >= mobileWidth) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.top = (progress * 10) + '%';
          }
        });
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    }
  });
};

export default modal;