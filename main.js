const mblButton = document.getElementById('mbl-button');
const headerLinks = document.querySelector('.header__links');

mblButton.addEventListener('click', () => {
  headerLinks.classList.toggle('show-bar');
});