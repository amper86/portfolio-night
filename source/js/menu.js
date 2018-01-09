module.exports = $(function () {
  const burgerButton = document.querySelector('.burger');

  burgerButton.addEventListener('click', function (e) {
    e.preventDefault();

    const burgerButtonActive = 'burger_active';

    if(burgerButton.classList.contains(burgerButtonActive)) {
      burgerButton.classList.remove(burgerButtonActive);
    }else{
      burgerButton.classList.add(burgerButtonActive);
    }

    const navList = document.querySelector('.nav-list');
    const navListMenu = 'nav-list_menu';

    if(navList.classList.contains(navListMenu)) {
      navList.classList.remove(navListMenu);
    }else{
      navList.classList.add(navListMenu);
    }
  });
});