// Toggle mobile nav
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
  
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentUrl = window.location.href;
  
    navLinks.forEach(link => {
      if (currentUrl.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
  
      // Optional: toggle 'active' manually when clicked
      link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  });
  
  