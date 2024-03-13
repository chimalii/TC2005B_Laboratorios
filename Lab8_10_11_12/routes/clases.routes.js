const express = require('express');

const router = express.Router();

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

      <body class="bg-gray-200 dark:bg-gray-800">
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://static.vecteezy.com/system/resources/previews/022/744/042/original/clapperboard-isolated-on-a-transparent-background-png.png" class="h-8"/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ShowGrade</span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarme</button>
              <button type="button" class="text-blue-700 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar sesión</button>
              <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
            </div>
            <div class="hidden w-full md:block md:w-auto" id="navbar-cta">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="http://localhost:3000" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Inicio</a>
                </li>
                <li>
                  <a href="http://localhost:3000/crear" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Crear</a>
                </li>
                <li>
                  <a href="http://localhost:3000/externos" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Externos</a>
                </li>
                <li>
                  <a href="http://localhost:3000/personal" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Personal</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
`;

const html_footer = `
      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
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
            <a href="https://docs.google.com/document/d/166pncTRdLAvympTGQDACwu9-8kXew3BBFPTSmpcETEU/edit?usp=sharing" class="hover:underline">Preguntas Laboratorios</a>
          </li>
        </ul>
      </div>
    </footer>
  </body>
</html>
`;

const misResenias = [
  {
    titulo: "Phanthom Thread", 
    fecha: "2017-12-25", 
    calificacion: 5, 
    resenia: "Phantom Thread's finely woven narrative is filled out nicely by humor, intoxicating romantic tension, and yet another impressively committed performance from Daniel Day-Lewis.", 
    imagen: "https://play-lh.googleusercontent.com/oBNm0M7mh5IU-sk5wId1klvrilS8RPNWYOlclSu4RpaucWeqsr_JNZF2shZMiKhfXz0",
  }
];

router.get('/crear', (request, response, next) => {
  let html = html_header;
  html += `
    <div class="container mx-auto p-4">
      <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
        <h2 class="text-2xl font-bold text-center text-blue-500">Añadir reseña</h2>
      </div>
    </div>
      <form action="/crear" method="POST" class="max-w-sm mx-auto">
        <div class="mb-4">
        <label for="tipo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de producción</label>
          <select id="tipo" name="tipo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>Película</option>
              <option>Cortometraje</option>
              <option>Documental</option>
              <option>Serie</option>
          </select>
        </div>

        <!-- Título -->
        <div class="mb-4">
          <label for="titulo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
          <input type="text" id="titulo" name="titulo" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <!-- Fecha -->
        <div class="mb-4">
          <label for="fecha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha</label>
          <input type="date" id="fecha" name="fecha" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <!-- Calificación -->
        <div class="mb-4">
          <label for="calificacion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calificación</label>
          <input id="calificacion" name="calificacion" type="range" min="0" max="5" step="0.5" name="calificacion" class="form-range block w-full mt-1">
          <output for="calificacion" class="text-gray-500 text-sm mt-2">0</output>

          <script>
            const calificacion = document.getElementById('calificacion');
            const calificacionValor = document.querySelector('output[for="calificacion"]');

            calificacion.addEventListener('input', function() {
                calificacionValor.textContent = calificacion.value;
            });
          </script>

          </div>
        </div>

        <!-- Reseña -->
        <div class="mb-4">
          <textarea id="resenia" name="resenia" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe tu reseña..."></textarea>
        </div>

        <!-- Imagen -->
        <div class="mb-4">
          <label for="imagen" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen URL</label>
          <input type="text" id="imagen" name="imagen" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <!-- Botón de enviar -->
        <div class="text-right">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Subir reseña</button>
        </div>
      </form>
  `;
  html += html_footer;
  response.send(html);
});

router.post('/crear', (request, response, next) => {
  console.log(request.body);
  misResenias.push({
    titulo: request.body.titulo, 
    fecha: request.body.fecha,
    calificacion: request.body.calificacion,
    resenia: request.body.resenia,
    imagen: request.body.imagen,
  });
  response.redirect('/');
});

router.get('/', (request, response, next) => {
  let html = html_header;
    html += `
      <div class="container mx-auto p-4">
        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
          <h2 class="text-2xl font-bold text-center text-blue-500">Tus reseñas</h2>
        </div>
      </div>`;
    for (let misResenia of misResenias) {
      html += `
      <div class="flex items-center justify-center">  
      <div class="container mx-auto p-4">
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${misResenia.imagen}" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${misResenia.titulo}</h5>
              <h6 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">Fecha de visualización: ${misResenia.fecha}</h6>
              <h6 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">Calificación (&#9733): ${misResenia.calificacion}</h6> 
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${misResenia.resenia}</p>
            </div>
          </a>
      </div>
      </div>
      `;
    }
    html += html_footer;
    response.send(html);
});

router.get('/externos', (request, response, next) => {
  let html = html_header;
  html += `
    <div class="container mx-auto p-4">
      <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
        <h2 class="text-2xl font-bold text-center text-blue-500">Sitios interesantes sobre cine</h2>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar...">
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" class="px-6 py-3">
                      Sitio
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Título
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Descripción corta
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      SENSACINE
                  </th>
                  <td class="px-6 py-4">
                      <a href="https://www.sensacine.com/peliculas/estrenos/es/mes/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Estrenos mensuales</a>
                  </td>
                  <td class="px-6 py-4">
                      Todas las películas que se estrenan este mes semana a semana.
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Fotogramas
                  </th>
                  <td class="px-6 py-4">
                      <a href="https://www.fotogramas.es/noticias-cine/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Últimas noticias de cine</a>
                  </td>
                  <td class="px-6 py-4">
                      Noticias del cine actualmente, con diferentes clasificaciones.
                  </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      by IMDbPro
                  </th>
                  <td class="px-6 py-4">
                      <a href="https://www.boxofficemojo.com/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Box Office Mojo</a>
                  </td>
                  <td class="px-6 py-4">
                      Recaudaciones y presupuestos de las películas del momento, actualizado diario con resultados obtenidos en taquilla.
                  </td>
              </tr>
          </tbody>
      </table>
      </div>
    </div>
    `;
  html += html_footer;
  response.send(html);
});

router.get('/personal', (request, response, next) => {
  let html = html_header;
  html += `
    <br><h2 class="text-4xl font-bold text-center text-blue-500">Agregar contenido personal</h2><br>
    `;
  html += html_footer;
  response.send(html);
});

module.exports = router;