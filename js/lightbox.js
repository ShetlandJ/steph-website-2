// Lightbox for gallery images
(function () {
  var images = Array.from(document.querySelectorAll('.image-gallery .gallery-item img'));
  if (!images.length) return;

  var currentIndex = 0;
  var touchStartX = 0;
  var touchEndX = 0;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Image viewer');
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<button class="lightbox-prev" aria-label="Previous image">&lsaquo;</button>' +
    '<img>' +
    '<button class="lightbox-next" aria-label="Next image">&rsaquo;</button>';
  document.body.appendChild(overlay);

  var img = overlay.querySelector('img');
  var prevBtn = overlay.querySelector('.lightbox-prev');
  var nextBtn = overlay.querySelector('.lightbox-next');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function show(index) {
    currentIndex = (index + images.length) % images.length;
    img.src = images[currentIndex].src;
    img.alt = images[currentIndex].alt;
  }

  function open(index) {
    show(index);
    overlay.classList.add('active');
  }

  function close() {
    overlay.classList.remove('active');
  }

  images.forEach(function (el, i) {
    el.addEventListener('click', function () {
      open(i);
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

  closeBtn.addEventListener('click', close);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });

  // Touch swipe support
  overlay.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  overlay.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        show(currentIndex + 1); // swipe left = next
      } else {
        show(currentIndex - 1); // swipe right = prev
      }
    }
  }, { passive: true });
})();
