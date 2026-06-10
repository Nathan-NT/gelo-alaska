// Cristais flutuantes
const container = document.getElementById('crystals');
for (let i = 0; i < 50; i++) {
  const c = document.createElement('div');
  c.className = 'crystal';
  const size = Math.random() * 3 + 1;
  c.style.cssText = `
    left: ${Math.random() * 100}%;
    width: ${size}px; height: ${size}px;
    animation-duration: ${6 + Math.random() * 10}s;
    animation-delay: ${Math.random() * 10}s;
  `;
  container.appendChild(c);
}

// Menu hamburguer
const toggle = document.getElementById('nav-toggle');
const menu   = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
});

// Botão X fechar
const closeBtn = document.getElementById('nav-close');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    toggle.classList.remove('open');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  });
}

// Fecha menu ao clicar em link
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('open');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  });
});