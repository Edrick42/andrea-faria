function makeCall() {
  // Por enquanto, vamos simular com WhatsApp
  window.open("https://wa.me/5599999999999", "_blank");
}

document.querySelectorAll('.carousel-btn').forEach(btn => {
  btn.addEventListener('click', function () {
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
  card.addEventListener('click', function () {
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

  const topBarRight = document.querySelector('.top-bar-right');

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
      topBarRight.classList.add('scrolled');
      topBar.classList.add('scrolled');
    } else {
      topBarRight.classList.remove('scrolled');
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

function smoothScrollTo(targetY, duration = 500) {
  const startY = window.scrollY;
  const distance = targetY - startY - 70;
  const startTime = performance.now();

  function scroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }

  }

  requestAnimationFrame(scroll);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    const targetY = target.offsetTop;
    smoothScrollTo(targetY, 2500);
  });
});

const ctaSectionServicos = document.querySelector(".servicos-cta");

const observerEntradaServicos = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.2) {
      ctaSectionServicos.classList.add("show");
    }
  });
}, {
  threshold: [0.2]
});

const observerSaidaServicos = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio <= 0.4) {
      ctaSectionServicos.classList.remove("show");
    }
  });
}, {
  threshold: [0.4]
});

observerEntradaServicos.observe(ctaSectionServicos);
observerSaidaServicos.observe(ctaSectionServicos);

const ctaSectionHero = document.querySelector(".cta-hero");

const observerEntradaHero = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.2) {
      ctaSectionHero.classList.add("show");
    }
  });
}, {
  threshold: [0.2]
});

const observerSaidaHero = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio <= 0.4) {
      ctaSectionHero.classList.remove("show");
    }
  });
}, {
  threshold: [0.4]
});

observerEntradaHero.observe(ctaSectionHero);
observerSaidaHero.observe(ctaSectionHero);

function createIntersectionAnimations(selector, className) {
  const element = document.querySelector(selector);

  // ENTRADA — aparece com 60%
  const observerEntrada = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.6) {
        element.classList.add(className);
      }
    });
  }, { threshold: [0.6] });

  // SAÍDA — some quando tiver menos de 40%
  const observerSaida = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio <= 0.9) {
        element.classList.remove(className);
      }
    });
  }, { threshold: [0.9] });

  observerEntrada.observe(element);
  observerSaida.observe(element);
}

// aplicar nos 3 blocos
createIntersectionAnimations(".aqui-nos-left", "show-left");
createIntersectionAnimations(".aqui-nos-center", "show-center");
createIntersectionAnimations(".aqui-nos-right", "show-right");

document.querySelectorAll('.servico-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isOpen = item.classList.contains('active');

    // FECHAR
    if (isOpen) {
      // FASE 1 – desliga imagem
      item.classList.add('is-closing');

      // FASE 2 – colapsa depois que a imagem saiu do frame
      requestAnimationFrame(() => {
        setTimeout(() => {
          item.classList.remove('active');

          // FASE 3 – só reativa depois do colapso
          setTimeout(() => {
            item.classList.remove('is-closing');
          }, 300); // tempo do colapso
        }, 50); // garante frame limpo
      });

      header.setAttribute('aria-expanded', 'false');
      header.querySelector('.icon').textContent = '+';
      return;
    }

    // ABRIR
    document.querySelectorAll('.servico-item').forEach(i => {
      i.classList.remove('active', 'is-closing');
      i.querySelector('.icon').textContent = '+';
      i.querySelector('.servico-header')
        .setAttribute('aria-expanded', 'false');
    });

    item.classList.add('active');
    header.querySelector('.icon').textContent = '–';
    header.setAttribute('aria-expanded', 'true');
  });
});
