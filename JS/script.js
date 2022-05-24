var navToggle = document.querySelector('.hamburger');
var navList = document.querySelector('.navigation__list');

navToggle.addEventListener('click', () => {

  navToggle.classList.toggle('hamburger-active');
  navList.classList.toggle('navigation__list-active');
  // navList.classList.remove('navvigation__list');
  navList.style.left = "0";
  document.querySelector('.navigation__items').classList.toggle('active');

});   // end hamburger.addEventListener