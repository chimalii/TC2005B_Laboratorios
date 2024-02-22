//fs es el módulo de node que nos permite leer y escribir archivos
//contiene las funciones para manipular el sistema de archivos
const filesystem = require('fs');

//Crea y escribe un archivo
filesystem.writeFileSync('hola.txt', 'This file was created by Node.js! \nPrueba 2');
