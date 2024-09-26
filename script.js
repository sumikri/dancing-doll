const danceBtn = document.getElementById('danceBtn');
const doll = document.querySelector('.doll');

danceBtn.addEventListener('click', () => {
    if (doll.style.animationPlayState === 'paused' || doll.style.animationPlayState === '') {
        doll.style.animationPlayState = 'running';
        danceBtn.textContent = 'Stop Dancing!';
    } else {
        doll.style.animationPlayState = 'paused';
        danceBtn.textContent = 'Dance!';
    }
});
