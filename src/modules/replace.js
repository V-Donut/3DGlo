const regExpName = /[^а-яА-Я\s]+/g;
const regExpPhone = /[^+\d-\(\)]+/g;
const regExpEmail = /[^a-zA-Z0-9-_@\.!~\*']+/g;
const regExpMessage = /[^а-яА-Я0-9-\.,!\?:;\(\)«»"\s]+/g;

export {
  regExpName,
  regExpPhone,
  regExpEmail,
  regExpMessage
};

const replace = () => {
  const nameFields = document.getElementsByName('user_name');
  const emailFields = document.getElementsByName('user_email');
  const phoneFields = document.getElementsByName('user_phone');
  const messageFields = document.getElementsByName('user_message');

  const replaceInvalidName = (name) => {
    return name.replace(regExpName, '');
  };

  const replaceInvalidPhone = (phone) => {
    return phone.replace(regExpPhone, '');
  };

  const replaceInvalidEmail = (email) => {
    return email.replace(regExpEmail, '');
  };

  const replaceInvalidMessage = (message) => {
    return message.replace(regExpMessage, '');
  };

  nameFields.forEach(field => {
    field.addEventListener('input', (e) => {
      e.target.value = replaceInvalidName(e.target.value);
    });
  });

  emailFields.forEach(field => {
    field.addEventListener('input', (e) => {
      e.target.value = replaceInvalidEmail(e.target.value);
    });
  });

  phoneFields.forEach(field => {
    field.addEventListener('input', (e) => {
      e.target.value = replaceInvalidPhone(e.target.value);
    });
  });

  messageFields.forEach(field => {
    field.addEventListener('input', (e) => {
      e.target.value = replaceInvalidMessage(e.target.value);
    });
  });
};
 
export default replace;
