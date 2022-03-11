import { regExpName, regExpPhone, regExpEmail, regExpMessage } from './replace.js';
import { unBlockBody } from './helpers';

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const modal = document.querySelector('.popup');
  const statusBlock = document.createElement('div');
  statusBlock.style.color = '#19b5fe';
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с Вами свяжется!';

  const validate = (list) => {
    let success = true;

    list.forEach(input => {
      const attribute = input.getAttribute('name').replace('user_', '');
      const value = input.value;

      if (attribute === 'name' && (value.match(regExpName) !== null || value.length < 2)) {
        success = false;
      } else if (attribute === 'phone' && (value.match(regExpPhone) !== null || value.length < 6)) {
        success = false;
      } else if (attribute === 'email' && value.match(regExpEmail) !== null) {
        success = false;
      } else if (attribute === 'message' && value.match(regExpMessage) !== null) {
        success = false;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText;

          formElements.forEach(input => {
            input.value = '';
          });

          setTimeout(() => {
            statusBlock.textContent = '';
            modal.style.display = 'none';
            unBlockBody();
          }, 4000);
        })
        .catch(error => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = '';
      alert('Данные не валидны!');
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму на место!');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
  
};

export default sendForm;
