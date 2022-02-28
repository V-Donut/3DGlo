import { replaceInvalidText, replaceInvalidPhone, replaceInvalidEmail } from './replace';

const request = () => {
  const form1 = document.getElementById('form1');
  const nameInput = form1.querySelector('#form1-name');
  const emailInput = form1.querySelector('#form1-email');
  const phoneInput = form1.querySelector('#form1-phone');

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

export default request;
