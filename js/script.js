document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  let currentIndex = 0;
  const slideInterval = 3000; // Interval between slides in milliseconds (3 seconds)

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Auto slide function
  function autoSlide() {
    nextSlide();
  }

  // Set interval for auto slide
  let slideTimer = setInterval(autoSlide, slideInterval);

  // Event listeners for manual navigation
  document.getElementById("nextBtn").addEventListener("click", function () {
    clearInterval(slideTimer); // Stop auto slide when manually navigating
    nextSlide();
    slideTimer = setInterval(autoSlide, slideInterval); // Restart auto slide
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
    clearInterval(slideTimer);
    prevSlide();
    slideTimer = setInterval(autoSlide, slideInterval);
  });

  // Initial slide
  showSlide(currentIndex);
});
