const toggleMenu = () => {
  const menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.addEventListener('click', (e) => {
    if (e.target.matches('.active-menu ul>li>a')) {
      e.preventDefault();

      const link = e.target.getAttribute('href');
      document.querySelector(link).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      handleMenu();
    } else if (e.target.classList.contains('close-btn') || e.target.closest('.menu')) {
      handleMenu();
    } else if (menu.classList.contains('active-menu') && !e.target.closest('.active-menu')) {
      handleMenu();
    } else if (e.target.parentElement.getAttribute('href') === '#service-block') {
      e.preventDefault();
      
      document.querySelector('#service-block').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
};

export default toggleMenu;
