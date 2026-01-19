// Theme Toggle
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (nav && nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      nav.classList.remove('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add animation classes to elements as they scroll into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards for animation
  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
});