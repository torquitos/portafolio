const projects = [
  {
    name: 'shimeji-nexus',
    desc: 'Asistente de escritorio interactivo tipo shimeji hecho en Python.',
    lang: 'Python',
    logoKey: 'shimeji',
    url: 'https://github.com/torquitos/shimeji-nexus'
  },
  {
    name: 'gymfitpro',
    desc: 'App web para gestión de rutinas de gimnasio con JavaScript y GitHub Pages.',
    lang: 'JavaScript',
    logoKey: 'gym',
    url: 'https://github.com/torquitos/gymfitpro',
    demo: 'https://torquitos.github.io/gymfitpro'
  },
  {
    name: 'citali',
    desc: 'Proyecto web en JavaScript. Mi trabajo más reciente.',
    lang: 'JavaScript',
    logoKey: 'citali',
    url: 'https://github.com/torquitos/citali'
  },
  {
    name: 'mini-reproductor',
    desc: 'Reproductor de música minimalista hecho en Python.',
    lang: 'Python',
    logoKey: 'music',
    url: 'https://github.com/torquitos/mini-reproductor'
  },
  {
    name: 'informacion-dinamicas-razam',
    desc: 'Página web informativa con GitHub Pages. HTML puro.',
    lang: 'HTML',
    logoKey: 'info',
    url: 'https://github.com/torquitos/informacion-dinamicas-razam',
    demo: 'https://torquitos.github.io/informacion-dinamicas-razam'
  }
];

const logos = {
  HTML: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 18.178l4.62-1.256.623-6.978H9.026L8.822 7.89h8.36l.19-2.043H6.707l.592 6.646h6.563l-.255 2.806-2.636.702-2.633-.702-.228-1.919H7.812l.398 3.655L12 18.178zM2.777 0l2.036 20.242L12 24l7.187-3.758L21.223 0H2.777z"/></svg>',
  CSS: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2.585 21.998 12 24l9.415-2.002L12 2zm0 4.335l5.564 12.368H13.95l-.748-1.655H9.68l-.3.663H6.67L12 6.335zm0 3.72l-.224.502-.742 1.648L12 15.36l2.36-3.155h-2.36z"/></svg>',
  JavaScript: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.832-.88-.052-.076-.102-.131-.183-.219-.09-.12-.18-.029-.275.024-.284.162-.36.408-.498.683.549.735 1.2 1.455 2.415 1.575 1.14.105 2.1-.12 2.64-.81.285-.359.374-.855.374-1.742V11.03h.001z"/></svg>',
  Python: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-3.2 0-5.6.5-6.5 1.5-.7.8-.8 2-.8 3.5v2.5c0 1.3.2 2.2.8 2.8.6.6 1.5.8 2.5.7 1.3-.1 2-.6 2.5-1.3.4-.6.5-1.3.5-2.5H9.5c0 1.5-.1 2.3-.5 2.8-.4.5-1 .6-1.5.5-.8-.1-1.2-.5-1.5-1-.2-.5-.2-1.2-.2-2.3V7c0-1 .1-1.7.4-2.2.3-.5.8-.8 1.8-.8h5c1 0 1.5.3 1.8.8.3.5.4 1.2.4 2.2v2c0 .5-.1.8-.3 1h1.5V7c0-1.5 0-2.7-.7-3.5C17.6 2.5 15.2 2 12 2zM9 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/><path d="M6 11.5v3c0 1.5 0 2.7.7 3.5.9 1 3.2 1.5 6.3 1.5h4c1.5 0 2.5-.3 3.2-1 .7-.8.8-2 .8-3.5V12c0-1.3-.2-2.2-.8-2.8-.6-.6-1.5-.8-2.5-.7-1.3.1-2 .6-2.5 1.3-.4.6-.5 1.3-.5 2.5h1.5c0-1.5.1-2.3.5-2.8.4-.5 1-.6 1.5-.5.8.1 1.2.5 1.5 1 .2.5.2 1.2.2 2.3v2.5c0 1-.1 1.7-.4 2.2-.3.5-.8.8-1.8.8h-5c-1 0-1.5-.3-1.8-.8-.3-.5-.4-1.2-.4-2.2v-2c0-.5.1-.8.3-1H6z"/></svg>',
  SQL: '<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5"/></svg>',
  Git: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.716.72.716 1.882 0 2.6-.719.719-1.88.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>'
};

const skills = [
  { name: 'HTML', logo: logos.HTML },
  { name: 'CSS', logo: logos.CSS },
  { name: 'JavaScript', logo: logos.JavaScript },
  { name: 'Python', logo: logos.Python },
  { name: 'SQL', logo: logos.SQL },
  { name: 'Git', logo: logos.Git }
];

const langMap = {
  'Python': 'python',
  'JavaScript': 'js',
  'HTML': 'html',
  'CSS': 'css'
};

function buildProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = projects.map(p => {
    const demoLink = p.demo
      ? `<a href="${p.demo}" target="_blank" rel="noopener" class="project-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Demo
        </a>`
      : '';
    return `
    <article class="project-card">
      <div class="project-header">
        <div class="project-icon ${langMap[p.lang]}">${projectLogos[p.logoKey]}</div>
        <a href="${p.url}" target="_blank" rel="noopener" class="project-name-link"><h3 class="project-name">${p.name}</h3></a>
      </div>
      <div class="project-body">
        <p class="project-desc">${p.desc}</p>
        <span class="project-lang ${langMap[p.lang]}">${p.lang}</span>
      </div>
      <div class="project-footer">
        <a href="${p.url}" target="_blank" rel="noopener" class="project-link">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
          Código
        </a>
        ${demoLink}
      </div>
    </article>`;
  }).join('');
}

function buildSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = skills.map(s => `
    <div class="skill-item">
      <span class="skill-icon">${s.logo}</span>
      ${s.name}
    </div>
  `).join('');
}

const projectLogos = {
  shimeji: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M8 14c-2.5 1-4 3-4 5h16c0-2-1.5-4-4-5"/><circle cx="10" cy="7" r="1" fill="currentColor"/><circle cx="14" cy="7" r="1" fill="currentColor"/></svg>',
  gym: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14M7 7l10 10M7 17L17 7"/><circle cx="12" cy="12" r="2"/></svg>',
  citali: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
};

function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.width = p.style.height = (Math.random() * 3 + 2) + 'px';
    p.style.animationDuration = (Math.random() * 10 + 8) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(p);
  }
}

function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
  });

  navLinks.forEach(l => {
    l.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('active');
    });
  });

  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 100) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
    lastScroll = current;
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section-title, .about-card, .focus-card, .stat-card, .skill-item, .project-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const saved = localStorage.getItem('theme');

  if (saved === 'light' || (!saved && prefersLight)) {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  toggle.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    if (current === 'light') {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
}

function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

buildProjects();
buildSkills();
createParticles();
initNav();
initScrollAnimations();
initScrollTop();
initTheme();
