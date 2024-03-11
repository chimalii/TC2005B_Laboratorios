const filesystem = require('fs');

const html_header = `
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Clasificador peliculas</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <body>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://previews.123rf.com/images/fokaspokas/fokaspokas1806/fokaspokas180600651/103145240-icono-de-c%C3%A1mara-de-video-simple-icono-blanco-con-sombra-sobre-fondo-transparente.jpg" class="h-8"/>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ShowGrade</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Inicio</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Crear</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Externos</a>
            </li>
          </ul>
        </div>
      </div>
      </nav>

`;
const html_footer = `
    <<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
  </footer>

</body>
</html>
`;

const http = require('http');
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    if (request.url == "/") {
      response.setHeader('Content-Type', 'text/html');
      response.write(html_header);
      response.write(`
                      <h2 class="text-4xl font-bold text-center text-blue-500">Tus reseñas</h2>`
      );
      response.write(html_footer);
      response.end();
    } else if (request.url == "/crear" && request.method == "GET") {
      
      response.setHeader('Content-Type', 'text/html');
      response.write(html_header);
      response.write(`<h2 class="text-4xl font-bold text-center text-blue-500">Anadir reseña</h2>`);
      response.write(`
        <form action="/crear" method="POST" class="max-w-sm mx-auto">
          <div class="mb-4">
          <label for="tipo" class="block text-gray-700 font-bold mb-2">Tipo de producción</label>
          <select id="tipo" name="tipo" class="form-select block w-full mt-1">
            <option>Película</option>
            <option>Cortometraje</option>
            <option>Documental</option>
            <option>Serie</option>
          </select>
          </div>

          <!-- Título -->
          <div class="mb-4">
            <label for="titulo" class="block text-gray-700 font-bold mb-2">Título</label>
            <input id="titulo" type="text" name="titulo" class="form-input block w-full mt-1">
          </div>

          <!-- Fecha -->
          <div class="mb-4">
            <label for="fecha" class="block text-gray-700 font-bold mb-2">Fecha</label>
            <input id="fecha" type="date" name="fecha" class="form-input block w-full mt-1">
          </div>

          <!-- Calificación -->
          <div class="mb-4">
            <label for="calificacion" class="block text-gray-700 font-bold mb-2">Calificación</label>
            <input id="calificacion" type="range" min="0" max="5" step="0.5" name="calificacion" class="form-range block w-full mt-1">
          </div>

          <!-- Reseña -->
          <div class="mb-4">
            <label for="resena" class="block text-gray-700 font-bold mb-2">Reseña</label>
            <textarea id="resena" name="resena" rows="3" class="form-textarea block w-full mt-1"></textarea>
          </div>

          <!-- Imagen -->
          <div class="mb-4">
            <label for="imagen" class="block text-gray-700 font-bold mb-2">Imagen URL</label>
            <input id="imagen" type="url" name="imagen" class="form-input block w-full mt-1">
          </div>

          <!-- Botón de enviar -->
          <div class="text-right">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
          </div>
        </form>
  
      `);
      response.write(html_footer);
      response.end();
    } else {
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/html');
      response.write(html_header);
      response.write(`<h2 class="title">Esta ruta no es válida...</h2>`);
      response.write(html_footer);
      response.end();
    }
});
server.listen(3000);