/* Maxim Spaas — GitHub Pages-ready, no libraries or build tools required. */
const projects = {
  motion: {
    title: 'Motion Study', category: 'MOBILITY / PERFORMANCE', image: 'assets/bike.svg',
    alt: 'Stylized road bicycle in a dark studio',
    description: 'A sample case-study space for performance-oriented design: the meeting point of aerodynamics, structure and emotional appeal. Replace this text with the real challenge, your process, sketches, prototypes and final product renders.'
  },
  flight: {
    title: 'Flight Study', category: 'AVIATION / FORM', image: 'assets/glider.svg',
    alt: 'Stylized sailplane seen from above',
    description: 'A sample project space for your interest in aviation and aerodynamic form. Use this area to explain what you designed, why you made certain choices, how you tested the idea and what you learned.'
  },
  timeless: {
    title: 'Timeless Objects', category: 'INDUSTRIAL DESIGN / BRAND DNA', image: 'assets/vespa.svg',
    alt: 'Mint-green retro-inspired kitchen appliance concept',
    description: 'A sample presentation for exploring how brand character can influence the shape and feel of an everyday object. Swap the illustration for your original renders and tell the story of the concept and its design decisions.'
  },
  knitlab: {
    title: 'KnitLab', category: 'PROTOTYPING / MECHATRONICS', image: 'assets/knitting.svg',
    alt: 'Stylized automated circular knitting machine',
    description: 'A sample case-study space for the Arduino-controlled knitting-machine project, bringing mechanical components, electronics and coding into one experience. Add your actual build photos, workflow and testing results here.'
  }
};

const header = document.getElementById('siteHeader');
const meter = document.getElementById('scrollMeter');
function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  meter.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  header.classList.toggle('is-scrolled', window.scrollY > 25);
}
window.addEventListener('scroll', updateScroll, { passive: true });
window.addEventListener('resize', updateScroll);
updateScroll();

const toggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileMenu');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
  mobileNav.classList.remove('is-open');
  mobileNav.setAttribute('inert', '');
}
toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  mobileNav.classList.toggle('is-open', !isOpen);
  if (isOpen) mobileNav.setAttribute('inert', '');
  else mobileNav.removeAttribute('inert');
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

const chips = [...document.querySelectorAll('.filter-chip')];
const cards = [...document.querySelectorAll('.project-card')];
chips.forEach(chip => chip.addEventListener('click', () => {
  const filter = chip.dataset.filter;
  chips.forEach(item => {
    const active = item === chip;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
}));

const dialog = document.getElementById('projectDialog');
const dialogClose = document.getElementById('dialogClose');
document.querySelectorAll('.open-project').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    document.getElementById('dialogTitle').textContent = project.title;
    document.getElementById('dialogCategory').textContent = project.category;
    document.getElementById('dialogDescription').textContent = project.description;
    const image = document.getElementById('dialogImage');
    image.src = project.image;
    image.alt = project.alt;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
function closeDialog() { dialog.close(); }
dialogClose.addEventListener('click', closeDialog);
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.addEventListener('click', e => {
  if (e.target === dialog) closeDialog();
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}

document.getElementById('footerYear').textContent = String(new Date().getFullYear());
