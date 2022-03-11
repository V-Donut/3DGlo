import { animate, blockBody, unBlockBody } from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const popupContent = modal.querySelector('.popup-content');
  const mobileWidth = 768;
  
  let clientWidth = document.documentElement.clientWidth;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (clientWidth >= mobileWidth) {
        popupContent.style.top = '-30%';
      }
      modal.style.display = 'block';
      blockBody();

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
      unBlockBody();
    }
  });
};

export default modal;
