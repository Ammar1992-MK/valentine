const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const firstScreen = document.getElementById('first-screen');
const secondScreen = document.getElementById('second-screen');
const music = document.getElementById('loveSong');

let clickCount = 0;

const noPhrases = [
    "No",
    "Are you sure, Ahlam?",
    "Really sure?",
    "Don't do this to me!",
    "I'm gonna cry...",
    "You're breaking my heart!",
    "Just click YES already! ❤️"
];

function moveButton() {
    clickCount++;
    // Change text
    noBtn.innerHTML = noPhrases[clickCount % noPhrases.length];
    
    // Make Yes button HUGE
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.2}px`;
    yesBtn.style.width = `${yesBtn.offsetWidth * 1.2}px`;
}

function startCelebration() {
    // 1. Hide first screen, show second
    firstScreen.style.display = "none";
    secondScreen.classList.remove("hidden");

    // 2. Play Music (Browsers require interaction to play audio, so this works perfectly)
    music.volume = 0.5;
    music.play().catch(error => console.log("Music blocked by browser policy"));

    // 3. Start the floating hearts animation
    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = Math.random() < 0.5 ? '❤️' : '🌹'; // Randomly choose heart or rose
    
    // Randomize position and size
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    
    // Randomize animation speed
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    document.body.appendChild(heart);

    // Remove heart after it floats up to keep browser clean
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
