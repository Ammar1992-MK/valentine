const firstScreen = document.getElementById('first-screen');
const secondScreen = document.getElementById('second-screen');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let clickCount = 0;
const noPhrases = ["No", "Are you sure, Ahlam?", "Please?", "Think about it!", "Don't be mean!", "Last chance!"];

function moveButton() {
    clickCount++;
    noBtn.innerHTML = noPhrases[clickCount % noPhrases.length];
    
    // Make the Yes button grow more noticeably
    const newSize = 1.2 + (clickCount * 0.2);
    yesBtn.style.transform = `scale(${newSize})`;
    
    // Move the No button slightly so it feels like it's trying to hide
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function startCelebration() {
    firstScreen.classList.add('hidden');
    secondScreen.classList.remove('hidden');

    // 1. Initial Blast
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ff69b4', '#ffffff']
    });

    // 2. Delayed Side Blasts
    setTimeout(() => {
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff0000', '#ff69b4']
        });
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff0000', '#ff69b4']
        });
    }, 500);

    // 3. Infinite Rose Petals Rain
    setInterval(createPetal, 200);
}

function createPetal() {
    const items = ['🌸', '❤️', '🌹', '✨', '💖'];
    const item = document.createElement('div');
    item.classList.add('floating-item');
    item.innerHTML = items[Math.floor(Math.random() * items.length)];
    
    item.style.left = Math.random() * 100 + 'vw';
    item.style.fontSize = Math.random() * 20 + 15 + 'px';
    item.style.animationDuration = Math.random() * 3 + 2 + 's';
    item.style.opacity = Math.random();
    
    document.body.appendChild(item);
    
    setTimeout(() => { item.remove(); }, 5000);
}
