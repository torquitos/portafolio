const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');
const progress = document.getElementById('progress');

// Menú móvil
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

// Barra de progreso y nav que se oculta al bajar
let lastY = 0;
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  nav.classList.toggle('scrolled', y > 10);
  nav.classList.toggle('hide', y > lastY && y > 200 && !navLinks.classList.contains('open'));
  lastY = y;
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Aparición al hacer scroll
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Enlace activo según la sección visible
const sections = [...document.querySelectorAll('main section[id]')];
const linkFor = id => navLinks.querySelector(`a[href="#${id}"]`);
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.querySelectorAll('a').forEach(a => a.classList.remove('active'));
      linkFor(e.target.id)?.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObserver.observe(s));

// Luz que sigue el cursor en las tarjetas
document.querySelectorAll('.wip').forEach(card => {
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

// Lightbox para capturas
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.shot img').forEach(img =>
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.hidden = false;
  })
);
const closeLightbox = () => { lightbox.hidden = true; };
lightbox.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

document.getElementById('toTop').addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

// Otros repositorios, desde la API de GitHub (si falla, la sección queda oculta)
const others = ['bot-binance', 'app-clima'];
fetch('https://api.github.com/users/torquitos/repos?per_page=100&sort=updated')
  .then(r => (r.ok ? r.json() : Promise.reject()))
  .then(repos => {
    const list = repos.filter(r => others.includes(r.name));
    if (!list.length) return;
    document.getElementById('moreList').innerHTML = list.map(r => `
      <li><a href="${r.html_url}" target="_blank" rel="noopener">
        <span>${r.name}</span><span class="lang">${r.language}</span>
      </a></li>`).join('');
    document.getElementById('more').hidden = false;
  })
  .catch(() => {});
