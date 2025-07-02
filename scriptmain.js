document.addEventListener('DOMContentLoaded', function () {
  const scrollBtn = document.querySelector('.scroll-img-btn');
  const aboutSection = document.getElementById('about');
  if (scrollBtn && aboutSection) {
    scrollBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const yOffset = -64; 
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const carouselImages = [
    "https://i.ibb.co/3mV8yysB/6-C5239-D6-A956-477-B-98-D2-91615096-B29-F.jpg?",
    "https://i.ibb.co/d00kcJML/Screenshot-2025-07-01-212355.png",
    "https://media.forgecdn.net/attachments/1124/10/screenshot-2025-03-12-095836.png"
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
  }, 3500); 

  
  showImage(0);
});


function showImage(idx) {
  current = idx;
  carouselImg.src = carouselImages[current];
  carouselImg.style.objectFit = "cover";      
  carouselImg.style.objectPosition = "center"; 
  carouselImg.style.width = "100%";
  carouselImg.style.height = "100%";
  [...dotsContainer.children].forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });
}


document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.navbar-toggle');
  const navRight = document.querySelector('.navbar-right');
  if (toggle && navRight) {
    toggle.addEventListener('click', function () {
      navRight.classList.toggle('open');
    });
    // Optional: close menu when a link is clicked
    navRight.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navRight.classList.remove('open'));
    });
  }
});