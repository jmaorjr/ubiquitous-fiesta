// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Auto-Scroll to Gallery
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("scrollGallery").addEventListener("click", () => {
        document.querySelector(".gallery").scrollIntoView({ behavior: "smooth" });
    });
});
