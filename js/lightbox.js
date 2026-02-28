// Lightbox for gallery images
(function () {
  var images = Array.from(document.querySelectorAll('.image-gallery .gallery-item img'));
  if (!images.length) return;

  var currentIndex = 0;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<span class="lightbox-close">&times;</span>' +
    '<span class="lightbox-prev">&lsaquo;</span>' +
    '<img>' +
    '<span class="lightbox-next">&rsaquo;</span>';
  document.body.appendChild(overlay);

  var img = overlay.querySelector('img');
  var prevBtn = overlay.querySelector('.lightbox-prev');
  var nextBtn = overlay.querySelector('.lightbox-next');

  function show(index) {
    currentIndex = (index + images.length) % images.length;
    img.src = images[currentIndex].src;
    img.alt = images[currentIndex].alt;
  }

  images.forEach(function (el, i) {
    el.addEventListener('click', function () {
      show(i);
      overlay.classList.add('active');
    });
  });

  prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    show(currentIndex - 1);
  });

  nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    show(currentIndex + 1);
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
      overlay.classList.remove('active');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') overlay.classList.remove('active');
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });
})();
