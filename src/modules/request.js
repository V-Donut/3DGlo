import { validateText, validatePhone, validateEmail } from './validate';

const request = () => {
  const form1 = document.getElementById('form1');
  const nameInput = form1.querySelector('#form1-name');
  const emailInput = form1.querySelector('#form1-email');
  const phoneInput = form1.querySelector('#form1-phone');
  const formBtn = form1.querySelector('.form-btn');

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

    if (!validateEmail(emailInput.value)) {
      isError = true;
      alert('Введите корректный E-mail');
    }

    if (!validatePhone(phoneInput.value)) {
      isError = true;
      alert('Введите корректный номер телефона');
    }

    if (!isError) {
      alert('Данные отправлены');
      nameInput.value = '';
      phoneInput.value = '';
      emailInput.value = '';
    }
  });
};

export default request;
