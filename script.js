// Fungsi untuk menggulir ke konten utama
function scrollToMain() {
    const mainContent = document.querySelector('nav');
    mainContent.scrollIntoView({ behavior: 'smooth' });
}

// Fungsi tambahan lain (misalnya untuk slider atau animasi scroll)
function revealOnScroll() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);


let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide figure');
    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.carousel-slide figure');
    slides[slideIndex].style.display = "block";
});