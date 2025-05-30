document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[loading='lazy']");
    images.forEach(img => {
        img.setAttribute("src", img.dataset.src);
    });
});
