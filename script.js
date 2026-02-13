const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.getElementById('questionText');

function moveButton() {
    // Get the button's current position so it doesn't "snap" to 0,0 first
    const rect = noBtn.getBoundingClientRect();
    
    // Switch to absolute so it can float anywhere
    noBtn.style.position = 'fixed';
    noBtn.style.left = rect.left + 'px';
    noBtn.style.top = rect.top + 'px';

    // Small delay to let the browser register the fixed position 
    // before we give it the new random coordinates
    setTimeout(() => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }, 10);
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents phone from clicking the button
    moveButton();
});

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
