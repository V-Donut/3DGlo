const replace = () => {
  const nameFields = document.getElementsByName('user_name');
  const emailFields = document.getElementsByName('user_email');
  const phoneFields = document.getElementsByName('user_phone');
  const messageFields = document.getElementsByName('user_message');

  const replaceInvalidName = (name) => {
    return name.replace(/[^а-яА-Я\s]/g, '');
  };

  const replaceInvalidPhone = (phone) => {
    return phone.replace(/[^+\d-\(\)]/g, '');
  };

  const replaceInvalidEmail = (email) => {
    return email.replace(/[^a-zA-Z0-9-_@\.!~\*']/g, '');
  };

  const replaceInvalidMessage = (message) => {
    return message.replace(/[^а-яА-Я0-9-\.,!\?:;\(\)«»"\s]/g, '');
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

