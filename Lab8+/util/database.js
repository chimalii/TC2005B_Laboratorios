const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root', //*** recomendado que no tenga acceso a todo, solo a la base de datos que se va a usar
    database: 'showgrade',
    password: 'MYsql.462'
});

module.exports = pool.promise(); //Con esto se exporta la conexión a la base de datos, función en caso de que la base de datos cumpla o no con la promesa(la conexión se ejecuta exitosamente o no)