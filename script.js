// Cristais flutuantes (decorativos)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const crystalContainer = document.getElementById('crystals');
if (crystalContainer && !prefersReducedMotion) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 34; i++) {
    const c = document.createElement('div');
    c.className = 'crystal';
    const size = Math.random() * 3 + 1;
    c.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px; height: ${size}px;
      animation-duration: ${6 + Math.random() * 10}s;
      animation-delay: ${Math.random() * 10}s;
    `;
    fragment.appendChild(c);
  }
  crystalContainer.appendChild(fragment);
}

// Menu mobile
const toggle = document.getElementById('nav-toggle');
const menu   = document.getElementById('nav-menu');
const closeBtn = document.getElementById('nav-close');
const scrim  = document.getElementById('nav-scrim');

function openMenu() {
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', 'Fechar menu');
  menu.classList.add('open');
  scrim.classList.add('open');
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
  menu.classList.remove('open');
  scrim.classList.remove('open');
  document.body.style.overflow = '';
  toggle.focus();
}

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);
  scrim.addEventListener('click', closeMenu);

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('open')) closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
  });
}

// Header com sombra ao rolar
const header = document.getElementById('site-header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Entrada suave das seções ao rolar
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}
