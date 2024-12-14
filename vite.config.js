import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",  // Cambia la raíz del proyecto a "src"
  //base: '/mi/', // Asegúrate de reemplazar 'nombre-del-repositorio' por el nombre de tu repositorio
  build: {
    outDir: "../docs",  // Los archivos construidos irán a la carpeta "docs"
  },
});
