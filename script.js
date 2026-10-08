const greetForm = document.querySelector("#greetForm");
const nameInput = document.querySelector("#visitorName");
const greeting = document.querySelector("#greeting");
const moodMessage = document.querySelector("#moodMessage");
const facts = [
  "Octopuses have three hearts. Two help move blood to the gills, and one looks after the rest.",
  "Bananas are berries, botanically speaking. Strawberries, somehow, are not.",
  "A group of flamingos is called a flamboyance. They understood the assignment.",
  "Sea otters hold hands while they sleep so they don’t drift apart.",
  "Wombat poop is cube-shaped. Nature has a very specific sense of humor.",
  "The tiny dot over a lowercase i or j is called a tittle. You just learned a tittle thing."
];
const moodNotes = {
  sunny: "A little sunshine looks good on you. ☀️",
  cloudy: "Cloudy skies still make room for daydreams. ☁️",
  sparkly: "Excellent. The universe could use a bit more sparkle. ✨",
  sleepy: "Soft mode activated. Take things at your own pace. 🌙"
};

greetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (!name) {
    greeting.textContent = "Pop your name in first and we’ll say hello.";
    nameInput.focus();
    return;
  }
  greeting.textContent = `Hello, ${name}! We saved you the comfiest corner.`;
});

document.querySelectorAll(".mood-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mood-option").forEach((option) => option.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    moodMessage.textContent = moodNotes[button.dataset.mood];
  });
});

let previousFact = 0;
document.querySelector("#factButton").addEventListener("click", () => {
  let nextFact = Math.floor(Math.random() * facts.length);
  if (facts.length > 1 && nextFact === previousFact) nextFact = (nextFact + 1) % facts.length;
  previousFact = nextFact;
  document.querySelector("#fact").textContent = facts[nextFact];
});

let tapCount = 0;
document.querySelector("#tapButton").addEventListener("click", (event) => {
  tapCount += 1;
  document.querySelector("#clickCount").textContent = tapCount;
  const button = event.currentTarget;
  button.innerHTML = tapCount % 5 === 0 ? "You’re on a roll! <span aria-hidden=\"true\">♥</span>" : "Tap for joy <span aria-hidden=\"true\">♥</span>";
});

const themeButton = document.querySelector("#themeButton");
themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  themeButton.querySelector("span").textContent = isDark ? "☀" : "☾";
  themeButton.querySelector(".theme-label").textContent = isDark ? "Day mode" : "Night mode";
  themeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
});
