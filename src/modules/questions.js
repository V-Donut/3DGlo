import { replaceInvalidText, replaceInvalidPhone, replaceInvalidEmail } from './replace';

const questions = () => {
  const form2 = document.getElementById('form2');
  const nameInput = form2.querySelector('#form2-name');
  const emailInput = form2.querySelector('#form2-email');
  const phoneInput = form2.querySelector('#form2-phone');
  const messageInput = form2.querySelector('#form2-message');

  nameInput.addEventListener('input', (e) => {
    e.target.value = replaceInvalidText(e.target.value);
  });

  phoneInput.addEventListener('input', (e) => {
    e.target.value = replaceInvalidPhone(e.target.value);
  });

  emailInput.addEventListener('input', (e) => {
    e.target.value = replaceInvalidEmail(e.target.value);
  });

  messageInput.addEventListener('input', (e) => {
    e.target.value = replaceInvalidText(e.target.value);
  });
};

export default questions;
