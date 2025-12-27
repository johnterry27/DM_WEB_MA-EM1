// ===========================================
// Hamburger Menu Toggle
// ===========================================
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when clicking nav link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// ===========================================
// Scroll Reveal Animation
// ===========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add delay for staggered animation
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 100);
    }
  });
}, observerOptions);

// Observe all cards
const cards = document.querySelectorAll(
  ".keunggulan-card, .menu-card, .kontak-card"
);
cards.forEach((card) => {
  observer.observe(card);
});

// ===========================================
// Navbar Background on Scroll
// ===========================================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
  }
});

// ===========================================
// Smooth Scroll Enhancement
// ===========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ===========================================
// Image Error Handling
// ===========================================
const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("error", function () {
    this.style.backgroundColor = "#f0f0f0";
    this.style.display = "flex";
    this.style.alignItems = "center";
    this.style.justifyContent = "center";
  });
});
