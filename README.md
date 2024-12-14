# P3.2 - Práctica Integral: Portfolio Personal

## Información del Proyecto
- **Nombre:** Elena Díaz Pérez  
- **Curso:** S2DAW  
- **Fecha:** 14/12/2024  

---

## Concepto de lo realizado
Este proyecto consiste en la creación de un **portfolio personal** para demostrar las habilidades aprendidas durante el trimestre. Incluye las siguientes fases:

### Prototipo en Figma
- **Página de Referencias:** Una colección de fuentes de inspiración como capturas de otros portfolios, paletas de colores, tipografías y plugins de JavaScript.
- **Sistema de diseño:**
  - Paleta de colores y tipografías.
  - Variables organizadas en colecciones para colores, fuentes y tamaños.
  - Uso de las variables en el diseño en lugar de valores estáticos.
- **Diseño responsivo:** Diseñado para **escritorio** y **móvil** en páginas separadas.


### Desarrollo del Portfolio
- **Compilación con Vite:** Uso de Vite (JS vanilla) para compilar y servir el proyecto.
- **Estructura modular en SASS:**
  - `main.scss` como archivo principal.
  - Archivos parciales: `_variables.scss`, `_mixins.scss`, `_globals.scss` y un archivo SASS por componente.
- **Diseño responsivo:** Implementado mediante un mixin y un mapa de breakpoints en SASS.
- **Uso de librería JS:** Implementar una librería de JavaScript para dinamismo (GSAP, Swiper, AOS, etc.). En este caso he usado animejs
---


### Enlaces
- **Enlace a Figma:**  
 https://www.figma.com/design/j06LWXZyLVTcx0UrlyPY62/Portfolio-Elena-D%C3%ADaz-P%C3%A9rez?m=auto&t=Mbgx7XM4opzkjc6l-6

- **Enlace al repositorio GitHub:**  
https://github.com/elenadiazp/portfolio

- **Enlace al portfolio desplegado:**  
https://elenadiazp.github.io/portfolio/

---

### Ejecución
Para ejecutar el proyecto y compilar automáticamente los archivos **SASS**, utiliza el siguiente comando en la terminal:

```bash
npm run build
```
