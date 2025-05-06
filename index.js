document.addEventListener("DOMContentLoaded", () => {
  // Slide Functionality
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  if (slides.length > 0) {
    // showSlide(currentSlide); // Show first slide on load
    setInterval(nextSlide, 2000); // Auto-slide every 5 seconds
  }

  // Toggle mobile nav
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Highlight active nav link
  const navItems = document.querySelectorAll(".nav-link");
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navItems.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });

    // Auto-highlight based on current URL
    const currentUrl = window.location.href;
    if (currentUrl.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});
