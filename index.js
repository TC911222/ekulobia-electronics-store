
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const toggle = item.querySelector(".faq-toggle");
    const answer = item.querySelector(".faq-answer");

    item.querySelector(".faq-question").addEventListener("click", () => {
      const isOpen = answer.style.display === "block";
      document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
      document.querySelectorAll(".faq-toggle").forEach(t => t.textContent = "+");

      if (!isOpen) {
        answer.style.display = "block";
        toggle.textContent = "−";
      } else {
        answer.style.display = "none";
        toggle.textContent = "+";
      }
    });
  });

/* AOS */

  if (window.innerWidth <= 768) {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  function initAOSForSmallScreens() {
    if (window.innerWidth <= 768) {
      AOS.init({ duration: 1000, once: true });
    } else {
      // Deactivate AOS on large screens
      document.querySelectorAll('[data-aos]').forEach(el => {
        el.removeAttribute('data-aos');
      });
    }
  }

  // Run once on load
  initAOSForSmallScreens();

  // Optional: Watch for screen size changes
  window.addEventListener('resize', function () {
    initAOSForSmallScreens();
  });


  /* END AOS */

