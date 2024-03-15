exports.get_login = (request, response, next) => {
    response.render('login',{
        username: request.session.username || '',
    });
};

exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/');
}