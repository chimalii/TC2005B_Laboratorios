const express = require('express');

const router = express.Router();

const misResenias = [
  {
    titulo: "Phanthom Thread", 
    tipo: "Película",
    fecha: "2017-12-25", 
    calificacion: 5, 
    resenia: "Phantom Thread's finely woven narrative is filled out nicely by humor, intoxicating romantic tension, and yet another impressively committed performance from Daniel Day-Lewis.", 
    imagen: "https://play-lh.googleusercontent.com/oBNm0M7mh5IU-sk5wId1klvrilS8RPNWYOlclSu4RpaucWeqsr_JNZF2shZMiKhfXz0",
  }
];

router.get('/crear', (request, response, next) => {
  response.render('crear');
});

router.post('/crear', (request, response, next) => {
  console.log(request.body);
  misResenias.push({
    titulo: request.body.titulo,
    tipo: request.body.tipo, 
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