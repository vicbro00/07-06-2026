// Counter function
function updateDayCounter() {
  const targetDate = new Date("2026-06-07T00:00:00");
  const now = new Date();

  const timeDifference = now - targetDate;
  const daysTogether = Math.max(
    0,
    Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
  );

  const counterElement = document.getElementById("day-card");
  counterElement.style.setProperty("--days-count", daysTogether);
}

updateDayCounter();

const container = document.getElementById("heartsContainer");
const heartTypes = ["🩷", "🩵"];

// Creates hearts on page
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = Math.random() * 25 + 10 + "px";

  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  heart.style.opacity = Math.random() * 0.5 + 0.5;

  container.appendChild(heart);
}

setInterval(createHeart, 300);

const clearBtn = document.getElementById("clearHeartsBtn");

// Clears created hearts from the page

clearBtn.addEventListener("click", () => {
  const hearts = container.querySelectorAll(".heart");

  hearts.forEach((heart) => {
    const computedStyle = window.getComputedStyle(heart);
    const currentTransform = computedStyle.transform;

    heart.style.transform = currentTransform;
    heart.style.animation = "none";

    void heart.offsetWidth;

    heart.style.transition = "transform 1s ease, opacity 1s ease";

    requestAnimationFrame(() => {
      heart.style.transform = `${currentTransform} scale(2.5) rotate(45deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 1000);
  });
});

// Follow nubcat
const followCat = document.getElementById("followCat");
document.addEventListener("mousemove", (event) => {
  followCat.style.left = event.clientX + "px";
  followCat.style.top = event.clientY + "px";
});
