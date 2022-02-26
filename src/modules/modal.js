const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');
  const popupContent = modal.querySelector('.popup-content');
  const mobileWidth = 768;
  
  let idInterval;
  let counter = -30;
  let clientWidth = document.documentElement.clientWidth;

  const animateModal = () => {
    idInterval = requestAnimationFrame(animateModal);
    if (counter <= 10) {
      counter++;
      popupContent.style.top = counter + '%';
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (clientWidth >= mobileWidth) {
        popupContent.style.top = '-30%';
      }
      modal.style.display = 'block';

      if (clientWidth >= mobileWidth) {
        animateModal();
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    counter = -30;
  });
};

export default modal;