// ============ Mobile nav toggle ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.classList.toggle('active', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============ Scroll reveal ============
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ============ Journey connecting line ============
const journey = document.getElementById('journey');
const journeyLine = document.getElementById('journeyLine');

if (journey && journeyLine) {
  const journeyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        journeyLine.classList.add('grow');
        journeyObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  journeyObserver.observe(journey);
}

// ============ Nav dropdown "Productos" (click for mobile/touch) ============
const productsNavItem = document.getElementById('productsNavItem');
const productsNavToggle = document.getElementById('productsNavToggle');

if (productsNavItem && productsNavToggle) {
  productsNavToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 860) {
      e.preventDefault();
      productsNavItem.classList.toggle('open');
    }
  });
}

// ============ FAQ accordion (Academia) — defensivo, no afecta otras páginas ============
document.querySelectorAll('.faq-item__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    item.parentElement.querySelectorAll('.faq-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.faq-item__q').setAttribute('aria-expanded', 'false');
    });
    if (!wasOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ============ Header background on scroll ============
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 12) {
    nav.style.boxShadow = '0 1px 0 rgba(17,17,17,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
  lastScroll = current;
}, { passive: true });
