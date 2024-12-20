// Add 'loaded' class to body after the page has fully loaded
window.addEventListener('load', () => {
    document.documentElement.classList.add('loaded');
});

// Add a fade-in effect when navigating
function fadePage() {
    document.body.classList.add('fade-in');
    setTimeout(() => {
        document.body.classList.remove('fade-in');
    }, 500); // Adjust timing to match the transition
}

// Menu toggle function
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    const menuButton = document.querySelector('.menu-button');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        menuButton.classList.remove('open');
    } else {
        menu.style.display = 'block';
        menuButton.classList.add('open');
    }
}

// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000);
}

showSlides();

// Timer Functionality (in minutes)
function startTimer(durationInMinutes) {
    let timer = durationInMinutes * 60; // Convert minutes to seconds
    const display = document.getElementById('timer');

    const interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;

        display.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        timer--;

        if (timer < 0) {
            clearInterval(interval);
            alert("Time's up! The Grinch has stolen the presents!");
        }
    }, 1000);
}

function setTimer() {
    const inputTime = prompt("Enter time in minutes:");
    if (!isNaN(inputTime) && inputTime == 25  ) {
        startTimer(Number(inputTime));  // Pass the input as minutes
    } else {
        alert("Please enter a valid number!");
    }
}

// Handle page transition when a menu item is clicked
document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', () => {
        fadePage();
        // Your page-changing logic goes here
    });
});
