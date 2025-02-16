
// Example JavaScript (if needed)
// You can add any interactivity here
document.querySelectorAll('.profile button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === "Follow") {
            this.textContent = "Following";
            this.style.backgroundColor = "red";
        } else {
            this.textContent = "Follow";
            this.style.backgroundColor = "#ff4081";
        }
    });

});


const slider = document.querySelector('.profiles');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let scrollPosition = 0;

function updateButtons() {
    // Hide the "Previous" button if at the start
    if (scrollPosition <= 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    // Hide the "Next" button if at the end
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (scrollPosition >= maxScroll) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
}

prevBtn.addEventListener('click', () => {
    const profileWidth = slider.querySelector('.profile').offsetWidth + 10; // Profile width + margin-right
    scrollPosition -= profileWidth;
    if (scrollPosition < 0) {
        scrollPosition = 0;
    }
    slider.style.transform = `translateX(-${scrollPosition}px)`;
    updateButtons(); // Update button visibility
});

nextBtn.addEventListener('click', () => {
    const profileWidth = slider.querySelector('.profile').offsetWidth + 10; // Profile width + margin-right
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    scrollPosition += profileWidth;
    if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
    }
    slider.style.transform = `translateX(-${scrollPosition}px)`;
    updateButtons(); // Update button visibility
});

// Initial button visibility update
updateButtons();



