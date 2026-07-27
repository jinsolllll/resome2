
window.addEventListener("DOMContentLoaded", () => {
  const layer = document.createElement("div");
  layer.id = "bg-effect-layer";
  document.body.appendChild(layer);

  setInterval(() => {
    const petal = document.createElement("div");
    petal.classList.add("spring-petal");

    const leftPosition = Math.random() * 100;
    const size = Math.floor(Math.random() * 15) + 15;
    const duration = Math.random() * 7 + 8;
    const delay = Math.random() * 5;
    const swayDistance = (Math.random() - 0.5) * 60;
    const maxRotation = Math.random() * 360 + 180;

    petal.innerHTML = `
      <img src="images/spring.webp" alt="spring petal" style="width: 100%; height: 100%; object-fit: contain; opacity: 0.6;" />
    `;

    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${leftPosition}%`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.setProperty("--sway-distance", `${swayDistance}px`);
    petal.style.setProperty("--max-rotation", `${maxRotation}deg`);

    layer.appendChild(petal);

    setTimeout(
      () => {
        petal.remove();
      },
      (duration + delay) * 1000,
    );
  }, 800);
});
