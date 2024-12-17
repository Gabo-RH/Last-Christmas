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

// Timer Functionality
function startTimer(durationInSeconds) {
    let timer = durationInSeconds;
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
    const inputTime = prompt("Enter time in seconds:");
    if (!isNaN(inputTime) && inputTime > 0) {
        startTimer(Number(inputTime));
    } else {
        alert("Please enter a valid number!");
    }
}

