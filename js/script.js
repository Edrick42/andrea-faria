/* ============================================================
   i18n — switch PT/EN (HTML default em PT-BR para SEO/no-JS)
   Marcação: data-i18n="key" | data-i18n-html="key" | data-i18n-attr-{attr}="key"
   ============================================================ */
(function () {
  const I18N = {
    pt: {
      // meta
      'meta.title': 'Branding, Audiovisual & Marketing Estratégico | Andréa Faria Marketing',
      'meta.description': 'Especialista em branding, criação de marcas, audiovisual, social media e websites. Transformamos negócios em marcas desejadas, estratégicas e com alto valor percebido.',
      'meta.og.title': 'Andréa Faria Marketing — Branding, Marketing e Audiovisual',
      'meta.og.description': 'Construímos marcas desejadas, estratégicas e memoráveis.',

      // chrome
      'topbar.tag': 'Pronto para fazer a sua marca valer mais?',
      'topbar.menu': 'Abrir menu',
      'cta.talk': 'Vamos Conversar',

      // nav
      'nav.home': 'Home',
      'nav.services': 'Serviços',
      'nav.whatWeDo': 'O que fazemos',
      'nav.clients': 'Clientes',
      'nav.contact': 'Contato',

      // hero
      'hero.title': '<span>Aqui nós fazemos</span><br> marcas virarem referência.',
      'hero.description': 'Há mais de 10 anos unimos branding artesanal, estética refinada e marketing estratégico.',

      // cta hero
      'ctaHero.title': 'Quando a marca vale mais, <br> o negócio cresce mais.',
      'ctaHero.btn': 'Agendar Reunião',

      // servicos
      'servicos.title': 'O que fazemos',
      'serv.1.title': 'Audiovisual',
      'serv.1.p1': 'Criamos conteúdos estratégicos que elevam a percepção da sua marca, fortalecem sua autoridade e posicionam o seu negócio de forma mais profissional e atrativa no mercado.',
      'serv.1.p2': 'Cada peça é pensada para gerar conexão emocional, despertar desejo genuíno e conduzir o público a enxergar valor real no que você oferece.',
      'serv.1.btn': 'Quero conteúdos estratégicos',
      'serv.1.alt': 'Produção audiovisual por Andréa Faria Marketing',
      'serv.2.title': 'Criação de Marca',
      'serv.2.p1': 'Desenvolvemos identidades visuais que diferenciam sua marca no mercado, reforçam seu posicionamento e comunicam valor de forma clara e consistente.',
      'serv.2.p2': 'Cada detalhe é pensado para criar reconhecimento, gerar confiança e deixar uma marca forte e memorável na mente do público.',
      'serv.2.btn': 'Quero uma marca forte',
      'serv.2.alt': 'Identidade visual desenvolvida por Andréa Faria Marketing',
      'serv.3.title': 'Website',
      'serv.3.p1': 'Desenvolvemos websites personalizados e modernos, pensados para refletir a essência da sua marca e oferecer uma experiência visual clara, intuitiva e envolvente.',
      'serv.3.p2': 'Cada projeto é criado com foco em performance, usabilidade e conversão, transformando visitas em conexões reais e resultados concretos.',
      'serv.3.btn': 'Quero um website personalizado',
      'serv.3.alt': 'Projeto de website criado pela Andréa Faria Marketing',
      'serv.4.title': 'Social Media',
      'serv.4.p1': 'Criamos estratégias que atraem o público certo, geram engajamento consistente e fortalecem a autoridade da sua marca no mercado.',
      'serv.4.p2': 'Cada ação é planejada para construir relevância, confiança e presença contínua, transformando atenção em relacionamento e crescimento.',
      'serv.4.btn': 'Quero autoridade digital',
      'serv.4.alt': 'Gestão de redes sociais pela Andréa Faria Marketing',
      'serv.5.title': 'Marketing de Performance',
      'serv.5.p1': 'Criamos campanhas que alcançam as pessoas certas no momento ideal, potencializando resultados e maximizando o retorno sobre o investimento.',
      'serv.5.p2': 'Cada estratégia é orientada por dados e performance, focada em gerar rentabilidade, escala e crescimento sustentável para o seu negócio.',
      'serv.5.btn': 'Quero Mais Performance',
      'serv.5.alt': 'Marketing de performance realizado pela Andréa Faria Marketing',
      'serv.6.title': 'Consultoria de Marketing',
      'serv.6.p1': 'Oferecemos direção estratégica para que sua marca cresça com clareza, consistência e propósito em cada decisão.',
      'serv.6.p2': 'Cada passo é guiado por visão, dados e posicionamento, garantindo crescimento sustentável e alinhado aos seus objetivos.',
      'serv.6.btn': 'Quero ajuda personalizada',
      'serv.6.alt': 'Consultoria estratégica de marketing e negócios por Andréa Faria Marketing',
      'servicos.cta.h': 'Trabalhamos com método, profundidade e direção estratégica.',
      'servicos.cta.p': 'Temos a solução completa para o seu negócio: criamos a sua marca, produzimos seus vídeos e fotos, desenvolvemos o seu website e gerimos seus canais e campanhas de marketing com foco em performance e crescimento.',
      'servicos.cta.btn': 'Conheça Nosso Processo',

      // clientes
      'clientes.eyebrow': 'Nossos Clientes',
      'clientes.h': 'Escolhida por marcas que valorizam experiência, estética e estratégia.',
      'clientes.h.mobile': 'Marcas que valorizam experiência, estética e estratégia.',
      'clientes.sub': 'Temos experiência com marcas no Brasil e ao redor do mundo:',
      'clientes.footer.h': 'De marcas globais a negócios autorais. <br><br> Nosso trabalho começa pelo mesmo ponto: <strong>aumentar valor, visibilidade e desejo.</strong>',

      // aqui-nos
      'aqui.l.title': '<span>Transformamos ideias</span><br> em experiências vivas.',
      'aqui.c.title': '<span>Criamos marcas</span><br> que inspiram.',
      'aqui.r.title': '<span>Contamos histórias</span><br> que conectam e convertem.',

      // footer
      'footer.title': 'Vamos conversar sobre o próximo passo da sua marca?',
      'footer.btn': 'Fale com a Andréa',
      'footer.email': 'Email',
      'footer.rights': '&copy; 2024 Andréa Faria Marketing. <br> Todos os direitos reservados.',

      // whatsapp URLs (texto da mensagem em PT)
      'wa.talk.url': 'https://wa.me/5521972452742?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20saber%20como%20podemos%20fortalecer%20minha%20marca',
      'wa.serv1.url': 'https://wa.me/5521972452742?text=Tenho%20interesse%20em%20Audiovisual',
      'wa.serv2.url': 'https://wa.me/5521972452742?text=Ol%C3%A1%2C%20Andr%C3%A9a%21%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Cria%C3%A7%C3%A3o%20de%20Marca.%20Podemos%20conversar%3F',
      'wa.serv3.url': 'https://wa.me/5521972452742?text=Tenho%20interesse%20em%20Website',
      'wa.serv4.url': 'https://wa.me/5521972452742?text=Ol%C3%A1%2C%20Andr%C3%A9a%21%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Social%20Media.%20Podemos%20conversar%3F',
      'wa.serv5.url': 'https://wa.me/5521972452742?text=Ol%C3%A1%2C%20Andr%C3%A9a%21%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Marketing%20de%20Performance.%20Podemos%20conversar%3F',
      'wa.serv6.url': 'https://wa.me/5521972452742?text=Ol%C3%A1%2C%20Andr%C3%A9a%21%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Consultoria%20de%20Marketing.%20Podemos%20conversar%3F'
    },

    en: {
      // meta
      'meta.title': 'Branding, Audiovisual & Strategic Marketing | Andréa Faria Marketing',
      'meta.description': 'Specialists in branding, brand creation, audiovisual, social media and websites. We turn businesses into desired, strategic brands with high perceived value.',
      'meta.og.title': 'Andréa Faria Marketing — Branding, Marketing and Audiovisual',
      'meta.og.description': 'We build desired, strategic and memorable brands.',

      // chrome
      'topbar.tag': 'Ready to make your brand worth more?',
      'topbar.menu': 'Open menu',
      'cta.talk': 'Let\'s Talk',

      // nav
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.whatWeDo': 'What we do',
      'nav.clients': 'Clients',
      'nav.contact': 'Contact',

      // hero
      'hero.title': '<span>Here we turn</span><br> brands into references.',
      'hero.description': 'For over 10 years we\'ve combined handcrafted branding, refined aesthetics and strategic marketing.',

      // cta hero
      'ctaHero.title': 'When the brand is worth more, <br> the business grows more.',
      'ctaHero.btn': 'Schedule a Meeting',

      // servicos
      'servicos.title': 'What we do',
      'serv.1.title': 'Audiovisual',
      'serv.1.p1': 'We create strategic content that elevates how your brand is perceived, strengthens its authority and positions your business more professionally and attractively in the market.',
      'serv.1.p2': 'Every piece is designed to spark emotional connection, awaken genuine desire and lead the audience to see real value in what you offer.',
      'serv.1.btn': 'I want strategic content',
      'serv.1.alt': 'Audiovisual production by Andréa Faria Marketing',
      'serv.2.title': 'Brand Creation',
      'serv.2.p1': 'We develop visual identities that set your brand apart in the market, reinforce your positioning and communicate value clearly and consistently.',
      'serv.2.p2': 'Every detail is crafted to build recognition, generate trust and leave a strong, memorable mark on the audience.',
      'serv.2.btn': 'I want a strong brand',
      'serv.2.alt': 'Visual identity developed by Andréa Faria Marketing',
      'serv.3.title': 'Website',
      'serv.3.p1': 'We build custom, modern websites designed to reflect the essence of your brand and offer a clear, intuitive and engaging visual experience.',
      'serv.3.p2': 'Every project is built with a focus on performance, usability and conversion — turning visits into real connections and concrete results.',
      'serv.3.btn': 'I want a custom website',
      'serv.3.alt': 'Website project created by Andréa Faria Marketing',
      'serv.4.title': 'Social Media',
      'serv.4.p1': 'We create strategies that attract the right audience, generate consistent engagement and strengthen your brand\'s authority in the market.',
      'serv.4.p2': 'Every action is planned to build relevance, trust and continuous presence — turning attention into relationships and growth.',
      'serv.4.btn': 'I want digital authority',
      'serv.4.alt': 'Social media management by Andréa Faria Marketing',
      'serv.5.title': 'Performance Marketing',
      'serv.5.p1': 'We create campaigns that reach the right people at the right moment, boosting results and maximizing return on investment.',
      'serv.5.p2': 'Every strategy is driven by data and performance, focused on profitability, scale and sustainable growth for your business.',
      'serv.5.btn': 'I want more performance',
      'serv.5.alt': 'Performance marketing delivered by Andréa Faria Marketing',
      'serv.6.title': 'Marketing Consulting',
      'serv.6.p1': 'We offer strategic direction so your brand grows with clarity, consistency and purpose in every decision.',
      'serv.6.p2': 'Each step is guided by vision, data and positioning — ensuring sustainable growth aligned with your goals.',
      'serv.6.btn': 'I want tailored guidance',
      'serv.6.alt': 'Strategic marketing and business consulting by Andréa Faria Marketing',
      'servicos.cta.h': 'We work with method, depth and strategic direction.',
      'servicos.cta.p': 'We have the complete solution for your business: we create your brand, produce your videos and photos, develop your website and manage your channels and marketing campaigns with a focus on performance and growth.',
      'servicos.cta.btn': 'See our Process',

      // clientes
      'clientes.eyebrow': 'Our Clients',
      'clientes.h': 'Chosen by brands that value experience, aesthetics and strategy.',
      'clientes.h.mobile': 'Brands that value experience, aesthetics and strategy.',
      'clientes.sub': 'Experience with brands in Brazil and around the world:',
      'clientes.footer.h': 'From global brands to signature businesses. <br><br> Our work starts from the same point: <strong>more value, visibility and desire.</strong>',

      // aqui-nos
      'aqui.l.title': '<span>We turn ideas</span><br> into living experiences.',
      'aqui.c.title': '<span>We create brands</span><br> that inspire.',
      'aqui.r.title': '<span>We tell stories</span><br> that connect and convert.',

      // footer
      'footer.title': 'Shall we talk about the next step for your brand?',
      'footer.btn': 'Talk to Andréa',
      'footer.email': 'Email',
      'footer.rights': '&copy; 2024 Andréa Faria Marketing. <br> All rights reserved.',

      // whatsapp URLs (English message text)
      'wa.talk.url': 'https://wa.me/5521972452742?text=Hi%21%20I%27d%20like%20to%20schedule%20a%20meeting%20to%20learn%20how%20we%20can%20strengthen%20my%20brand',
      'wa.serv1.url': 'https://wa.me/5521972452742?text=I%27m%20interested%20in%20Audiovisual',
      'wa.serv2.url': 'https://wa.me/5521972452742?text=Hi%20Andr%C3%A9a%21%20I%27m%20interested%20in%20Brand%20Creation.%20Can%20we%20talk%3F',
      'wa.serv3.url': 'https://wa.me/5521972452742?text=I%27m%20interested%20in%20a%20Website',
      'wa.serv4.url': 'https://wa.me/5521972452742?text=Hi%20Andr%C3%A9a%21%20I%27m%20interested%20in%20Social%20Media.%20Can%20we%20talk%3F',
      'wa.serv5.url': 'https://wa.me/5521972452742?text=Hi%20Andr%C3%A9a%21%20I%27m%20interested%20in%20Performance%20Marketing.%20Can%20we%20talk%3F',
      'wa.serv6.url': 'https://wa.me/5521972452742?text=Hi%20Andr%C3%A9a%21%20I%27m%20interested%20in%20Marketing%20Consulting.%20Can%20we%20talk%3F'
    }
  };

  const LANG_KEY = 'af.lang';
  const SUPPORTED = ['pt', 'en'];

  const detectInitialLang = () => {
    try {
      const url = new URL(window.location.href);
      const qp = url.searchParams.get('lang');
      if (qp && SUPPORTED.includes(qp)) return qp;
    } catch (e) { /* ignore */ }

    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored && SUPPORTED.includes(stored)) return stored;
    } catch (e) { /* ignore */ }

    const nav = (navigator.language || navigator.userLanguage || 'pt').toLowerCase();
    if (nav.startsWith('pt')) return 'pt';
    if (nav.startsWith('en')) return 'en';

    return 'pt';
  };

  const applyLang = (lang) => {
    if (!SUPPORTED.includes(lang)) lang = 'pt';
    const dict = I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key || !(key in dict)) return;
      el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (!key || !(key in dict)) return;
      el.innerHTML = dict[key];
    });

    document.querySelectorAll('*').forEach((el) => {
      for (const attr of el.attributes) {
        if (!attr.name.startsWith('data-i18n-attr-')) continue;
        const targetAttr = attr.name.replace('data-i18n-attr-', '');
        const key = attr.value;
        if (!key || !(key in dict)) continue;
        el.setAttribute(targetAttr, dict[key]);
      }
    });

    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'en' ? 'en_US' : 'pt_BR');

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang-set') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  };

  applyLang(detectInitialLang());

  document.querySelectorAll('[data-lang-set]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLang(btn.getAttribute('data-lang-set'));
    });
  });

  window.__setLang = applyLang;
})();

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
