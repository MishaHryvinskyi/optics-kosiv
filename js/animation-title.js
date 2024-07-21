document.addEventListener('DOMContentLoaded', () => {
    const animateElements = (selector, animationClass) => {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', animationClass);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    animateElements('.animate-list-left', 'animate__slideInUp');
    animateElements('.animate-list-right', 'animate__zoomIn');
});