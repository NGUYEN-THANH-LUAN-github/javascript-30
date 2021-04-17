function playsound(e) {
    let code = e.keyCode;
    const key = document.querySelector(`.key[data-key='${code}']`)
    key.classList.toggle('playing');
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    if (!audio) { return }
    audio.currentTime = 0;
    audio.play();
}

function stopsound(e) {
    let code = e.keyCode;
    const key = document.querySelector(`.key[data-key='${code}']`)
    key.classList.toggle('playing');
}

window.addEventListener('keyup', stopsound)

window.addEventListener('keydown', playsound)