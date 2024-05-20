document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle visibility of an overlay
    function toggleOverlay(button, overlayClass, isVisible) {
        let container = button.closest('body'); 

        const overlay = container.querySelector(overlayClass);
        if (overlay) {
            overlay.classList.toggle('visible-pop-up', isVisible);
        }
    }

    function setupButtonListeners(buttonSelector, overlaySelector, shouldShow) {
        document.querySelectorAll(buttonSelector).forEach(button => {
            button.addEventListener('click', () => toggleOverlay(button, overlaySelector, shouldShow));
        });
    }

    setupButtonListeners('.callback', '.webform-popup-overlay', true);
    setupButtonListeners('.popup-close-btn', '.webform-popup-overlay', false);
    setupButtonListeners('.wk-order', '.webform-workshop-overlay', true);
    setupButtonListeners('.popup-close-btn', '.webform-workshop-overlay', false);
});
