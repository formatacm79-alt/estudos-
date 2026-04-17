// Alternar menu lateral
const toggleMenu = document.getElementById('toggleMenu');
const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll('.menu a');

toggleMenu.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

// Destacar link ativo
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


