// Seleccionar las letras y envolverlas en un span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Crear una función para manejar el efecto de animación
function addBounceEffect() {
  anime.timeline({loop: false})
    .add({
      targets: '.ml6 .letter',
      scale: [0.5, 1], // Hacer las letras pequeñas y luego rebotar
      translateY: ["1.1em", 0],
      duration: 750,
      easing: "easeOutBounce",
      delay: (el, i) => 100 * i // Animar cada letra con un retraso
    });
}

// Asegurar que el texto permanezca visible y agregar evento de ratón
const textWrapperElement = document.querySelector('.ml6');
textWrapperElement.style.opacity = "1"; // Garantizar visibilidad
textWrapperElement.addEventListener('mouseenter', addBounceEffect);

// Animación para la sección 2 al aparecer
const section2 = document.querySelector('.section2');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({
        targets: '.section2',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutExpo'
      });
      observer.unobserve(section2); // Detener observación después de la animación
    }
  });
}, {threshold: 0.5});

observer.observe(section2);
