const moriaImg = document.getElementById('moria-img');
const moriaAudio = document.getElementById('moria-audio');

moriaImg.addEventListener('click', () => {
  moriaAudio.play();
});