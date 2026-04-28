// ===========================
// Reveal on Scroll Animation
// ===========================
const initReveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(section => observer.observe(section));
};

// ===========================
// Navbar Shrink on Scroll
// ===========================
const initNavScroll = () => {
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(0, 0, 0, 0.95)';
            nav.style.padding = '12px 5%';
            nav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(17, 17, 17, 0.85)';
            nav.style.padding = '20px 5%';
            nav.style.boxShadow = 'none';
        }
    });
};

// ===========================
// Hamburger Menu Toggle
// ===========================
const initHamburger = () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = navLinks.querySelectorAll('.nav-link');

    // Toggle open/close
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
        }
    });
};

// ===========================
// Mobile Parallax Effect
// ===========================
const initMobileParallax = () => {
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        if (window.innerWidth < 768) {
            hero.style.backgroundPositionY = `calc(50% + ${window.scrollY * 0.4}px)`;
        }
    });
};

// ===========================
// Init Everything on Load
// ===========================
window.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initNavScroll();
    initHamburger();
    initMobileParallax();
});
