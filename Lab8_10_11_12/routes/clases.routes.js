const express = require('express');

const router = express.Router();

router.get('/crear', (request, response, next) => {
  response.render('crear');
});

router.post('/crear', (request, response, next) => {
  console.log(request.body);
  misResenias.push({
    tipo: request.body.tipo,
    titulo: request.body.titulo, 
    fecha: request.body.fecha,
    calificacion: request.body.calificacion,
    resenia: request.body.resenia,
    imagen: request.body.imagen,
  });
  response.redirect('/');
});

router.get('/', (request, response, next) => {
  response.render('cards_resenias',{
    misResenias: misResenias,
  });
});

router.get('/externos', (request, response, next) => {
  response.render('externos');
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