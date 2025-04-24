// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove("active");
        }
    });
});
const spotifyIframe = document.querySelector('.spotify-container iframe');
if (spotifyIframe) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            spotifyIframe.src = spotifyIframe.dataset.src;
            observer.unobserve(spotifyIframe);
        }
    });
    
    spotifyIframe.dataset.src = spotifyIframe.src;
    spotifyIframe.removeAttribute('src');
    observer.observe(spotifyIframe);
}
