(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".post-content img");
    images.forEach(function(img) {
      img.onload = function() {
        const ratio = img.naturalHeight / img.naturalWidth;
        if (ratio > 1.2) {
          img.style.maxWidth = "300px";
          img.style.width = "auto";
        }
      };
      if (img.complete && img.naturalWidth !== 0) {
        img.onload();
      }
    });
  });
})();
