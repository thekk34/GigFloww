// ===== Navbar Toggle for Mobile =====
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// ===== Swiper Initialization for Testimonials =====
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ===== Sign-Up Form Validation and Thank You Message =====
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const skill = this.skill.value.trim();
  const portfolio = this.portfolio.value.trim();
  const thankYouMsg = document.getElementById("thankYouMsg");

  if (!name || !email || !skill || !portfolio) {
    alert("Please fill all fields correctly!");
    return;
  }

  thankYouMsg.textContent = `Thank you, ${name}, for joining GigFloww!`;
  this.reset();
});
