// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when the user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add('fade-in');
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
        scrollToTopBtn.classList.remove('fade-in');
    }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};



// Function to check and add 'active' class to fade-in elements
function handleScroll() {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    
    fadeInSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Adjust this value for earlier/later animation trigger
        if (sectionTop < windowHeight - 200) { 
            section.classList.add('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger the function on page load to show elements already in view
handleScroll();
