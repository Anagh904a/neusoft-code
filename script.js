// Scroll animation
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});
  document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("closeSidebar");

    openBtn?.addEventListener("click", () => {
      sidebar.style.display = "block";
      setTimeout(() => {
        sidebar.classList.remove("translate-x-full");
      }, 10);
    });

    closeBtn?.addEventListener("click", () => {
      sidebar.classList.add("translate-x-full");
      setTimeout(() => {
        sidebar.style.display = "none";
      }, 300);
    });
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
