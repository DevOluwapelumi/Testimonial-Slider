const slider = document.querySelector('.testimonial-slider');
const dots = document.querySelectorAll('.dot');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

let index = 0;
const cardWidth = 300 + 20; 
const cardsPerDot = 3; 
const totalDots = dots.length; 
const totalCards = totalDots * cardsPerDot; 

function showTestimonial(index) {
    const firstCardIndex = Math.floor(index / cardsPerDot) * cardsPerDot;
    slider.style.transform = `translateX(${-firstCardIndex * cardWidth}px)`; 
    dots.forEach(dot => dot.classList.remove('active'));
    dots[Math.floor(index / cardsPerDot)].classList.add('active');
}

setInterval(() => {
    index++;
    if (index >= totalCards) index = 0; 
    showTestimonial(index);
}, 3000);

prevArrow.addEventListener('click', () => {
    index--;
    if (index < 0) index = totalCards - 1; 
    showTestimonial(index);
});

nextArrow.addEventListener('click', () => {
    index++;
    if (index >= totalCards) index = 0; 
    showTestimonial(index);
});

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        index = idx * cardsPerDot; 
        showTestimonial(index);
    });
});

showTestimonial(index);
