document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.post-content img');
  images.forEach(function (img) {
    img.onload = function () {
      const ratio = img.naturalHeight / img.naturalWidth;
      if (ratio > 1.2) {
        img.style.maxWidth = "300px"; // 只有在图片宽度大于 600px 时才应用
        img.style.width = "auto"; // 重置宽度以保持比例
      }
    };

    // 如果图片已经加载
    if (img.complete && img.naturalWidth !== 0) {
      img.onload();
    }
  });
});
