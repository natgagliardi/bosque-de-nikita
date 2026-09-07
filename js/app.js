const fireflies = document.getElementById("fireflies");
for (let i = 0; i < 22; i++) {
  const f = document.createElement("span");
  f.className = "firefly";
  f.style.left = `${8 + Math.random() * 84}%`;
  f.style.top = `${12 + Math.random() * 76}%`;
  f.style.animationDelay = `${Math.random() * 4}s`;
  f.style.animationDuration = `${3 + Math.random() * 4}s`;
  fireflies.appendChild(f);
}

document.querySelector(".newsletter form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const button = e.currentTarget.querySelector("button");
  button.textContent = "✨ ¡Bienvenido al bosque!";
  e.currentTarget.querySelector("input").value = "";
});

document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener("click", e => e.preventDefault());
});
