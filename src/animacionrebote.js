// Seleccionar todos los botones con la clase 'btn'
const botones = document.querySelectorAll('.btn');

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
