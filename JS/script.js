document.addEventListener('DOMContentLoaded', function () {

    // Navbar responsive toggle
    const toggleButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggleButton && navLinks) {
        toggleButton.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    console.log("✅ projects.js cargado");

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    console.log("Botones encontrados:", filterButtons.length);
    console.log("Tarjetas encontradas:", projectCards.length);

    if (filterButtons.length === 0 || projectCards.length === 0) {
        console.warn("⚠️ No se encontraron los elementos. Revisa el HTML.");
        return;
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});
