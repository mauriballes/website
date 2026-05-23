import { useEffect } from 'react';
import {
  ArrowUpRight,
  Boxes,
  Braces,
  Code2,
  Coffee,
  Cpu,
  GitBranch,
  MapPin,
  MessageSquare,
  MonitorCog,
  Network,
  Play,
  Radio,
  RadioTower,
  ServerCog,
  ShieldCheck,
  Terminal,
  Video,
} from 'lucide-react';

const stack = [
  'Kubernetes',
  'Docker',
  'Linux',
  'CI/CD',
  'Cloud',
  'Python',
  'JavaScript',
  'TypeScript',
  'Django',
  'React',
  'PostgreSQL',
  'Nginx',
];

const content = {
  en: {
    htmlLang: 'en',
    skip: 'Skip to content',
    navLabel: 'Main navigation',
    brandLabel: 'Go home',
    logoAlt: 'mauriballes logo',
    nav: {
      work: 'Work',
      projects: 'Projects',
      contact: 'Contact',
    },
    language: {
      current: 'EN',
      switchLabel: 'Ver en español',
      switchHref: '/es',
      switchText: 'ES',
    },
    hero: {
      eyebrow: '~/santa-cruz-bolivia',
      title: 'Mauricio Ballesteros',
      lead: 'DevOps engineer with web developer skills. I build platforms, automate deployments, and turn technical ideas into systems teams can actually operate.',
      contact: 'Contact',
      code: 'View Code',
      summaryLabel: 'Technical summary',
      terminal: [
        ['$', 'whoami', 'software-engineer.devops.teacher'],
        ['$', 'location --current', 'Santa Cruz, Bolivia'],
        ['$', 'focus --list', 'platforms, ci/cd, kubernetes, web'],
      ],
    },
    metrics: [
      { label: 'GitHub repos', value: '45' },
      { label: 'Technical gists', value: '27' },
      { label: 'Home base', value: 'BO' },
    ],
    about: {
      kicker: 'About Me',
      title: 'Coffee, infrastructure, and web with a product mindset.',
      body: 'I am a Computer Engineer based in Bolivia. My main focus is DevOps, but I also enjoy web development, teaching, and creating technical content. I care about helping teams ship software with less friction: clear environments, reliable pipelines, observability, and documentation people actually use.',
    },
    stack: {
      kicker: 'Stack',
      title: 'Tools that often show up in my terminal.',
    },
    work: {
      kicker: 'Experience',
      title: 'From code to platforms people can operate.',
      items: [
        {
          role: 'Senior Platform Engineer I',
          company: 'Playbypoint',
          period: '2025 - Now',
          detail: 'Platforms, automation, reliability, and system operations for SaaS products.',
        },
        {
          role: 'Teacher',
          company: 'EDteam',
          period: '2020 - Now',
          detail: 'Technical content and training for people who want to build better software.',
        },
        {
          role: 'Senior DevOps Engineer',
          company: 'AssureSoft',
          period: '2023 - 2025',
          detail: 'Infrastructure, pipelines, and product team support focused on continuous delivery.',
        },
        {
          role: 'Team Leader DevOps Platforms',
          company: 'Salamanca Solutions International',
          period: '2021 - 2023',
          detail: 'Technical leadership across DevOps platforms, deployments, and environment standards.',
        },
        {
          role: 'Co-Founder & CTO',
          company: 'SOMOS.ai',
          period: '2020',
          detail: 'Product building, architecture decisions, and early technical execution.',
        },
      ],
    },
    projects: {
      kicker: 'Projects',
      title: 'Small public labs.',
      items: [
        {
          name: 'Personal Page',
          href: 'https://mauriballes.com',
          icon: MonitorCog,
          detail: 'The public lab where my technical identity and web experiments live.',
        },
        {
          name: 'Bayesianas Expertos',
          href: 'https://bayesianas.mauriballes.com',
          icon: Network,
          detail: 'Academic expert-systems project with a probabilistic approach.',
        },
        {
          name: 'Binary Tree',
          href: 'https://tree.mauriballes.com',
          icon: Braces,
          detail: 'Binary tree visualization built with TypeScript.',
        },
        {
          name: 'django-up',
          href: 'https://github.com/mauriballes/django-up',
          icon: ServerCog,
          detail: 'Automation for deploying Django projects with Gunicorn.',
        },
      ],
    },
    contact: {
      kicker: 'Networks',
      title: 'Available to talk about platforms, web, and education.',
      body: 'Made in Bolivia for the world. If something here resonates, LinkedIn or GitHub are the best entry points.',
    },
    links: [
      { label: 'GitHub', href: 'https://github.com/mauriballes', icon: GitBranch },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mauriballes/', icon: MessageSquare },
      { label: 'YouTube', href: 'https://www.youtube.com/@mauriballes', icon: Video },
      { label: 'Twitter/X', href: 'https://twitter.com/mauriballes', icon: RadioTower },
      { label: 'Twitch', href: 'https://www.twitch.tv/mauriballes', icon: Terminal },
    ],
    footer: {
      location: 'Santa Cruz, Bolivia',
      back: 'Back to top',
    },
  },
  es: {
    htmlLang: 'es',
    skip: 'Saltar al contenido',
    navLabel: 'Navegacion principal',
    brandLabel: 'Ir al inicio',
    logoAlt: 'Logo de mauriballes',
    nav: {
      work: 'Trabajo',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    language: {
      current: 'ES',
      switchLabel: 'View in English',
      switchHref: '/',
      switchText: 'EN',
    },
    hero: {
      eyebrow: '~/santa-cruz-bolivia',
      title: 'Mauricio Ballesteros',
      lead: 'DevOps engineer with web developer skills. Construyo plataformas, automatizo despliegues y convierto ideas tecnicas en sistemas que se pueden operar.',
      contact: 'Contactar',
      code: 'Ver Codigo',
      summaryLabel: 'Resumen tecnico',
      terminal: [
        ['$', 'whoami', 'software-engineer.devops.teacher'],
        ['$', 'location --current', 'Santa Cruz, Bolivia'],
        ['$', 'focus --list', 'platforms, ci/cd, kubernetes, web'],
      ],
    },
    metrics: [
      { label: 'GitHub repos', value: '45' },
      { label: 'Gists tecnicos', value: '27' },
      { label: 'Base', value: 'BO' },
    ],
    about: {
      kicker: 'Acerca De Mi',
      title: 'Cafe, infraestructura y web con mentalidad de producto.',
      body: 'Soy Ingeniero Informatico en Bolivia. Mi foco principal esta en DevOps, pero tambien disfruto el desarrollo web, la docencia y la creacion de contenido tecnico. Me interesa que los equipos puedan entregar software con menos friccion: ambientes claros, pipelines confiables, observabilidad y documentacion que realmente se use.',
    },
    stack: {
      kicker: 'Stack',
      title: 'Herramientas que aparecen seguido en mi terminal.',
    },
    work: {
      kicker: 'Experiencia',
      title: 'De codigo a plataformas operables.',
      items: [
        {
          role: 'Senior Platform Engineer I',
          company: 'Playbypoint',
          period: '2025 - Ahora',
          detail: 'Plataformas, automatizacion, confiabilidad y operacion de sistemas para productos SaaS.',
        },
        {
          role: 'Teacher',
          company: 'EDteam',
          period: '2020 - Ahora',
          detail: 'Contenido tecnico y formacion para personas que quieren construir mejor software.',
        },
        {
          role: 'Senior DevOps Engineer',
          company: 'AssureSoft',
          period: '2023 - 2025',
          detail: 'Infraestructura, pipelines y soporte a equipos de producto con foco en entrega continua.',
        },
        {
          role: 'Team Leader DevOps Platforms',
          company: 'Salamanca Solutions International',
          period: '2021 - 2023',
          detail: 'Liderazgo tecnico en plataformas DevOps, despliegues y estandarizacion de ambientes.',
        },
        {
          role: 'Co-Founder & CTO',
          company: 'SOMOS.ai',
          period: '2020',
          detail: 'Construccion de producto, decisiones de arquitectura y ejecucion tecnica temprana.',
        },
      ],
    },
    projects: {
      kicker: 'Proyectos',
      title: 'Pequenos laboratorios publicos.',
      items: [
        {
          name: 'Personal Page',
          href: 'https://mauriballes.com',
          icon: MonitorCog,
          detail: 'El laboratorio publico donde vive mi identidad tecnica y experimentos web.',
        },
        {
          name: 'Bayesianas Expertos',
          href: 'https://bayesianas.mauriballes.com',
          icon: Network,
          detail: 'Proyecto academico de sistemas expertos con enfoque probabilistico.',
        },
        {
          name: 'Binary Tree',
          href: 'https://tree.mauriballes.com',
          icon: Braces,
          detail: 'Visualizacion de arboles binarios construida con TypeScript.',
        },
        {
          name: 'django-up',
          href: 'https://github.com/mauriballes/django-up',
          icon: ServerCog,
          detail: 'Automatizacion para desplegar proyectos Django usando Gunicorn.',
        },
      ],
    },
    contact: {
      kicker: 'Redes',
      title: 'Disponible para conversar de plataformas, web y educacion.',
      body: 'Hecho en Bolivia para el mundo. Si algo de aqui resuena, el mejor punto de entrada es LinkedIn o GitHub.',
    },
    links: [
      { label: 'GitHub', href: 'https://github.com/mauriballes', icon: GitBranch },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mauriballes/', icon: MessageSquare },
      { label: 'YouTube', href: 'https://www.youtube.com/@mauriballes', icon: Video },
      { label: 'Twitter/X', href: 'https://twitter.com/mauriballes', icon: RadioTower },
      { label: 'Twitch', href: 'https://www.twitch.tv/mauriballes', icon: Terminal },
    ],
    footer: {
      location: 'Santa Cruz, Bolivia',
      back: 'Volver al inicio',
    },
  },
};

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function App() {
  const locale = window.location.pathname.startsWith('/es') ? 'es' : 'en';
  const t = content[locale];
  const basePath = locale === 'es' ? '/es' : '';
  const sectionHref = (id) => `${basePath}#${id}`;

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t.htmlLang]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <div className="shell">
        <header className="topbar" aria-label={t.navLabel}>
          <a className="brand" href={sectionHref('home')} aria-label={t.brandLabel}>
            <img src="/logo.svg" width="40" height="40" alt={t.logoAlt} />
            <span translate="no">mauriballes</span>
          </a>
          <nav className="nav">
            <a href={sectionHref('work')}>{t.nav.work}</a>
            <a href={sectionHref('projects')}>{t.nav.projects}</a>
            <a href={sectionHref('contact')}>{t.nav.contact}</a>
            <a className="language-link" href={t.language.switchHref} aria-label={t.language.switchLabel}>
              {t.language.switchText}
            </a>
          </nav>
        </header>

        <main id="main">
          <section id="home" className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">
                <Terminal size={16} aria-hidden="true" />
                <span>{t.hero.eyebrow}</span>
              </p>
              <h1 id="hero-title">{t.hero.title}</h1>
              <p className="lead">{t.hero.lead}</p>
              <div className="hero-actions">
                <ExternalLink className="button primary" href="https://www.linkedin.com/in/mauriballes/">
                  <MessageSquare size={18} aria-hidden="true" />
                  {t.hero.contact}
                </ExternalLink>
                <ExternalLink className="button ghost" href="https://github.com/mauriballes">
                  <Code2 size={18} aria-hidden="true" />
                  {t.hero.code}
                </ExternalLink>
              </div>
            </div>

            <aside className="terminal-card" aria-label={t.hero.summaryLabel}>
              <div className="terminal-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="terminal-body">
                {t.hero.terminal.map(([prompt, command, output]) => (
                  <div key={command}>
                    <p>
                      <span>{prompt}</span> {command}
                    </p>
                    {command === 'focus --list' ? <code>{output}</code> : <strong>{output}</strong>}
                  </div>
                ))}
              </div>
            </aside>
          </section>

          <section className="signal-grid" aria-label="Metrics">
            {t.metrics.map((item) => (
              <div className="metric" key={item.label}>
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </section>

          <section className="section about" aria-labelledby="about-title">
            <div>
              <p className="section-kicker">
                <Coffee size={16} aria-hidden="true" />
                {t.about.kicker}
              </p>
              <h2 id="about-title">{t.about.title}</h2>
            </div>
            <p>{t.about.body}</p>
          </section>

          <section className="section" aria-labelledby="stack-title">
            <div className="section-heading">
              <p className="section-kicker">
                <Cpu size={16} aria-hidden="true" />
                {t.stack.kicker}
              </p>
              <h2 id="stack-title">{t.stack.title}</h2>
            </div>
            <div className="stack-list">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section id="work" className="section" aria-labelledby="work-title">
            <div className="section-heading">
              <p className="section-kicker">
                <Boxes size={16} aria-hidden="true" />
                {t.work.kicker}
              </p>
              <h2 id="work-title">{t.work.title}</h2>
            </div>
            <div className="timeline">
              {t.work.items.map((item) => (
                <article className="timeline-item" key={`${item.company}-${item.period}`}>
                  <div>
                    <span>{item.period}</span>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="section" aria-labelledby="projects-title">
            <div className="section-heading">
              <p className="section-kicker">
                <ShieldCheck size={16} aria-hidden="true" />
                {t.projects.kicker}
              </p>
              <h2 id="projects-title">{t.projects.title}</h2>
            </div>
            <div className="project-grid">
              {t.projects.items.map((project) => {
                const Icon = project.icon;
                return (
                  <ExternalLink className="project-card" href={project.href} key={project.name}>
                    <Icon size={24} aria-hidden="true" />
                    <div>
                      <h3>{project.name}</h3>
                      <p>{project.detail}</p>
                    </div>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </ExternalLink>
                );
              })}
            </div>
          </section>

          <section id="contact" className="section contact" aria-labelledby="contact-title">
            <div>
              <p className="section-kicker">
                <Radio size={16} aria-hidden="true" />
                {t.contact.kicker}
              </p>
              <h2 id="contact-title">{t.contact.title}</h2>
              <p>{t.contact.body}</p>
            </div>
            <div className="link-grid">
              {t.links.map((link) => {
                const Icon = link.icon;
                return (
                  <ExternalLink className="social-link" href={link.href} key={link.label}>
                    <Icon size={18} aria-hidden="true" />
                    <span>{link.label}</span>
                  </ExternalLink>
                );
              })}
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>
            <MapPin size={16} aria-hidden="true" />
            {t.footer.location}
          </p>
          <p translate="no">mauriballes.com</p>
          <a href={sectionHref('home')} aria-label={t.footer.back}>
            <Play size={16} aria-hidden="true" />
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
