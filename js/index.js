const woodBlockBtn = document.getElementById('woodBlockBtn');
const beepBtn = document.getElementById('beepBtn');

const woodBlockSound = new Howl({
    src: ['assets/woodblock.webm', 'assets/woodblock.mp3'],
    volume: 1,
    onend: enableButton(woodBlockBtn)
});

const beepSound = new Howl({
    src: ['assets/beep.webm', 'assets/woodblock.mp3'],
    volume: 1,
    onend: enableButton(beepBtn)
});

function enableButton(element) {
    element.classList.remove('disabled');
}

woodBlockBtn.addEventListener('click', function(){
    woodBlockSound.play();
});

beepBtn.addEventListener('click', function(){
    beepSound.play();
});

M.AutoInit();
