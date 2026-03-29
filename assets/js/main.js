<script>
  // ใช้ DOMContentLoaded เพื่อให้แน่ใจว่า HTML โหลดเสร็จก่อนสคริปต์ทำงาน
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const siteNav = document.getElementById('siteNav');

    // ตรวจสอบว่ามีปุ่มและเมนูอยู่ในหน้านี้จริงหรือไม่ (ป้องกัน Error)
    if (menuToggle && siteNav) {
      
      // เมื่อคลิกปุ่ม Hamburger
      menuToggle.addEventListener('click', (e) => {
        // ป้องกันการทำงานซ้ำซ้อน
        e.stopPropagation(); 
        
        siteNav.classList.toggle('active');
        
        const icon = menuToggle.querySelector('i');
        if (icon) {
          if (siteNav.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
          } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
          }
        }
      });

      // เมื่อคลิกที่ลิงก์เมนู ให้ปิดเมนูอัตโนมัติ
      const navLinks = document.querySelectorAll('.site-nav a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          siteNav.classList.remove('active');
          const icon = menuToggle.querySelector('i');
          if (icon) {
            icon.classList.replace('fa-xmark', 'fa-bars');
          }
        });
      });

      // (เพิ่มเติม) คลิกที่อื่นบนหน้าจอให้เมนูหุบเก็บเอง
      document.addEventListener('click', (e) => {
        if (!siteNav.contains(e.target) && !menuToggle.contains(e.target)) {
          siteNav.classList.remove('active');
          const icon = menuToggle.querySelector('i');
          if (icon) icon.classList.replace('fa-xmark', 'fa-bars');
        }
      });
    }
  });
</script>