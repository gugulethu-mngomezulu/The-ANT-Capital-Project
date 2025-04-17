let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;
  else slideIndex = index;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

// Auto slide
function autoSlide() {
  slideIndex++;
  showSlide(slideIndex);
  setTimeout(autoSlide, 6000); // 6 seconds
}

// Manual arrows
function changeSlide(n) {
  showSlide(slideIndex + n);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlide(slideIndex);
  autoSlide();
});

const amountInput = document.getElementById('loanAmount');
    const slider = document.getElementById('rangeSlider');
    const termSelect = document.getElementById('termSelect');

    function calculate() {
      const loan = parseFloat(amountInput.value);
      const months = parseInt(termSelect.value);
      const interest = loan * 0.1; // 10% interest
      const total = loan + interest;
      const monthly = total / months;

      document.getElementById('monthlyPay').textContent = 'R' + monthly.toFixed(0);
      document.getElementById('totalPay').textContent = 'R' + total.toFixed(0);
    }

    amountInput.addEventListener('input', () => {
      slider.value = amountInput.value;
      calculate();
    });



    slider.addEventListener('input', () => {
      amountInput.value = slider.value;
      calculate();
    });

    termSelect.addEventListener('change', calculate);
    window.onload = calculate;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });

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



document.getElementById("loanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formMessage = document.getElementById("formMessage");

    // Basic check for required files
    const payslips = form.payslips.files;
    const bankStatements = form.bankstatements.files;
    const idCopy = form.idcopy.files;

    if (payslips.length < 1 || bankStatements.length < 1 || idCopy.length < 1) {
      formMessage.style.display = "block";
      formMessage.style.color = "red";
      formMessage.innerText = "Please upload all required documents.";
      return;
    }

    // You can add file count checks here too if you want exactly 3
    if (payslips.length < 3) {
      formMessage.style.display = "block";
      formMessage.style.color = "red";
      formMessage.innerText = "Please upload at least 3 payslips.";
      return;
    }

    if (bankStatements.length < 3) {
      formMessage.style.display = "block";
      formMessage.style.color = "red";
      formMessage.innerText = "Please upload at least 3 bank statements.";
      return;
    }

    // Simulate success (you'll replace this with actual submit logic later)
    formMessage.style.display = "block";
    formMessage.style.color = "green";
    formMessage.innerText = "Application submitted successfully! We'll be in touch shortly.";

    // Optionally clear form
    form.reset();
  });