const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.getElementById('questionText');

// Move the "No" button when touched or hovered
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton); // For mobile users

function celebrate() {
    // Change text
    questionText.innerHTML = "I knew you'd say YES! 💖✨";
    
    // Hide buttons
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';

    // Fire confetti celebration
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#ffb3c1']
    });
}
