// ── Scroll Animations ──
const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

fadeElements.forEach(el => observer.observe(el));


// ── Hamburger Menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');
const lines = document.querySelectorAll('.hamburger-line');

let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    mobileMenu.style.opacity = '1';
    mobileMenu.style.pointerEvents = 'all';
    // Animate to X
    lines[0].style.transform = 'translateY(8px) rotate(45deg)';
    lines[1].style.opacity = '0';
    lines[2].style.transform = 'translateY(-8px) rotate(-45deg)';
  } else {
    mobileMenu.style.opacity = '0';
    mobileMenu.style.pointerEvents = 'none';
    // Back to hamburger
    lines[0].style.transform = 'none';
    lines[1].style.opacity = '1';
    lines[2].style.transform = 'none';
  }
});

// Close menu when link clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.style.opacity = '0';
    mobileMenu.style.pointerEvents = 'none';
    lines[0].style.transform = 'none';
    lines[1].style.opacity = '1';
    lines[2].style.transform = 'none';
  });
});
// ── Custom Cursor ──
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

document.addEventListener('mousemove', (e) => {
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';

  setTimeout(() => {
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  }, 80);
});

// Grow on hoverable elements
document.querySelectorAll('a, button, .skill-tag, .project-card, .frame-stack').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-grow'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-grow'));
});