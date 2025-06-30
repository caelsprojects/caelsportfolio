document.addEventListener('DOMContentLoaded', function () {
  const scrollBtn = document.querySelector('.scroll-img-btn');
  const aboutSection = document.getElementById('about');
  if (scrollBtn && aboutSection) {
    scrollBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const yOffset = -64; // height of navbar
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const carouselImages = [
    "https://i.ibb.co/3mV8yysB/6-C5239-D6-A956-477-B-98-D2-91615096-B29-F.jpg?",
    "https://i.ibb.co/G4bSY3my/53-B2-CDF7-0936-4-F3-C-9-D62-8-BF0555-A4856.jpg?q=80&w=800&h=900&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&h=900&fit=crop"
  ];
  let current = 0;
  const carouselImg = document.querySelector('.carousel-image');
  const dotsContainer = document.querySelector('.carousel-dots');
  if (!carouselImg || !dotsContainer) return;

  // Create dots
  dotsContainer.innerHTML = '';
  carouselImages.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to image ${idx + 1}`);
    dot.addEventListener('click', () => showImage(idx));
    dotsContainer.appendChild(dot);
  });

  function showImage(idx) {
    current = idx;
    carouselImg.src = carouselImages[current];
    [...dotsContainer.children].forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  // Automatic cycling
  setInterval(() => {
    current = (current + 1) % carouselImages.length;
    showImage(current);
  }, 3500); // Change image every 3.5 seconds

  // Allow manual dot click
  showImage(0);
});