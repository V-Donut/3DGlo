import { replaceInvalidText, replaceInvalidPhone, replaceInvalidEmail } from './replace';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');
  const popupContent = modal.querySelector('.popup-content');
  const mobileWidth = 768;

  const nameInput = modal.querySelector('#form3-name');
  const phoneInput = modal.querySelector('#form3-phone');
  const emailInput = modal.querySelector('#form3-email');
  
  let idInterval;
  let counter = -30;
  let clientWidth = document.documentElement.clientWidth;

  const animateModal = () => {
    idInterval = requestAnimationFrame(animateModal);
    if (counter <= 10) {
      counter++;
      popupContent.style.top = counter + '%';
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (clientWidth >= mobileWidth) {
        popupContent.style.top = '-30%';
      }
      modal.style.display = 'block';

      if (clientWidth >= mobileWidth) {
        animateModal();
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    counter = -30;
  });

  nameInput.addEventListener('input', (e) => {
    e.target.value = replaceInvalidText(e.target.value);
  });

  phoneInput.addEventListener('input', (e) => {
    e.target.value = replaceInvalidPhone(e.target.value);
  });

  emailInput.addEventListener('input', (e) => {
    e.target.value = replaceInvalidEmail(e.target.value);
  });
};

export default modal;