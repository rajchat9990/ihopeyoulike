// Confetti generator
function launchConfetti() {
  const colors = ['#ff0', '#0f0', '#0ff', '#f0f', '#f00'];
  for (let i = 0; i < 30; i++) {
    let conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.position = "fixed";
    conf.style.width = "10px";
    conf.style.height = "10px";
    conf.style.background = colors[Math.floor(Math.random() * colors.length)];
    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.top = "-20px";
    conf.style.opacity = Math.random();
    conf.style.transform = `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(conf);

    let fall = conf.animate([
      { transform: `translateY(0px)` },
      { transform: `translateY(${window.innerHeight + 100}px)` }
    ], {
      duration: 2000 + Math.random() * 2000,
      iterations: 1
    });
    fall.onfinish = () => conf.remove();
  }
}

// Button run away
function runaway(btn) {
  btn.style.position = "absolute";
  btn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  btn.style.top = Math.random() * (window.innerHeight - 50) + "px";
}

function playSong() {
  let song = document.getElementById("birthdaySong");
  if (song) {
    song.play().catch(error => {
      console.log("Autoplay prevented, will play after interaction:", error);
    });
  }
}

let isPlaying = false;

function toggleMusic() {
  let song = document.getElementById("birthdaySong");
  let btn = document.getElementById("music-btn");

  if (!isPlaying) {
    song.play().catch(error => console.log("Autoplay prevented:", error));
    btn.textContent = "🔇 Pause Music";
    isPlaying = true;
  } else {
    song.pause();
    btn.textContent = "🎵 Play Music";
    isPlaying = false;
  }
}