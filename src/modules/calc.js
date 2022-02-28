const calc = () => {
  const calcBlock = document.querySelector('.calc-block');
  const calcSquare = calcBlock.querySelector('.calc-square');
  const calcCount = calcBlock.querySelector('.calc-count');
  const calcDay = calcBlock.querySelector('.calc-day');

  calcSquare.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/, '');
  });

  calcCount.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/, '');
  });

  calcDay.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D+/, '');
  });
};

export default calc;
