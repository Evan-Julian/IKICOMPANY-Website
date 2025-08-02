document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-menu");
  const mainNav = document.getElementById("mainNav");

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener("click", function () {
      hamburgerBtn.classList.toggle("active");
      mainNav.classList.toggle("active");
      document.body.classList.toggle("menu-open"); // Optional: for preventing scroll behind menu
    });

    // Close menu when a navigation link is clicked (for smooth scroll)
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        mainNav.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // Back to top button functionality
  const backToTopBtn = document.getElementById("backToTopBtn");

  if (backToTopBtn) {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    }

    backToTopBtn.onclick = function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
  }
});
