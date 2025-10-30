let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

const buttons = document.querySelectorAll('.prev, .next');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('pulse');
        setTimeout(() => btn.classList.remove('pulse'), 300);
    });
});
