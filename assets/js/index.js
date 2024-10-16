/// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the button and progress bar
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const progressBar = document.getElementById('progressBar');

// Scroll event listener (combining scroll-related functions)
window.addEventListener('scroll', function() {
    let scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollPosition / height) * 100;

    // Update progress bar width
    progressBar.style.width = scrolled + "%";

    // Toggle visibility of scroll-to-top button
    if (scrollPosition > 100) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.classList.add('fade-in');
    } else {
        scrollToTopBtn.style.display = 'none';
        scrollToTopBtn.classList.remove('fade-in');
    }
});

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
