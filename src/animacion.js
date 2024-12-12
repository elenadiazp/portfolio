const words = ["¡Hola!", "Bienvenido", "A GSAP"];
let currentWord = 0;

function typeEffect() {
  const text = document.querySelector(".text");
  text.textContent = ""; // Limpia el texto

  gsap.to(text, {
    textContent: words[currentWord], // Escribe la palabra actual
    duration: 2,
    ease: "power1.inOut",
    onComplete: () => {
      // Borra el texto después de completarse
      gsap.to(text, {
        textContent: "",
        duration: 1,
        delay: 1,
        ease: "power1.inOut",
        onComplete: () => {
          currentWord = (currentWord + 1) % words.length; // Cambia a la siguiente palabra
          typeEffect();
        },
      });
    },
  });
}

document.addEventListener("DOMContentLoaded", typeEffect);
