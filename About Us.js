// document.addEventListener("DOMContentLoaded", () => {
//     // Animate cards on scroll
//     const cards = document.querySelectorAll('.about-card');
  
//     function animateCards() {
//       cards.forEach(card => {
//         const rect = card.getBoundingClientRect();
//         if (rect.top < window.innerHeight - 100) {
//           card.classList.add('fade-in');
//         }
//       });
//     }
  
    // window.addEventListener('scroll', animateCards);
    // animateCards(); // Trigger on load
  
    // Toggle nav on small screens
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Highlight active link
    const navItems = document.querySelectorAll(".nav-link");
    navItems.forEach(link => {
      if (window.location.href.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
      const animatedElements = document.querySelectorAll('.fade-in, .slide-in');
    
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, {
        threshold: 0.1
      });
    
      animatedElements.forEach(el => observer.observe(el));
    });
    