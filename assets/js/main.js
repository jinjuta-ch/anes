/* ==================================================
   MAIN JS
   - ควบคุมเมนูมือถือ
   - ปรับ aria-expanded เพื่อ accessibility
================================================== */
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 860) {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
let index = 0;

const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll("#sliderDots span");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// ปุ่ม
nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});

// dot
dots.forEach(dot => {
  dot.addEventListener("click", (e) => {
    index = parseInt(e.target.dataset.slide);
    updateSlider();
  });
});

// auto slide
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 5000);

// init
updateSlider();

/// Smooth scroll กลับด้านบน
document.getElementById("backToTop").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});