
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

