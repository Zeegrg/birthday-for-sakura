let loveInterval;
// ===============================
// Twinkling Stars
// ===============================
for (let i = 0; i < 220; i++) {
  const star = document.createElement("div");

  star.className = "star";

  const size = Math.random() * 4;

  star.style.width = size + "px";
  star.style.height = size + "px";

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";

  star.style.animationDelay = Math.random() * 3 + "s";

  document.body.appendChild(star);
}

// ===============================
// Floating Hearts
// ===============================
// ===============================
// Sakura Petals
// ===============================

setInterval(() => {
  const petal = document.createElement("div");

  petal.className = "petal";

  petal.innerHTML = "🌸";

  petal.style.left = Math.random() * 100 + "vw";

  petal.style.fontSize = 20 + Math.random() * 15 + "px";

  petal.style.animationDuration = 6 + Math.random() * 5 + "s";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 11000);
}, 1200);
setInterval(() => {
  const heart = document.createElement("div");

  heart.className = "heart";

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 18 + Math.random() * 18 + "px";

  heart.style.animationDuration = 5 + Math.random() * 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}, 700);

// ===============================
// Countdown
// ===============================

const targetDate = new Date(Date.now() + 10000).getTime();
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Birthday has started
  if (distance <= 0) {
    clearInterval(timer);

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    const btn = document.getElementById("giftButton");

    btn.disabled = false;
    btn.innerHTML = "🎁 Open Your Birthday Gift";

    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);

// ===============================
// Slideshow
// ===============================

const photos = [
  "photo1.jpeg",
  "photo2.jpeg",
  "photo3.jpeg",
  "photo4.jpeg",
  "photo5.jpeg",
  "photo1.jpeg",
  "photo2.jpeg",
  "photo3.jpeg",
  "photo4.jpeg",
  "photo5.jpeg",
];

let currentPhoto = 0;

setInterval(() => {
  const image = document.getElementById("photo");

  if (!image) return;

  currentPhoto++;

  if (currentPhoto >= photos.length) {
    currentPhoto = 0;
  }

  image.style.transform = "scale(.92)";
  image.style.opacity = 0;

  setTimeout(() => {
    image.src = photos[currentPhoto];

    image.style.opacity = 1;

    image.style.transform = "scale(1)";
  }, 500);
}, 3000);

// ===============================
// Gift Button
// ===============================

const giftButton = document.getElementById("giftButton");

giftButton.addEventListener("click", () => {
  document.getElementById("introPage").classList.add("hidden");

  document.getElementById("birthdayPage").classList.remove("hidden");

  document.getElementById("bgMusic").play();
});

// ===============================
// Surprise Button
// ===============================
const surpriseButton = document.getElementById("surpriseButton");

surpriseButton.addEventListener("click", () => {
  document.getElementById("birthdayPage").classList.add("hidden");

  const videoPage = document.getElementById("videoPage");

  videoPage.classList.remove("hidden");

  videoPage.classList.add("fade-in");

  const video = document.getElementById("birthdayVideo");

  video.currentTime = 0;

  video.play();
});
// ===============================
// Fireworks
// ===============================
// ===============================

function createFirework() {
  const colors = [
    "#ff4da6",

    "#ffea00",

    "#00ffff",

    "#ffffff",

    "#ff6600",

    "#00ff99",
  ];

  const firework = document.createElement("div");

  firework.className = "firework";

  firework.style.left = Math.random() * 100 + "vw";

  firework.style.top = Math.random() * 80 + "vh";

  firework.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(firework);

  setTimeout(() => {
    firework.remove();
  }, 1400);
}
// Floating Love Messages
// ===============================

const messages = [
  "❤️ I Love You ❤️",

  "🌸 My Sakura 🌸",

  "💖 Forever Us 💖",

  "🥰 Happy Birthday Babe 🥰",

  "💕 You Mean Everything 💕",
];

function createLove() {
  const love = document.createElement("div");

  love.className = "love";

  love.innerHTML = messages[Math.floor(Math.random() * messages.length)];

  love.style.left = Math.random() * 90 + "vw";

  love.style.bottom = "-40px";

  document.body.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 7000);
}
// ===============================
// Typewriter Effect
// ===============================

const message = "Happy Birthday My Beautiful Sakura ❤️";

let index = 0;

function typeWriter() {
  const typing = document.getElementById("typing");

  if (!typing) return;

  if (index < message.length) {
    typing.innerHTML += message.charAt(index);

    index++;

    setTimeout(typeWriter, 100);
  }
}
// ===============================
// Shooting Stars
// ===============================

function createShootingStar() {
  const star = document.createElement("div");

  star.className = "shooting-star";

  star.style.left = Math.random() * 100 + "vw";

  star.style.top = Math.random() * 35 + "vh";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1800);
}

setInterval(createShootingStar, 4500);
// ===============================
// Cursor Glow
// ===============================

const cursor = document.createElement("div");

cursor.className = "cursor-glow";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";
});
// ===============================
// Music Button
// ===============================

const music = document.getElementById("bgMusic");

const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();

    musicButton.innerHTML = "🎵 Pause Music";
  } else {
    music.pause();

    musicButton.innerHTML = "▶️ Play Music";
  }
});
// ===============================
// Confetti
// ===============================

function createConfetti() {
  const colors = [
    "#ff3ea5",

    "#ffea00",

    "#00ffff",

    "#ffffff",

    "#8aff00",

    "#ff7b00",
  ];

  const confetti = document.createElement("div");

  confetti.className = "confetti";

  confetti.style.left = Math.random() * 100 + "vw";

  confetti.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 4000);
}
const birthdayVideo = document.getElementById("birthdayVideo");

birthdayVideo.addEventListener("ended", () => {
  const videoPage = document.getElementById("videoPage");

  // Fade the VIDEO itself
  birthdayVideo.style.transition = "opacity 2s ease";
  birthdayVideo.style.opacity = "0";

  setTimeout(() => {
    videoPage.classList.add("hidden");

    // Reset for replay
    birthdayVideo.style.opacity = "1";
    birthdayVideo.currentTime = 0;

    const finalPage = document.getElementById("finalPage");

    finalPage.classList.remove("hidden");
    finalPage.classList.add("fade-in");

    // Fireworks
    let count = 0;

    const fireworks = setInterval(() => {
      createFirework();

      count++;

      if (count > 40) {
        clearInterval(fireworks);
      }
    }, 250);

    // Confetti
    const confettiInterval = setInterval(createConfetti, 100);

    setTimeout(() => {
      clearInterval(confettiInterval);
    }, 5000);

    // Floating Love
    loveInterval = setInterval(createLove, 1200);

    // Typewriter
    setTimeout(typeWriter, 800);
  }, 2000);
});
// ===============================
// Replay Story
// ===============================

const replayButton = document.getElementById("replayButton");

replayButton.addEventListener("click", () => {
  location.reload();
});
