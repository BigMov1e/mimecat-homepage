// navbar-toggle.js
const toggleBtn = document.querySelector('.nav-togglebtn');
const container = document.querySelector('.nav-container');
const links = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  container.classList.toggle('active');
  links.classList.toggle('active');
});
