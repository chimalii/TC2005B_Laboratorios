const Resenia = require('../models/resenia.model');

exports.get_crear = (request, response, next) => {
    response.render('crear');
};

exports.post_crear = (request, response, next) => {
    console.log(request.body);
    const mi_resenia = new Resenia(
        request.body.tipo, request.body.titulo, request.body.fecha, request.body.calificacion, request.body.resenia, request.body.imagen
    );
    mi_resenia.save();
    response.setHeader('Set-Cookie', 'ultima_resenia=' + mi_resenia.titulo);
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    response.render('cards_resenias', {
        misResenias: Resenia.fetchAll(),
        ultima_resenia: request.cookies.ultima_resenia || '',
    });
};



