document.querySelectorAll('.skill').forEach(skill => {
  const level = skill.getAttribute('data-level');
  skill.style.setProperty('--level', level);
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Ouvre/Ferme le menu quand on clique sur le burger
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (e) => {
  if (!e.target.closest('.burger') && !e.target.closest('.nav-links')) {
    navLinks.classList.remove('active');
  }
});

