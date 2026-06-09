// Gera cristais flutuantes no hero
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