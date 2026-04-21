/* ============================================================
   Andréa Faria — Marketing Estratégico
   Script principal (vanilla JS)

   Convenções:
   - Cada feature isolada em um IIFE
   - Sempre verificar existência dos elementos antes de bind
   - Respeita prefers-reduced-motion via CSS (não duplicado aqui)
   ============================================================ */
'use strict';

(function () {
  /* --------------------------------------------------------
     1. Top bar: scroll state + menu mobile (hamburger)
     -------------------------------------------------------- */
  const topBar       = document.querySelector('.top-bar');
  const topBarRight  = document.querySelector('.top-bar-right');
  const topBarBottom = document.querySelector('.top-bar-bottom');
  const miniLogo     = document.querySelector('.top-bar-mini-logo');
  const hamburger    = document.querySelector('.top-bar-hamburger');

  if (topBar) {
    const SCROLL_THRESHOLD = 70;

    if (miniLogo)  miniLogo.classList.add('hidden');
    if (hamburger) hamburger.classList.add('hidden');

    const onScroll = () => {
      const scrolled = window.scrollY > SCROLL_THRESHOLD;

      topBar.classList.toggle('scrolled', scrolled);
      if (topBarRight) topBarRight.classList.toggle('scrolled', scrolled);

      if (miniLogo && hamburger) {
        miniLogo.classList.toggle('hidden', !scrolled);
        hamburger.classList.toggle('hidden', !scrolled);
        if (!scrolled && topBarBottom) topBarBottom.classList.remove('hidden');
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (hamburger && topBarBottom) {
      hamburger.addEventListener('click', () => {
        const open = !topBarBottom.classList.contains('hidden');
        topBarBottom.classList.toggle('hidden');
        hamburger.setAttribute('aria-expanded', String(!open));
      });
    }
  }

  /* --------------------------------------------------------
     2. Smooth scroll para âncoras internas
     -------------------------------------------------------- */
  const smoothScrollTo = (targetY, duration = 800) => {
    const startY    = window.scrollY;
    const distance  = targetY - startY - 70; // compensa altura da top-bar fixa
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      window.scrollTo(0, startY + distance * ease);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      smoothScrollTo(target.offsetTop);
      // fecha menu mobile se estiver aberto
      if (topBarBottom && !topBarBottom.classList.contains('hidden')) {
        topBarBottom.classList.add('hidden');
      }
    });
  });

  /* --------------------------------------------------------
     3. Intersection observers — fade-in/out de seções
     -------------------------------------------------------- */
  const attachShowOnIntersect = (element, enter = 0.2, leave = 0.4) => {
    if (!element) return;
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= enter) element.classList.add('show');
      });
    }, { threshold: [enter] }).observe(element);
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio <= leave) element.classList.remove('show');
      });
    }, { threshold: [leave] }).observe(element);
  };

  attachShowOnIntersect(document.querySelector('.servicos-cta'));
  attachShowOnIntersect(document.querySelector('.cta-hero'));

  const attachReveal = (selector, className) => {
    const element = document.querySelector(selector);
    if (!element) return;
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.6) element.classList.add(className);
      });
    }, { threshold: [0.6] }).observe(element);
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio <= 0.9) element.classList.remove(className);
      });
    }, { threshold: [0.9] }).observe(element);
  };

  attachReveal('.aqui-nos-left',   'show-left');
  attachReveal('.aqui-nos-center', 'show-center');
  attachReveal('.aqui-nos-right',  'show-right');

  /* --------------------------------------------------------
     4. Accordion de serviços (1 aberto por vez)
     -------------------------------------------------------- */
  document.querySelectorAll('.servico-header').forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('active');
      const icon = header.querySelector('.icon');

      if (isOpen) {
        // fechar com pequena animação
        item.classList.add('is-closing');
        requestAnimationFrame(() => {
          setTimeout(() => {
            item.classList.remove('active');
            setTimeout(() => item.classList.remove('is-closing'), 300);
          }, 50);
        });
        header.setAttribute('aria-expanded', 'false');
        if (icon) icon.textContent = '+';
        return;
      }

      // fechar todos os outros
      document.querySelectorAll('.servico-item').forEach((other) => {
        other.classList.remove('active', 'is-closing');
        const otherIcon = other.querySelector('.icon');
        const otherHeader = other.querySelector('.servico-header');
        if (otherIcon)   otherIcon.textContent = '+';
        if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
      });

      item.classList.add('active');
      header.setAttribute('aria-expanded', 'true');
      if (icon) icon.textContent = '–';
    });
  });

  /* --------------------------------------------------------
     5. Lightbox — abre imagens/vídeos dos cases em modal
     -------------------------------------------------------- */
  const lightbox        = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightbox-content');
  const lightboxClose   = document.getElementById('lightbox-close');

  if (lightbox && lightboxContent && lightboxClose) {
    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxContent.innerHTML = '';
      document.body.classList.remove('is-lightbox-open');
    };

    const openLightbox = (node) => {
      lightboxContent.innerHTML = '';
      lightboxContent.appendChild(node);
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-lightbox-open');
      lightboxClose.focus();
    };

    document.querySelectorAll('[data-lightbox="image"]').forEach((img) => {
      img.addEventListener('click', () => {
        const node = document.createElement('img');
        node.src = img.getAttribute('src');
        node.alt = img.getAttribute('alt') || '';
        openLightbox(node);
      });
    });

    document.querySelectorAll('[data-lightbox="video"]').forEach((video) => {
      const wrap = video.closest('.media-wrap') || video;

      wrap.addEventListener('click', () => {
        const node = document.createElement('video');
        node.src = video.getAttribute('src');
        node.controls = true;
        node.autoplay = true;
        node.playsInline = true;
        openLightbox(node);
      });

      // preview no hover (autoplay silencioso)
      wrap.addEventListener('mouseenter', () => { video.play().catch(() => {}); });
      wrap.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
    });
  }
})();
