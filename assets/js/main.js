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

<script>
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');

  // เมื่อคลิกปุ่ม Hamburger
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('active'); // สลับการเพิ่ม/ลบคลาส 'active'
    
    // เปลี่ยนไอคอนจาก ขีด (bars) เป็น กากบาท (xmark)
    const icon = menuToggle.querySelector('i');
    if (siteNav.classList.contains('active')) {
      icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
      icon.classList.replace('fa-xmark', 'fa-bars');
    }
  });

  // เมื่อคลิกที่ลิงก์เมนู ให้ปิดเมนูอัตโนมัติ (สำหรับหน้าแบบ Single Page)
  const navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('active');
      menuToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
    });
  });
</script>