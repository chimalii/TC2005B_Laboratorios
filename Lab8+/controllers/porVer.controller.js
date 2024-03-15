const Produccion = require('../models/porVer.model');

exports.get_porVer = (request, response, next) => {
    response.render('porVer', {
        misPorVer: Produccion.fetchAll(),
    });
};

exports.get_crear_porVer = (request, response, next) => {
    response.render('crear_porVer');
}

exports.post_porVer = (request, response, next) => {
    console.log(request.body);
    const mi_produccion = new Produccion(
        request.body.titulo_por_ver, request.body.tipo_por_ver, request.body.estado
    );
    mi_produccion.save();
    response.setHeader('Set-Cookie', 'ultima_produccion=' + mi_produccion.titulo_por_ver + '; HttpOnly');
    response.redirect('/porVer');
};