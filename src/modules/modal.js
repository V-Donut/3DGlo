import { validateText, validatePhone, validateEmail } from './validate';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');
  const popupContent = modal.querySelector('.popup-content');
  const formBtn = modal.querySelector('.form-btn');
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

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let isError = false;

    if (nameInput.value === '' || phoneInput.value === '' || emailInput.value === '') {
      alert('Необходимо заполнить все поля!');
      return;
    }

    if (!validateText(nameInput.value)) {
      isError = true;
      alert('В поле Имя можно ввести только кириллицу, дефис или пробел');
    }

    if (!validatePhone(phoneInput.value)) {
      isError = true;
      alert('Введите корректный номер телефона');
    }

    if (!validateEmail(emailInput.value)) {
      isError = true;
      alert('Введите корректный E-mail');
    }

    if (!isError) {
      alert('Данные отправлены');
      nameInput.value = '';
      phoneInput.value = '';
      emailInput.value = '';
    }
  });
};

export default modal;