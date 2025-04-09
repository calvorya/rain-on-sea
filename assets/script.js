window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 2000);
    }

    if (!window.location.hash) {
        const introSection = document.getElementById('intro');
        if (introSection) {
            introSection.classList.add("visible");
        }
    } else {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';
            });
            targetSection.classList.add("visible");
        } else {
            const introSection = document.getElementById('intro');
            if (introSection) introSection.classList.add("visible");

        }
    }
});

document.querySelectorAll('a[href^="#"]:not(.no-story)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove("visible");
            });
            targetElement.classList.add("visible");
        }
    });
});