document.addEventListener("DOMContentLoaded", function() {
    // Reviews carousel
    const carouselViewport = document.querySelector('.index-carousel-viewport');

    setupCarousel(carouselViewport);

    function setupCarousel(carouselContainer) {
        const track = carouselContainer.querySelector('.carousel-track');
        const items = Array.from(track.children);
        const itemWidth = items[0].getBoundingClientRect().width;
        let currentSlide = 0;
        let startX;

        // Set up the automatic sliding
        setInterval(() => {
            moveSlide(1);
        }, 4000);

        function moveSlide(direction) {
            currentSlide = (currentSlide + direction) % items.length;
            if (currentSlide < 0) {
                currentSlide = items.length - 1;
            }
            moveTrack(itemWidth * currentSlide);
        }

        function moveTrack(position) {
            track.style.transform = `translateX(-${position}px)`;
        }
    }

});
