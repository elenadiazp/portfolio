     // Seleccionar el botón
     const boton = document.querySelector('.btn');

     // Crear la animación con Anime.js
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