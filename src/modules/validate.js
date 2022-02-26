export const validateText = (str) => {
  return !/[^а-яА-Я-\s]/g.test(str);
};

export const validatePhone = (phone) => {
  return /^\d{1}\(?-?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g.test(phone);
};

export const validateEmail = (email) => {
  return /^([a-zA-Z0-9-_!~\*\.']+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})$/g.test(email);
};

export default {
  validateText,
  validatePhone,
  validateEmail
};
