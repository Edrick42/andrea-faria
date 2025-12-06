function makeCall() {
  // Por enquanto, vamos simular com WhatsApp
  window.open("https://wa.me/5599999999999", "_blank");
}

document.querySelectorAll('.carousel-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const track = document.querySelector('.carousel-track');
    const card = track.querySelector('.client-card');
    const scrollAmount = card.offsetWidth + 32; // card width + gap
    if (btn.classList.contains('prev')) {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  });
});

// Futuro: clique no card para detalhes do projeto
document.querySelectorAll('.client-card').forEach(card => {
  card.addEventListener('click', function() {
    alert('Em breve: detalhes do projeto!');
  });
});

document.querySelectorAll('.service-item').forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('active');
    const arrow = this.querySelector('.service-arrow');
    arrow.textContent = this.classList.contains('active') ? '−' : '+';
  });
  item.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.classList.toggle('active');
      const arrow = this.querySelector('.service-arrow');
      arrow.textContent = this.classList.contains('active') ? '−' : '+';
    }
  });
});

(function () {
  const topBar = document.querySelector('.top-bar');
  if (!topBar) return;

  const topBarBottom = document.querySelector('.top-bar-bottom');

  // 👇 adicionados: selecionar mini-logo e hamburger
  const miniLogo = document.querySelector('.top-bar-mini-logo');
  const hamburger = document.querySelector('.top-bar-hamburger');

  // 👇 estado inicial (na primeira carga da página)
  if (miniLogo) miniLogo.classList.add('hidden'); // mini logo começa escondido
  if (hamburger) hamburger.classList.add('hidden'); // hamburger começa escondido

  const THRESHOLD = 70; // px

  function onScroll() {
    const scrolled = window.scrollY > THRESHOLD;

    // animação suave entre os dois elementos
    if (miniLogo && hamburger) {
      if (scrolled) {
        miniLogo.classList.remove('hidden');
        hamburger.classList.remove('hidden');
      } else {
        miniLogo.classList.add('hidden');
        hamburger.classList.add('hidden');
        topBarBottom.classList.remove('hidden');
      }
    }

    // comportamento original da top-bar
    if (scrolled) {
      topBar.classList.add('scrolled');
    } else {
      topBar.classList.remove('scrolled');
    }
  }

  // inicializa estado (caso a página carregue já scrolled)
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // abrir nav mobile (como já tinha)
  const hamb = document.querySelector('.top-bar-hamburger');
  if (hamb) {
    hamb.addEventListener('click', () => {
      topBarBottom.classList.toggle('hidden');
    });
  }
})();
