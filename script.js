/**
 * Main JavaScript file for personal website
 * Handles fade-in animations and interactive features
 */

// Wait for DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Fade-in animation functionality
     * Checks if elements with 'fade-in' class are visible in viewport
     * and adds 'visible' class to trigger CSS animations
     */
    function checkFadeElements() {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Element is considered visible when 80% of viewport height is reached
            const isVisible = (rect.top <= windowHeight * 0.8);
            
            if (isVisible && !element.classList.contains('visible')) {
                element.classList.add('visible');
                console.log('Fade-in animation triggered for element');
            }
        });
    }
    
    /**
     * Throttle function to improve scroll performance
     * Limits how often the scroll handler can execute
     */
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Create throttled version of fade check function
    const throttledFadeCheck = throttle(checkFadeElements, 100);
    
    // Event listeners
    document.addEventListener('scroll', throttledFadeCheck);
    window.addEventListener('load', checkFadeElements);
    window.addEventListener('resize', throttledFadeCheck);
    
    // Initial check on page load
    checkFadeElements();
    
    console.log('Website JavaScript initialized successfully');
});