const toggleMenu = () => {
  const menu = document.querySelector('menu');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn') || e.target.matches('.active-menu ul>li>a') || e.target.closest('.menu')) {
      handleMenu();
    } else if (menu.classList.contains('active-menu') && !e.target.closest('.active-menu')) {
      handleMenu();
    }
  });
};

export default toggleMenu;
