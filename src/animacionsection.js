const botones = document.querySelectorAll('.mini');

// Recorrer cada botón y agregar los eventos
botones.forEach(boton => {
    boton.addEventListener('mouseenter', function() {
        anime({
            targets: boton,
   
            scale: 1.2, // Aumentar el tamaño
            duration: 300, // Duración de la animación
           
            easing: 'easeInOutQuad'
        });
    });

    boton.addEventListener('mouseleave', function() {
        anime({
            targets: boton,
            scale: 1, // Restaurar al tamaño original
            duration: 300, // Duración de la animación
        
            easing: 'easeInOutQuad'
        });
    });
});
// Seleccionamos todos los cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    // Al pasar el ratón sobre el card
    card.addEventListener('mouseenter', function() {
        anime({
            targets: card,
            translateY: -10, // Mueve el card 10px hacia arriba
            duration: 300, // Duración de la animación
            easing: 'easeInOutQuad', // Easing suave
        });
    });

    // Al quitar el ratón del card
    card.addEventListener('mouseleave', function() {
        anime({
            targets: card,
            translateY: 0, // Vuelve a la posición original
            duration: 300, // Duración de la animación
            easing: 'easeInOutQuad', // Easing suave
        });
    });
});


var textWrapper = document.querySelectorAll('.ml9 .letters');
textWrapper.forEach(wrapper => {
  wrapper.innerHTML = wrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  })
  .add({
    targets: '.ml9',
    opacity: 0,
    duration: 0.5,
    easing: "easeOutExpo",
    delay: 10000
  });
