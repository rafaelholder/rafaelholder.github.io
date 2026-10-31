// O texto em português fica no próprio index.html (marcado com data-i18n);
// aqui ficam só as traduções em inglês e os textos que não estão no HTML.
const translations = {
    pt: {
        'meta.title': 'Rafael Holder | Desenvolvedor SAP ABAP',
        'meta.description': 'Rafael Holder, Desenvolvedor SAP ABAP na EY. S/4HANA, CDS Views, RAP e Joule, com experiência em backend Java e Segurança da Informação.',
        'menu.open': 'Abrir menu',
        'menu.close': 'Fechar menu',
        'theme.toLight': 'Ativar tema claro',
        'theme.toDark': 'Ativar tema escuro',
    },
    en: {
        'meta.title': 'Rafael Holder | SAP ABAP Developer',
        'meta.description': 'Rafael Holder, SAP ABAP Developer at EY. S/4HANA, CDS Views, RAP and Joule, with experience in Java backend development and information security.',
        'menu.open': 'Open menu',
        'menu.close': 'Close menu',
        'theme.toLight': 'Switch to light theme',
        'theme.toDark': 'Switch to dark theme',

        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.portfolio': 'Portfolio',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',

        'hero.role': 'SAP ABAP Developer',
        'hero.intro': 'At EY, I build and customize enterprise solutions on SAP S/4HANA. I also bring experience in Java backend development and information security.',
        'hero.techs': 'Main technologies',
        'hero.cta': 'View Projects',
        'code.label': "'Sales orders'",

        'about.title': 'About Me',
        'about.signature': "Rafael Holder's signature",
        'about.p1': "Hi! I'm Rafael Holder, a Junior SAP ABAP Developer at EY. I build and customize enterprise solutions on SAP S/4HANA, working with CDS Views, RAP (ABAP RESTful Application Programming Model) and Joule, SAP's generative AI assistant.",
        'about.p2': 'Before that, I built Java/Spring Boot microservices for an anti-fraud system during the CESAR Summer Job with CAIXA, and worked on infrastructure and SecOps at the Pernambuco Penal Police.',
        'about.p3': "This background in backend and security helps me deliver scalable, secure SAP solutions. Outside of work, I'm passionate about graphic novels.",

        'xp.title': 'Professional Experience',
        'xp.ey.period': 'Mar 2026 – present',
        'xp.ey.role': 'Junior SAP ABAP Developer',
        'xp.ey.desc': 'Development and customization of SAP S/4HANA solutions with ABAP, CDS Views and RAP.',
        'xp.cesar.period': 'Jan – Feb 2026',
        'xp.cesar.role': 'Full-stack Developer (Summer Job)',
        'xp.cesar.desc': 'Microservices architecture in Java/Spring Boot for an anti-fraud system.',
        'xp.seap.period': '2024 – Jun 2025',
        'xp.seap.role': 'Infrastructure & SecOps Intern',
        'xp.seap.org': 'Pernambuco Penal Police',
        'xp.seap.desc': 'Process automation with Python/Bash, SOC monitoring, database security, and ISO 27001 and LGPD compliance.',

        'skills.title': 'Skills',
        'skills.security': 'Security',
        'skills.infosec': 'Information Security',
        'skills.soft': 'Languages & Soft Skills',
        'skills.english': 'Fluent English',
        'skills.communication': 'Assertive communication',

        'portfolio.title': 'Project Portfolio',
        'portfolio.secure': 'Secure login system in Python, with bcrypt password hashing and a SQLite database.',
        'portfolio.rot13': 'Flask app that demonstrates how the ROT13 algorithm works, a variation of the Caesar cipher.',
        'portfolio.crypto': 'Shows the percentage change of cryptocurrencies using the Binance API.',
        'portfolio.binance': 'Binance API',
        'portfolio.link': 'View on GitHub',

        'blog.p1.date': 'April 24, 2025',
        'blog.p1.title': 'XP Investimentos data breach',
        'blog.p1.desc': 'A perspective on the data breach and how it could be used for spear phishing.',
        'blog.p2.date': 'July 29, 2025',
        'blog.p2.title': 'Mapping Tactics with MITRE ATT&CK',
        'blog.p2.desc': 'How the ATT&CK framework can be used to improve detection and incident response.',
        'blog.read': 'Read on LinkedIn (in Portuguese)',

        'contact.title': "Let's Talk",
        'contact.text': "I'm always open to new opportunities, projects and collaborations. Feel free to reach out.",
        'contact.email': 'Send Email',
        'contact.copyright': '© 2026 Rafael Holder. All rights reserved.',
    },
};

// Guarda os textos em português que já estão no HTML
document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!(key in translations.pt)) translations.pt[key] = el.textContent.trim();
});
document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (!(key in translations.pt)) translations.pt[key] = el.getAttribute('aria-label');
});

const storage = {
    get(key) {
        try { return localStorage.getItem(key); } catch (e) { return null; }
    },
    set(key, value) {
        try { localStorage.setItem(key, value); } catch (e) { /* sem armazenamento, só não lembra a escolha */ }
    },
};

let lang = 'pt';
const t = key => translations[lang][key] ?? translations.pt[key];

// Idioma: ?lang= na URL, depois a escolha salva, depois o idioma do navegador
const pickLanguage = () => {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl === 'pt' || fromUrl === 'en') return fromUrl;
    const saved = storage.get('lang');
    if (saved === 'pt' || saved === 'en') return saved;
    return (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';
};

const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

const isDark = () => document.documentElement.classList.contains('dark');

const updateThemeButton = () => {
    themeToggle.setAttribute('aria-label', t(isDark() ? 'theme.toLight' : 'theme.toDark'));
};

const updateMenuButton = () => {
    const open = !mobileMenu.classList.contains('hidden');
    mobileMenuButton.setAttribute('aria-label', t(open ? 'menu.close' : 'menu.open'));
};

const applyLanguage = next => {
    lang = next;
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]').setAttribute('content', t('meta.description'));

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });

    // O botão mostra o outro idioma, escrito nele mesmo
    const other = lang === 'pt' ? 'en' : 'pt';
    langToggle.textContent = other.toUpperCase();
    langToggle.setAttribute('lang', other === 'en' ? 'en' : 'pt-BR');
    langToggle.setAttribute('aria-label', other === 'en' ? 'Switch to English' : 'Mudar para português');

    updateThemeButton();
    updateMenuButton();
};

langToggle.addEventListener('click', () => {
    const next = lang === 'pt' ? 'en' : 'pt';
    storage.set('lang', next);
    // Tira o ?lang= da URL para a escolha salva valer ao recarregar
    const url = new URL(location.href);
    if (url.searchParams.has('lang')) {
        url.searchParams.delete('lang');
        history.replaceState(null, '', url);
    }
    applyLanguage(next);
});

// Tema: o script no <head> já aplicou a escolha salva ou a do sistema
const applyTheme = dark => {
    document.documentElement.classList.toggle('dark', dark);
    themeColor.setAttribute('content', dark ? '#070b14' : '#f7f9fc');
    updateThemeButton();
};

themeToggle.addEventListener('click', () => {
    const dark = !isDark();
    storage.set('theme', dark ? 'dark' : 'light');
    applyTheme(dark);
});

// Sem escolha salva, acompanha a troca de tema do sistema
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    if (!storage.get('theme')) applyTheme(!e.matches);
});

// Inicializa Lucide Icons
lucide.createIcons();
applyTheme(isDark());
applyLanguage(pickLanguage());

// Fundo no header ao rolar e destaque da seção atual no menu
const header = document.getElementById('header');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = document.querySelectorAll('.nav-link');

const onScroll = () => {
    header.classList.toggle('header-scrolled', window.scrollY > 50);

    let current = sections[0].id;
    for (const section of sections) {
        if (section.getBoundingClientRect().top <= 120) current = section.id;
    }
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Entrada suave dos blocos ao aparecerem na tela
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
} else {
    reveals.forEach(el => el.classList.add('visible'));
}

// Lógica para o menu mobile
const mobileMenuLinks = document.querySelectorAll('.mobile-link');

const toggleMenu = () => {
    const open = mobileMenu.classList.toggle('hidden') === false;
    document.body.classList.toggle('overflow-hidden', open);
    mobileMenuButton.setAttribute('aria-expanded', String(open));
    updateMenuButton();
    // Troca o ícone de menu para fechar (o Lucide substitui o <i> por <svg>, então recria)
    mobileMenuButton.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}"></i>`;
    lucide.createIcons();
};

mobileMenuButton.addEventListener('click', toggleMenu);
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});
