export const replaceInvalidText = (text) => {
  return text.replace(/[^а-яА-Я-\s]/g, '');
};

export const replaceInvalidPhone = (phone) => {
  return phone.replace(/[^\d-\(\)]/g, '');
};

export const replaceInvalidEmail = (email) => {
  return email.replace(/[^a-zA-Z0-9-_@\.!~\*']/g, '');
};

export default {
  replaceInvalidText,
  replaceInvalidPhone,
  replaceInvalidEmail
};
