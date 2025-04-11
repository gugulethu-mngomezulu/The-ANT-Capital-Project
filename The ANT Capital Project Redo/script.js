function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".choose-card");
  
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observerInstance.unobserve(entry.target); // Animate only once
          }
        });
      },
      {
        threshold: 0.2 // Trigger when 20% of card is visible
      }
    );
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });
  


// Placeholder for future interactivity
console.log("Financial solutions section loaded.");






