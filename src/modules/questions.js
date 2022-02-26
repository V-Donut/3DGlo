import { validateText, validatePhone, validateEmail } from './validate';

const questions = () => {
  const form2 = document.getElementById('form2');
  const nameInput = form2.querySelector('#form2-name');
  const emailInput = form2.querySelector('#form2-email');
  const phoneInput = form2.querySelector('#form2-phone');
  const messageInput = form2.querySelector('#form2-message');
  const formBtn = form2.querySelector('.form-btn');

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let isError = false;

    if (nameInput.value === '' || phoneInput.value === '' || emailInput.value === '' || messageInput.value === '') {
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

    if (!validateText(messageInput.value)) {
      isError = true;
      alert('В поле Сообщение можно ввести только кириллицу, дефис или пробел');
    }

    if (!isError) {
      alert('Данные отправлены');
      nameInput.value = '';
      phoneInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    }
  });
};

export default questions;
