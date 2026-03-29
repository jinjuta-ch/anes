<script>
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const siteNav = document.getElementById('siteNav');
<script>
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');

  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('active'); // สลับการแสดงผลเมนู
    
    // เปลี่ยนไอคอนระหว่าง ขีด กับ กากบาท
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });
</script>
    if (menuToggle && siteNav) {
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // สลับคลาส 'active' (ต้องตรงกับใน CSS)
        siteNav.classList.toggle('active');
        
        // เปลี่ยนไอคอน
        const icon = menuToggle.querySelector('i');
        if (siteNav.classList.contains('active')) {
          icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
          icon.classList.replace('fa-xmark', 'fa-bars');
        }
      });

      // คลิกที่ลิงก์แล้วให้เมนูหุบเก็บ
      const navLinks = document.querySelectorAll('.site-nav a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          siteNav.classList.remove('active');
          menuToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
        });
      });

      // คลิกที่อื่นข้างนอกเมนูให้ปิดเมนู
      document.addEventListener('click', (e) => {
        if (!siteNav.contains(e.target) && !menuToggle.contains(e.target)) {
          siteNav.classList.remove('active');
          const icon = menuToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
        }
      });
    }
  });
</script>