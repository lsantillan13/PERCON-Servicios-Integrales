// Function to change the slide every 6 seconds
function changeSlide() {
    nextSlide();
}

// Set interval to change slide every 6 seconds
setInterval(changeSlide, 6000);

// Get the carousel element
const carousel = document.querySelector('.carousel');

// Get all the slides
const slides = carousel.querySelectorAll('.slide');

// Set the initial slide index
let currentSlideIndex = 0;

// Function to show the current slide
function showSlide() {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
        slide.style.opacity = 0;
    });

    // Fade in the current slide with smooth transition
    slides[currentSlideIndex].style.display = 'block';
    slides[currentSlideIndex].style.opacity = 0;
    let opacity = 0;

    const fadeIn = setInterval(() => {
        opacity += 0.4;
        slides[currentSlideIndex].style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
    }, 100);


}

// Function to go to the next slide
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide();
}

// Function to go to the previous slide
function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide();
}

// Show the initial slide
showSlide();