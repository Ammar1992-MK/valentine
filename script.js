const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const firstScreen = document.getElementById('first-screen');
const secondScreen = document.getElementById('second-screen');

let yesSize = 1.2; // Initial font size
let clickCount = 0;

// Funny phrases for the 'No' button
const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;("
];

function moveButton() {
    clickCount++;
    
    // 1. Make the Yes button bigger
    yesSize += 0.4; // Increase size
    yesBtn.style.fontSize = `${yesSize}rem`;
    yesBtn.style.padding = `${yesSize * 10}px ${yesSize * 20}px`;

    // 2. Change the text on the No button
    // (We use % to loop back to the start if she clicks too many times)
    noBtn.innerHTML = phrases[clickCount % phrases.length];
}

function nextPage() {
    // Hide the first screen
    firstScreen.style.display = "none";
    
    // Show the celebration screen
    secondScreen.classList.remove("hidden");
    
    // Trigger confetti
    launchConfetti();
}

function launchConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}
