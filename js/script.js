/* ============================================================
   Andréa Faria — Marketing Estratégico
   Script principal (vanilla JS)

   Convenções:
   - Cada feature isolada em um IIFE
   - Sempre verificar existência dos elementos antes de bind
   - Respeita prefers-reduced-motion via CSS (não duplicado aqui)
   ============================================================ */
'use strict';

/* ============================================================
   i18n — dicionário PT/EN + switcher
   - HTML padrão está em PT-BR (default para SEO/no-JS)
   - Marcação: data-i18n="key" | data-i18n-html="key" | data-i18n-attr-{attr}="key"
   ============================================================ */
(function () {
  const I18N = {
    pt: {
      // meta
      'meta.title': 'Andréa Faria — Direção de Marketing Estratégico | Brasil · Índia · EUA',
      'meta.description': 'Andréa Faria é diretora de marketing estratégico para líderes, marcas premium e empresas em expansão internacional. Atua entre Brasil, Índia e Estados Unidos.',
      'meta.keywords': 'direção de marketing, brand strategist, marketing estratégico, posicionamento de marca, marketing para líderes, marketing internacional, Brasil, Índia, Estados Unidos, Andréa Faria, Factory, The Light of Diya, palestras de marketing',
      'meta.og.title': 'Andréa Faria — Direção de Marketing Estratégico',
      'meta.og.description': 'Entro como diretora de marketing da sua empresa — estratégia, equipe e execução. Atuação entre Brasil, Índia e Estados Unidos.',
      'meta.twitter.description': 'Entro como diretora de marketing da sua empresa — estratégia, equipe e execução. Brasil · Índia · EUA.',

      // chrome
      'skip': 'Pular para o conteúdo',
      'topbar.tag': 'Brand Strategist · Direção de Marketing',
      'topbar.menu': 'Abrir menu',
      'topbar.menuNav': 'Menu principal mobile',
      'header.logoAria': 'Andréa Faria — Início',
      'header.navAria': 'Menu principal',
      'cta.talk': 'Vamos Conversar',

      // nav
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.services': 'Serviços',
      'nav.cases': 'Cases',
      'nav.contact': 'Contato',

      // social arias
      'social.instagramAria': 'Instagram da Andréa Faria',
      'social.linkedinAria': 'LinkedIn da Andréa Faria',
      'social.whatsappAria': 'WhatsApp da Andréa Faria',

      // hero
      'hero.eyebrow': 'Andréa Faria · Marketing Estratégico',
      'hero.title': '<span>Brand Strategist</span><br>&amp; Founder.',
      'hero.description': 'Entro no seu negócio como diretora de marketing — sem você precisar contratar uma equipe interna. Estruturo como sua marca é percebida, organizo a comunicação, defino a estratégia e executo com time próprio.',
      'hero.meta.locKey': 'Opera em',
      'hero.meta.locVal': 'Brasil · Índia · EUA',
      'hero.meta.langKey': 'Idiomas',
      'hero.meta.langVal': 'Português &amp; Inglês',

      // cta hero
      'ctaHero.title': 'Entro como diretora de marketing<br>da sua empresa.',
      'ctaHero.btn': 'Agendar Reunião',

      // strip
      'strip.aria': 'Indicadores',
      'strip.years': 'Anos de Carreira',
      'strip.clients': 'Clientes Atendidos',
      'strip.companies': 'Empresas',
      'strip.countries': 'Países',
      'strip.languages': 'Idiomas',

      // sobre
      'sobre.label': 'Sobre',
      'sobre.p1': 'Atuo na interseção entre estratégia de marca, direção de marketing e visão de negócios — com foco em líderes de mercado, marcas premium e empresas internacionais.',
      'sobre.p2': 'Com 20 anos comecei a trabalhar no Mama Shelter Rio — uma grande rede internacional do grupo Accor. Foi lá que percebi que o mundo é grande e que deve ser conhecido. Aprendi marketing na prática, fundei minha empresa e sou movida por conhecer novas culturas e ajudar no desenvolvimento de negócios e marcas.',
      'sobre.p3': 'Hoje dirijo duas empresas e atendo clientes no Brasil, na Índia e nos Estados Unidos. Com quase quatro anos vivendo e fazendo negócios na Índia, trago uma compreensão prática do mercado indiano que vai muito além da pesquisa.',
      'sobre.quote': '"A maioria das agências entende de plataforma. Eu entendo de negócio e de como a sua marca deve ser percebida."',

      // trajetória
      'traj.aria': 'Trajetória profissional',
      'traj.head': 'Trajetória',
      'traj.title': 'De onde vim',
      'traj.1': 'Formação em <strong>Análise de Marketing Digital</strong> — Rio de Janeiro',
      'traj.2': 'Departamento de marketing do <strong>Mama Shelter Rio</strong> — grupo Accor',
      'traj.3': 'Fundei minha primeira empresa <strong>aos 20 anos</strong>',
      'traj.4': '<strong>1º lugar</strong> — Desafio Empreender, Instituto Cyrela',
      'traj.5': 'Palestrante — <strong>Join Digital Meet</strong>, Joinville · Experiência do Consumidor',
      'traj.6': 'Operando entre <strong>Brasil e Índia</strong> desde 2022',

      // aqui-nos
      'aqui.aria': 'Para quem trabalho',
      'aqui.l.tag': 'Para líderes',
      'aqui.l.title': '<span>Posiciono você</span><br>como autoridade no seu mercado.',
      'aqui.l.p': 'Para que as pessoas certas te encontrem antes de você precisar se apresentar.',
      'aqui.c.tag': 'Para empresas',
      'aqui.c.title': '<span>Organizo o marketing</span><br>como função estratégica.',
      'aqui.c.p': 'Para que sua empresa pare de depender de improviso e passe a crescer com consistência.',
      'aqui.r.tag': 'Para novos mercados',
      'aqui.r.title': '<span>Abro portas</span><br>no Brasil ou na Índia.',
      'aqui.r.p': 'Com quem já opera nos dois — encurtando anos de tentativa e erro.',

      // serviços
      'servicos.title': 'O que fazemos juntos',
      'serv.1.title': 'Direção de Marketing',
      'serv.1.p1': 'Entro como diretora de marketing da sua empresa — estratégia, equipe e execução. Você foca no negócio enquanto eu estruturo a forma como sua marca é percebida, organizo a comunicação e dirijo o time.',
      'serv.1.p2': 'Atuação contínua e dedicada, com método e responsabilidade — sem o custo de uma estrutura interna.',
      'serv.1.btn': 'Quero direção estratégica',
      'serv.1.alt': 'Andréa Faria conduzindo reunião de direção de marketing',
      'serv.2.title': 'Consultoria &amp; Estruturação',
      'serv.2.p1': 'Diagnóstico estratégico, direcionamento e construção de departamento de marketing — do zero ou com equipe existente.',
      'serv.2.p2': 'Para empresas que querem sair do improviso e construir uma operação de marketing com método, indicadores e profundidade.',
      'serv.2.btn': 'Quero estruturar meu marketing',
      'serv.2.alt': 'Mesa de trabalho com plano estratégico de marketing',
      'serv.3.title': 'Marca &amp; Posicionamento <small>· via Factory</small>',
      'serv.3.p1': 'Criação de marca e estruturação de autoridade para empresas e líderes que precisam ser vistos do jeito certo.',
      'serv.3.p2': 'Trabalho conduzido pela Factory — método pelo qual fundadores e executivos deixam de ser invisíveis, sem depender de trends ou improviso.',
      'serv.3.btn': 'Quero ser visto do jeito certo',
      'serv.3.alt': 'Identidade visual de marca desenvolvida pela Factory',
      'serv.4.title': 'Conteúdo &amp; Produção Visual <small>· via The Light of Diya</small>',
      'serv.4.p1': 'Estratégia de conteúdo, direção criativa e audiovisual para marcas premium e hospitalidade.',
      'serv.4.p2': 'Onde o trabalho de produção visual encontra sua expressão mais natural — com audiência real de 22K no segmento.',
      'serv.4.btn': 'Quero conteúdo de marca',
      'serv.4.alt': 'Produção audiovisual em set de marca premium',
      'serv.5.title': 'Expansão &amp; Palestras',
      'serv.5.p1': 'Introdução da sua empresa no mercado brasileiro ou indiano — com quem já opera nos dois.',
      'serv.5.p2': 'Palestras, treinamentos e eventos corporativos sobre estratégia de marca, marketing internacional e a relação Brasil–Índia.',
      'serv.5.btn': 'Conhecer palestras',
      'serv.5.alt': 'Andréa Faria palestrando no Join Digital Meet em Joinville',
      'servicos.cta.h': 'Direção de marketing com método, profundidade e visão de negócios.',
      'servicos.cta.p': 'Para líderes de mercado, marcas premium e empresas em expansão internacional. Estratégia de marca, gestão de marketing e produção visual — com time próprio e entrega consistente.',
      'servicos.cta.btn': 'Conhecer o Método',

      // empresas
      'empresas.title': 'Minhas Empresas',
      'emp.factory.eyebrow': 'Authority Structure',
      'emp.factory.t1': 'Estruturação de autoridade digital para líderes e empresas. Estratégia de marca, posicionamento e gestão de presença — com processo, equipe dedicada e entrega consistente.',
      'emp.factory.t2': 'A Factory não é uma agência de social media. É o método pelo qual fundadores e executivos deixam de ser invisíveis — sem depender de trends ou improviso.',
      'emp.factory.btn': 'Conhecer →',
      'emp.factory.aria': 'Conhecer Factory no Instagram',
      'emp.diya.eyebrow': 'Editorial · Hospitalidade',
      'emp.diya.t1': 'Um projeto editorial nascido da experiência de viver entre culturas. Gastronomia, viagens, hospitalidade e as histórias que vivem nos entre-lugares.',
      'emp.diya.t2': 'Onde o trabalho de conteúdo e produção visual para marcas de hospitalidade encontra sua expressão mais natural — com audiência real de 22K no segmento.',
      'emp.diya.btn': 'Conhecer →',
      'emp.diya.aria': 'Conhecer The Light of Diya no Instagram',

      // cases
      'cases.label': 'Cases em destaque',
      'cases.h': 'Marcas que <em>cresceram</em> do nosso lado.',
      'case.lab.market': 'Mercado',
      'case.lab.scope': 'Escopo',
      'case.lab.period': 'Período',
      'case.metiers.eyebrow': 'Case · 4 anos',
      'case.metiers.scope': 'Branding · Marketing · Campanhas',
      'case.metiers.period': '2020 — Presente',
      'case.metiers.d1': 'Quatro anos dirigindo marca, marketing e campanhas do Metiers Café — da construção de posicionamento à execução de conteúdo audiovisual. Acompanhamos a marca crescer de projeto local a referência em cafés especiais.',
      'case.metiers.d2': '"A curiosidade e a vontade de aprender que ela tem realmente me surpreende cada vez mais. A gente foi crescendo juntos — tanto ela quanto o Métier." — Chris Gursching, fundadora.',
      'case.metiers.alt1': 'Ambiente do Metiers Café no Rio de Janeiro',
      'case.metiers.alt2': 'Café especial sendo preparado no Metiers Café',
      'case.metiers.alt3': 'Detalhe de mesa servida no Metiers Café',
      'case.metiers.vid': 'Vídeo de campanha do Metiers Café',
      'case.arroz.eyebrow': 'Case · Dept. de Marketing',
      'case.arroz.market': 'Brasil',
      'case.arroz.scope': 'Dept. de Marketing · Campanhas · Audiovisual',
      'case.arroz.d1': 'Estruturação do departamento de marketing e direção de campanhas multi-formato. Produção audiovisual completa — do conceito criativo à execução — posicionando a Casa do Arroz como referência em tradição gastronômica contemporânea.',
      'case.arroz.d2': 'Marketing dirigido com consistência: campanhas sazonais, conteúdo de marca e presença digital trabalhando juntos, com método.',
      'case.arroz.alt1': 'Foto principal da marca Casa do Arroz',
      'case.arroz.vid1': 'Vídeo de campanha da Casa do Arroz',
      'case.arroz.vid2': 'Vídeo de produção da Casa do Arroz',
      'case.frutos.eyebrow': 'Case · Marca &amp; Marketing',
      'case.frutos.market': 'Brasil',
      'case.frutos.scope': 'Marca · Gestão de Marketing · Conteúdo',
      'case.frutos.d1': 'Construção de marca e gestão de marketing para Frutos — do posicionamento visual à estratégia de conteúdo. Marca natural, limpa e com identidade própria num segmento saturado por genéricos.',
      'case.frutos.d2': 'Direção criativa de ponta a ponta: fotografia de produto, sensorialidade visual e linguagem de marca coerente em todos os pontos de contato.',
      'case.frutos.alt1': 'Direção fotográfica de produto Frutos',
      'case.frutos.alt2': 'Identidade visual da marca Frutos',
      'case.frutos.vid': 'Vídeo de marca Frutos',

      // clientes
      'clientes.eyebrow': 'Nossos Clientes',
      'clientes.h': 'Marcas que valorizam experiência, estética e estratégia.',
      'clientes.h.mobile': 'Marcas que valorizam experiência e estratégia.',
      'clientes.sub': 'Trabalhos com marcas no Brasil, na Índia e ao redor do mundo:',
      'clientes.carouselAria': 'Logos de clientes em carrossel',
      'clientes.footer.h': 'De marcas globais a negócios autorais. <br><br> O ponto em comum: <strong>aumentar valor, visibilidade e desejo</strong> com método.',

      // trabalhos
      'trabalhos.label': 'Trabalhos Selecionados',
      'trabalhos.h': 'Marcas e líderes que <em>confiam</em>.',
      'work.col1.title': 'Marca, Estratégia &amp; Gestão de Marketing',
      'work.col2.title': 'Hospitalidade &amp; Produção Visual',
      'country.br': 'Brasil',
      'country.in': 'Índia',
      'country.us': 'EUA',
      'work.helem.scope': 'Marca · Leader Page · Leader Structure',
      'work.nayara.scope': 'Marca Pessoal · Leader Structure',
      'work.metiers.country': 'Brasil · 4 anos',
      'work.metiers.scope': 'Branding · Marketing · Campanhas',
      'work.arroz.scope': 'Dept. de Marketing · Campanhas',
      'work.frutos.scope': 'Marca · Gestão de Marketing',
      'work.ledgers.scope': 'Marca · Website · LinkedIn',
      'work.builders.scope': 'Marca · LinkedIn',
      'work.hilton.scope': 'Produção Visual · Conteúdo',
      'work.sheraton.scope': 'Produção Visual · Conteúdo',
      'work.angsana.scope': 'Produção Visual · Conteúdo',
      'work.china.country': 'Taj MG Road · Índia',
      'work.china.scope': 'Direção Fotográfica',
      'work.lazy.scope': 'Conteúdo · Produção Visual',
      'work.loya.scope': 'Conteúdo · Produção Visual',

      // depoimentos
      'depo.title': 'O que dizem os clientes',
      'depo.nayara.text': '"Andréa é uma profissional que entende profundamente o negócio, respeita a essência do cliente e conduz o trabalho com sensibilidade e estratégia. Minha marca finalmente representa o nível profissional que eu sempre quis transmitir — e isso me permite ter tranquilidade para continuar crescendo."',
      'depo.nayara.role': 'Diretora Executiva, WL3 Cred · Advogada e Assessora de Investimentos ANCORD',
      'depo.chris.text': '"A curiosidade e a vontade de aprender que ela tem realmente me surpreende cada vez mais. A gente foi crescendo juntos — tanto ela quanto o Métier. Recomendo de olhos fechados."',
      'depo.chris.role': 'Fundadora, Metiers Café · Rio de Janeiro',
      'depo.soon': 'Em breve',
      'depo.helem.role': 'CEO, Franceschini Advogados Associados',

      // palestras
      'pal.label': 'Palestras &amp; Eventos',
      'pal.imgAlt': 'Andréa Faria palestrando no Join Digital Meet em Joinville',
      'pal.cap': 'Join Digital Meet · Joinville · Brasil',
      'pal.h': 'Disponível para <em>palestras</em> e eventos.',
      'pal.p': 'Para organizadores de eventos, feiras de negócios e empresas que buscam uma perspectiva internacional sobre estratégia de marca, marketing e expansão entre mercados emergentes.',
      'pal.t1': 'Autoridade de marca para líderes e fundadores',
      'pal.t2': 'Marketing estratégico para expansão internacional',
      'pal.t3': 'Marcas premium entre culturas',
      'pal.t4': 'Hospitalidade, marca e experiência do cliente',
      'pal.t5': 'Brasil e Índia — oportunidades e estratégia',
      'pal.hl1': '<strong>Palestrante</strong> — Join Digital Meet, Joinville · Experiência do Consumidor',
      'pal.hl2': '<strong>1º lugar</strong> — Desafio Empreender, Instituto Cyrela',
      'pal.cta': 'Convites para palestras e eventos:',

      // footer
      'footer.title': 'Vamos conversar sobre o próximo passo da sua marca?',
      'footer.btn': 'Fale com a Andréa',
      'footer.socialsAria': 'Canais de contato',
      'footer.email': 'Email',
      'footer.rights': '&copy; 2026 Andréa Faria Marketing Estratégico. <br>Todos os direitos reservados.',

      // lightbox
      'lightbox.aria': 'Galeria',
      'lightbox.close': 'Fechar galeria',

      // whatsapp URLs (texto do parâmetro muda por idioma)
      'wa.talk.url': 'https://wa.me/5521972452742?text=Ol%C3%A1%2C%20Andr%C3%A9a%21%20Gostaria%20de%20conversar%20sobre%20dire%C3%A7%C3%A3o%20de%20marketing%20para%20o%20meu%20neg%C3%B3cio.',
      'wa.meet.url': 'https://wa.me/5521972452742?text=Ol%C3%A1%2C%20Andr%C3%A9a%21%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o.',
      'wa.method.url': 'https://wa.me/5521972452742?text=Ol%C3%A1%2C%20Andr%C3%A9a%21%20Gostaria%20de%20entender%20o%20m%C3%A9todo%20de%20trabalho.',
      'wa.serv1.url': 'https://wa.me/5521972452742?text=Tenho%20interesse%20em%20Dire%C3%A7%C3%A3o%20de%20Marketing',
      'wa.serv2.url': 'https://wa.me/5521972452742?text=Tenho%20interesse%20em%20Consultoria%20de%20Marketing',
      'wa.serv3.url': 'https://wa.me/5521972452742?text=Tenho%20interesse%20em%20Marca%20%26%20Posicionamento%20%28Factory%29',
      'wa.serv4.url': 'https://wa.me/5521972452742?text=Tenho%20interesse%20em%20Conte%C3%BAdo%20%26%20Produ%C3%A7%C3%A3o%20Visual%20%28The%20Light%20of%20Diya%29'
    },

    en: {
      // meta
      'meta.title': 'Andréa Faria — Strategic Marketing Direction | Brazil · India · USA',
      'meta.description': 'Andréa Faria is a strategic marketing director for leaders, premium brands and companies expanding internationally. Operating between Brazil, India and the United States.',
      'meta.keywords': 'marketing director, brand strategist, strategic marketing, brand positioning, marketing for leaders, international marketing, Brazil, India, United States, Andréa Faria, Factory, The Light of Diya, marketing speaker',
      'meta.og.title': 'Andréa Faria — Strategic Marketing Direction',
      'meta.og.description': 'I step in as your company\'s marketing director — strategy, team and execution. Operating between Brazil, India and the United States.',
      'meta.twitter.description': 'I step in as your company\'s marketing director — strategy, team and execution. Brazil · India · USA.',

      // chrome
      'skip': 'Skip to content',
      'topbar.tag': 'Brand Strategist · Marketing Director',
      'topbar.menu': 'Open menu',
      'topbar.menuNav': 'Main mobile menu',
      'header.logoAria': 'Andréa Faria — Home',
      'header.navAria': 'Main menu',
      'cta.talk': 'Let\'s Talk',

      // nav
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.cases': 'Cases',
      'nav.contact': 'Contact',

      // social arias
      'social.instagramAria': 'Andréa Faria on Instagram',
      'social.linkedinAria': 'Andréa Faria on LinkedIn',
      'social.whatsappAria': 'Andréa Faria on WhatsApp',

      // hero
      'hero.eyebrow': 'Andréa Faria · Strategic Marketing',
      'hero.title': '<span>Brand Strategist</span><br>&amp; Founder.',
      'hero.description': 'I step into your business as your marketing director — without you needing to hire an in-house team. I shape how your brand is perceived, organize communications, define strategy and execute with my own team.',
      'hero.meta.locKey': 'Operating in',
      'hero.meta.locVal': 'Brazil · India · USA',
      'hero.meta.langKey': 'Languages',
      'hero.meta.langVal': 'Portuguese &amp; English',

      // cta hero
      'ctaHero.title': 'I step in as the marketing director<br>of your company.',
      'ctaHero.btn': 'Schedule a Meeting',

      // strip
      'strip.aria': 'Key indicators',
      'strip.years': 'Years of Experience',
      'strip.clients': 'Clients Served',
      'strip.companies': 'Companies',
      'strip.countries': 'Countries',
      'strip.languages': 'Languages',

      // sobre
      'sobre.label': 'About',
      'sobre.p1': 'I work at the intersection of brand strategy, marketing direction and business vision — focused on market leaders, premium brands and international companies.',
      'sobre.p2': 'At 20 I started working at Mama Shelter Rio — a major international chain of the Accor group. That\'s where I realized the world is vast and meant to be known. I learned marketing in practice, founded my company, and I\'m driven by getting to know new cultures and helping develop businesses and brands.',
      'sobre.p3': 'Today I run two companies and serve clients in Brazil, India and the United States. With nearly four years living and doing business in India, I bring a practical understanding of the Indian market that goes well beyond research.',
      'sobre.quote': '"Most agencies understand platforms. I understand business — and how your brand should be perceived."',

      // trajetória
      'traj.aria': 'Professional trajectory',
      'traj.head': 'Trajectory',
      'traj.title': 'Where I come from',
      'traj.1': 'Degree in <strong>Digital Marketing Analysis</strong> — Rio de Janeiro',
      'traj.2': 'Marketing department at <strong>Mama Shelter Rio</strong> — Accor group',
      'traj.3': 'Founded my first company <strong>at age 20</strong>',
      'traj.4': '<strong>1st place</strong> — Desafio Empreender, Cyrela Institute',
      'traj.5': 'Speaker — <strong>Join Digital Meet</strong>, Joinville · Consumer Experience',
      'traj.6': 'Operating between <strong>Brazil and India</strong> since 2022',

      // aqui-nos
      'aqui.aria': 'Who I work with',
      'aqui.l.tag': 'For leaders',
      'aqui.l.title': '<span>I position you</span><br>as an authority in your market.',
      'aqui.l.p': 'So the right people find you before you need to introduce yourself.',
      'aqui.c.tag': 'For companies',
      'aqui.c.title': '<span>I organize marketing</span><br>as a strategic function.',
      'aqui.c.p': 'So your company stops relying on improvisation and starts growing with consistency.',
      'aqui.r.tag': 'For new markets',
      'aqui.r.title': '<span>I open doors</span><br>in Brazil or India.',
      'aqui.r.p': 'With someone who already operates in both — saving you years of trial and error.',

      // serviços
      'servicos.title': 'What we do together',
      'serv.1.title': 'Marketing Direction',
      'serv.1.p1': 'I step in as the marketing director of your company — strategy, team and execution. You focus on the business while I shape how your brand is perceived, organize communications and lead the team.',
      'serv.1.p2': 'Continuous, dedicated work with method and accountability — without the cost of an in-house structure.',
      'serv.1.btn': 'I want strategic direction',
      'serv.1.alt': 'Andréa Faria leading a marketing direction meeting',
      'serv.2.title': 'Consulting &amp; Structuring',
      'serv.2.p1': 'Strategic diagnosis, direction and building of a marketing department — from scratch or with an existing team.',
      'serv.2.p2': 'For companies that want to leave improvisation behind and build a marketing operation with method, metrics and depth.',
      'serv.2.btn': 'I want to structure my marketing',
      'serv.2.alt': 'Work desk with a strategic marketing plan',
      'serv.3.title': 'Brand &amp; Positioning <small>· via Factory</small>',
      'serv.3.p1': 'Brand creation and authority structuring for companies and leaders who need to be seen the right way.',
      'serv.3.p2': 'Work led by Factory — the method by which founders and executives stop being invisible, without relying on trends or improvisation.',
      'serv.3.btn': 'I want to be seen the right way',
      'serv.3.alt': 'Brand visual identity developed by Factory',
      'serv.4.title': 'Content &amp; Visual Production <small>· via The Light of Diya</small>',
      'serv.4.p1': 'Content strategy, creative direction and audiovisual for premium and hospitality brands.',
      'serv.4.p2': 'Where visual production work finds its most natural expression — with a real 22K audience in the segment.',
      'serv.4.btn': 'I want brand content',
      'serv.4.alt': 'Audiovisual production on a premium brand set',
      'serv.5.title': 'Expansion &amp; Speaking',
      'serv.5.p1': 'Introducing your company to the Brazilian or Indian market — with someone who already operates in both.',
      'serv.5.p2': 'Talks, training and corporate events on brand strategy, international marketing and the Brazil–India relationship.',
      'serv.5.btn': 'See speaking',
      'serv.5.alt': 'Andréa Faria speaking at Join Digital Meet in Joinville',
      'servicos.cta.h': 'Marketing direction with method, depth and business vision.',
      'servicos.cta.p': 'For market leaders, premium brands and companies expanding internationally. Brand strategy, marketing management and visual production — with a dedicated team and consistent delivery.',
      'servicos.cta.btn': 'See the Method',

      // empresas
      'empresas.title': 'My Companies',
      'emp.factory.eyebrow': 'Authority Structure',
      'emp.factory.t1': 'Digital authority structuring for leaders and companies. Brand strategy, positioning and presence management — with process, a dedicated team and consistent delivery.',
      'emp.factory.t2': 'Factory is not a social media agency. It is the method by which founders and executives stop being invisible — without relying on trends or improvisation.',
      'emp.factory.btn': 'Learn more →',
      'emp.factory.aria': 'See Factory on Instagram',
      'emp.diya.eyebrow': 'Editorial · Hospitality',
      'emp.diya.t1': 'An editorial project born of the experience of living between cultures. Gastronomy, travel, hospitality and the stories that live in the in-between places.',
      'emp.diya.t2': 'Where content and visual production work for hospitality brands finds its most natural expression — with a real 22K audience in the segment.',
      'emp.diya.btn': 'Learn more →',
      'emp.diya.aria': 'See The Light of Diya on Instagram',

      // cases
      'cases.label': 'Featured cases',
      'cases.h': 'Brands that <em>grew</em> alongside us.',
      'case.lab.market': 'Market',
      'case.lab.scope': 'Scope',
      'case.lab.period': 'Period',
      'case.metiers.eyebrow': 'Case · 4 years',
      'case.metiers.scope': 'Branding · Marketing · Campaigns',
      'case.metiers.period': '2020 — Present',
      'case.metiers.d1': 'Four years directing brand, marketing and campaigns for Metiers Café — from building positioning to executing audiovisual content. We watched the brand grow from a local project to a reference in specialty coffee.',
      'case.metiers.d2': '"Her curiosity and willingness to learn surprise me more and more. We grew together — both her and Métier." — Chris Gursching, founder.',
      'case.metiers.alt1': 'Metiers Café space in Rio de Janeiro',
      'case.metiers.alt2': 'Specialty coffee being prepared at Metiers Café',
      'case.metiers.alt3': 'Table setting detail at Metiers Café',
      'case.metiers.vid': 'Metiers Café campaign video',
      'case.arroz.eyebrow': 'Case · Marketing Dept.',
      'case.arroz.market': 'Brazil',
      'case.arroz.scope': 'Marketing Dept. · Campaigns · Audiovisual',
      'case.arroz.d1': 'Building the marketing department and directing multi-format campaigns. Full audiovisual production — from creative concept to execution — positioning Casa do Arroz as a reference in contemporary culinary tradition.',
      'case.arroz.d2': 'Marketing led with consistency: seasonal campaigns, brand content and digital presence working together, with method.',
      'case.arroz.alt1': 'Casa do Arroz brand main photo',
      'case.arroz.vid1': 'Casa do Arroz campaign video',
      'case.arroz.vid2': 'Casa do Arroz production video',
      'case.frutos.eyebrow': 'Case · Brand &amp; Marketing',
      'case.frutos.market': 'Brazil',
      'case.frutos.scope': 'Brand · Marketing Management · Content',
      'case.frutos.d1': 'Brand building and marketing management for Frutos — from visual positioning to content strategy. A clean, natural brand with its own identity in a segment saturated by generics.',
      'case.frutos.d2': 'End-to-end creative direction: product photography, visual sensoriality and a coherent brand language across every touchpoint.',
      'case.frutos.alt1': 'Frutos product photography direction',
      'case.frutos.alt2': 'Frutos brand visual identity',
      'case.frutos.vid': 'Frutos brand video',

      // clientes
      'clientes.eyebrow': 'Our Clients',
      'clientes.h': 'Brands that value experience, aesthetics and strategy.',
      'clientes.h.mobile': 'Brands that value experience and strategy.',
      'clientes.sub': 'Work with brands in Brazil, India and around the world:',
      'clientes.carouselAria': 'Client logos carousel',
      'clientes.footer.h': 'From global brands to signature businesses. <br><br> What they share: <strong>more value, visibility and desire</strong> — with method.',

      // trabalhos
      'trabalhos.label': 'Selected Work',
      'trabalhos.h': 'Brands and leaders who <em>trust us</em>.',
      'work.col1.title': 'Brand, Strategy &amp; Marketing Management',
      'work.col2.title': 'Hospitality &amp; Visual Production',
      'country.br': 'Brazil',
      'country.in': 'India',
      'country.us': 'USA',
      'work.helem.scope': 'Brand · Leader Page · Leader Structure',
      'work.nayara.scope': 'Personal Brand · Leader Structure',
      'work.metiers.country': 'Brazil · 4 years',
      'work.metiers.scope': 'Branding · Marketing · Campaigns',
      'work.arroz.scope': 'Marketing Dept. · Campaigns',
      'work.frutos.scope': 'Brand · Marketing Management',
      'work.ledgers.scope': 'Brand · Website · LinkedIn',
      'work.builders.scope': 'Brand · LinkedIn',
      'work.hilton.scope': 'Visual Production · Content',
      'work.sheraton.scope': 'Visual Production · Content',
      'work.angsana.scope': 'Visual Production · Content',
      'work.china.country': 'Taj MG Road · India',
      'work.china.scope': 'Photographic Direction',
      'work.lazy.scope': 'Content · Visual Production',
      'work.loya.scope': 'Content · Visual Production',

      // depoimentos
      'depo.title': 'What clients say',
      'depo.nayara.text': '"Andréa is a professional who deeply understands the business, respects the client\'s essence and conducts the work with sensitivity and strategy. My brand finally reflects the professional level I always wanted to convey — and that gives me peace of mind to keep growing."',
      'depo.nayara.role': 'Executive Director, WL3 Cred · Lawyer and Investment Advisor (ANCORD)',
      'depo.chris.text': '"Her curiosity and willingness to learn surprise me more and more. We grew together — both her and Métier. I recommend her with eyes closed."',
      'depo.chris.role': 'Founder, Metiers Café · Rio de Janeiro',
      'depo.soon': 'Coming soon',
      'depo.helem.role': 'CEO, Franceschini Advogados Associados',

      // palestras
      'pal.label': 'Talks &amp; Events',
      'pal.imgAlt': 'Andréa Faria speaking at Join Digital Meet in Joinville',
      'pal.cap': 'Join Digital Meet · Joinville · Brazil',
      'pal.h': 'Available for <em>talks</em> and events.',
      'pal.p': 'For event organizers, business fairs and companies looking for an international perspective on brand strategy, marketing and expansion across emerging markets.',
      'pal.t1': 'Brand authority for leaders and founders',
      'pal.t2': 'Strategic marketing for international expansion',
      'pal.t3': 'Premium brands across cultures',
      'pal.t4': 'Hospitality, brand and customer experience',
      'pal.t5': 'Brazil and India — opportunities and strategy',
      'pal.hl1': '<strong>Speaker</strong> — Join Digital Meet, Joinville · Consumer Experience',
      'pal.hl2': '<strong>1st place</strong> — Desafio Empreender, Cyrela Institute',
      'pal.cta': 'Invitations for talks and events:',

      // footer
      'footer.title': 'Shall we talk about the next step for your brand?',
      'footer.btn': 'Talk to Andréa',
      'footer.socialsAria': 'Contact channels',
      'footer.email': 'Email',
      'footer.rights': '&copy; 2026 Andréa Faria Strategic Marketing. <br>All rights reserved.',

      // lightbox
      'lightbox.aria': 'Gallery',
      'lightbox.close': 'Close gallery',

      // whatsapp URLs (English-text version)
      'wa.talk.url': 'https://wa.me/5521972452742?text=Hi%20Andr%C3%A9a%21%20I%27d%20like%20to%20talk%20about%20marketing%20direction%20for%20my%20business.',
      'wa.meet.url': 'https://wa.me/5521972452742?text=Hi%20Andr%C3%A9a%21%20I%27d%20like%20to%20schedule%20a%20meeting.',
      'wa.method.url': 'https://wa.me/5521972452742?text=Hi%20Andr%C3%A9a%21%20I%27d%20like%20to%20understand%20your%20work%20method.',
      'wa.serv1.url': 'https://wa.me/5521972452742?text=I%27m%20interested%20in%20Marketing%20Direction',
      'wa.serv2.url': 'https://wa.me/5521972452742?text=I%27m%20interested%20in%20Marketing%20Consulting',
      'wa.serv3.url': 'https://wa.me/5521972452742?text=I%27m%20interested%20in%20Brand%20%26%20Positioning%20%28Factory%29',
      'wa.serv4.url': 'https://wa.me/5521972452742?text=I%27m%20interested%20in%20Content%20%26%20Visual%20Production%20%28The%20Light%20of%20Diya%29'
    }
  };

  const LANG_KEY = 'af.lang';
  const SUPPORTED = ['pt', 'en'];

  const detectInitialLang = () => {
    // 1. URL ?lang=xx
    try {
      const url = new URL(window.location.href);
      const qp = url.searchParams.get('lang');
      if (qp && SUPPORTED.includes(qp)) return qp;
    } catch (e) { /* ignore */ }

    // 2. localStorage
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored && SUPPORTED.includes(stored)) return stored;
    } catch (e) { /* ignore */ }

    // 3. navigator
    const nav = (navigator.language || navigator.userLanguage || 'pt').toLowerCase();
    if (nav.startsWith('pt')) return 'pt';
    if (nav.startsWith('en')) return 'en';

    // 4. default
    return 'pt';
  };

  const applyLang = (lang) => {
    if (!SUPPORTED.includes(lang)) lang = 'pt';
    const dict = I18N[lang];
    if (!dict) return;

    // texto cru
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key || !(key in dict)) return;
      el.textContent = dict[key];
    });

    // texto com HTML (br, strong, em)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (!key || !(key in dict)) return;
      el.innerHTML = dict[key];
    });

    // atributos: data-i18n-attr-{name}="key"
    document.querySelectorAll('*').forEach((el) => {
      for (const attr of el.attributes) {
        if (!attr.name.startsWith('data-i18n-attr-')) continue;
        const targetAttr = attr.name.replace('data-i18n-attr-', '');
        const key = attr.value;
        if (!key || !(key in dict)) continue;
        // decodifica entidades para o attr (querystrings já vêm prontas)
        el.setAttribute(targetAttr, dict[key]);
      }
    });

    // <html lang>
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');

    // og:locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'en' ? 'en_US' : 'pt_BR');

    // estado visual do switch
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang-set') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    // persiste
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  };

  const initialLang = detectInitialLang();
  applyLang(initialLang);

  // bind dos botões PT/EN
  document.querySelectorAll('[data-lang-set]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-lang-set');
      applyLang(target);
    });
  });

  // expõe para debug/manual
  window.__setLang = applyLang;
})();

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
