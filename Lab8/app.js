//fs es el módulo de node que nos permite leer y escribir archivos
//contiene las funciones para manipular el sistema de archivos
const filesystem = require('fs');

//Crea y escribe un archivo
filesystem.writeFileSync('hola.txt', 'This file was created by Node.js! \nPrueba 2');

//Servidor web
const http = require('http');
//Recibe funcion a ejecutar cuando se recibe una petición
//request: datos de la petición
//response: objeto que permite enviar datos
const server = http.createServer((request, response) => {
    console.log(request.url);//Para mostrar qué se pide al servidor
    response.setHeader('Content-Type', 'text/html'); //tipo de contenido
    response.write(`
    <!DOCTYPE html>

    <html>
    
        <head>
            <meta charset="utf-8"> <!--Codificación de caracteres (acentos)-->
            <title>Lab1_Introduccion-Pag-WEB</title>
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
            <link rel="stylesheet" href="style_lab1.css">
        </head>
        <body>
            <p class = "negrita">Gabriela Chimali Nava Ramirez</p>
            <li class="negrita">A01710530</li>
            <li class="negrita">a01710530@tec.mx</li>
            <h1>Introducción a las aplicaciones web</h1>
            <!--Pregunta 1-->
            <h2>1. ¿Cuál es la diferencia entre Internet y la World Wide Web?</h2>
            <p class="justificado">Internet es una red de computadoras conectadas entre sí. En cambio, la web es una colección de páginas sobre esa red de computadoras. Se usa internet para acceder a la web.</p>
            <!--Pregunta 2-->
            <h2>2. ¿Cuáles son las partes de un URL? [1]</h2>
            <table>
                <tr>
                    <th>Parte</th>
                    <th>Descripción</th>
                </tr>
                <tr>
                    <td>HTTPS</td>
                    <td>Es el protocolo, cifra y protege los datos transmitidos entre el servidor y el navegador.</td>
                </tr>
                <tr>
                    <td>Dominio</td>
                    <td>Nombre del servidor que aloja el recurso.</td>
                </tr>
                <tr>
                    <td>TLD</td>
                    <td>Extensión de dominio, indica el tipo de entidad en que está registrada la organización en Internet.</td>
                </tr>
                <tr>
                    <td>Subdirectorio </td>
                    <td>Indica en qué sección específica del sitio estás.</td>
                </tr>
                <tr>
                    <td>Ruta</td>
                    <td>Ubicación del recurso en el servidor</td>
                </tr>
            </table>
            <!--Pregunta 3-->
            <h2>3. ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE? [2]</h2>
            <table>
                <tr>
                    <th>Método</th>
                    <th>Propósito</th>
                </tr>
                <tr>
                    <td>GET</td>
                    <td>Solicita un recurso específico, sólo recupera datos, la info. solicitada.</td>
                </tr>
                <tr>
                    <td>HEAD</td>
                    <td>Etiqueta con la info. general del documento.</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>Crea un nuevo recurso, requiere una definición de datos de la entidad a crear.</td>
                </tr>
                <tr>
                    <td>PUT</td>
                    <td>Modifica un recurso, si no encuentra un recurso coincidente, crea uno nuevo.</td>
                </tr>
                <tr>
                    <td>PATCH</td>
                    <td>Aplica una modificación parcial a un recurso, indicando sólo los datos a actualizar.</td>
                </tr>
                <tr>
                    <td>DELETE</td>
                    <td>Elimina un recurso.</td>
                </tr>
            </table>
            <!--Pregunta 4-->
            <h2>4. ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué? [3]</h2>
            <p class="justificado">Comúnmente GET y POST, el primero solicita datos y el segundo envía los recibidos.</p>
            <!--Pregunta 5-->
            <h2>5. ¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</h2>
            <p>GET que solicita recursos de un servidor web, que aloja dicho URL.</p>
            <!--Pregunta 6-->
            <h2>6. Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</h2>
            <p class="justificado">Indica que la solicitud fue completada exitosamente, no ocurrió ningún error.</p>
            <!--Pregunta 7-->
            <h2>7. ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué? [3]</h2>
            <p class="justificado">Este error significa que no se pudo encontrar la página solicitada, es responsabilidad del desarrollador si la página fue eliminada o trasladada, si hubo algún error en la configuración del servidor o un problema de conexión; sin embargo puede ocurrir si se ingresa incorrectamente la URL.</p>
            <!--Pregunta 8-->
            <h2>8. ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</h2>
            <p class="justificado">Sí, pues indica un error en el servidor interno que impide cumplir una solicitud.</p>
            <!--Pregunta 9-->
            <h2>9. ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML4 que en HTML5 estén desaprobados.</h2>
            <p class="justificado">Significa que el atributo ya no es recomendado, pero aún es soportado por los navegadores (puede desplegarse).  En HTML5 se recomienda CSS para aplicar formato al texto, mientras que en HTML4 se empleaban etiquetas, ahora obsoletas, como center para centrar un texto o basefont para definir una tipografía por defecto.</p>
            <!--Pregunta 10-->
            <h2>10. ¿Cuáles son las diferencias principales entre HTML 4 y HTML5? [4]</h2>
            <li>La mayoría de sus funciones son compatibles con navegadores modernos, otras versiones pueden tener funciones obsoletas no soportadas por estos navegadores.</li>
            <li>HTML5 es compatible con múltiples archivos multimedia (audio, video, gráficos, animaciones).</li>
            <li>HTML4 se basaba en el estándar SGML, a comparación con el HTML5 que analiza con sus propias reglas.</li>
            <li>HTML5 cuenta con etiquetas más limpias y con mayor capacidad de respuesta.</li>
            <li>HTML5 funciona con mayor fluidez en dispositivos pequeños y menos potentes, si lo comparamos con versiones anteriores.</li>
            <li>HTML5 admite almacenamiento local a través de API, así como en bases de datos web SQL.</li>
            <li>HTML4 dependía de sistemas externos actualmente en desuso, HTML5 puede hacer muchas cosas de forma nativa.</li>
            <!--Pregunta 11-->
            <h2>11. ¿Qué componentes de estructura y estilo tiene una tabla?</h2>
            <table>
                <tr>
                    <th>Estructura</th>
                    <th>Estilo</th>
                </tr>
                <tr>
                    <td>- table: Elemento tabla, representa info. con más de una dimensión.
                        <br>- tr: Representa una fila en la tabla.
                        <br>- td: Representa la info. en una celda en la tabla.
                        <br>- th: Representa una celda de encabezado en una fila de la tabla.</td>
                    <td>Utilizando CSS se puede:
                        <br>- border: Agregar bordes en table, th, td.
                        <br>- background-color: Establecer un color para cada celda.
                        <br>- padding: Para ajustar el tamaño del texto en una celda.
                        <br>- text-align: Para alinear el texto.
                    </td>
                </tr>
            </table>
            <!--Pregunta 12-->
            <h2> 12. ¿Cuáles son los principales controles de una forma HTML5?</h2>
            <p> Permiten al usuario introducir datos, marcar o seleccionar opciones, o incluso subir archivos:
                <br>* text - Introducir línea de texto
                <br>* password - Introducir caracteres que se ocultan
                <br>* textarea - Introducir texto de varias líneas
                <br>* checkbox - Permite marcar casillas de verificación
                <br>* radio - Permite elegir una opción con botones de selección</p>
            <p> Agregadas a HTML5:
                <br>* date - Seleccionar una fecha
                <br>* time - Seleccionar una hora
                <br>* email - Introducir una dirección de correo electrónico
                <br>* url - Introducir una URL
                <br>* search - Introducir una búsqueda
                <br>* color - Seleccionar un color</p>
            <!--Pregunta 13-->
            <h2> 13. ¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo:</h2>
            <p> Uso Chrome que tiene un score de 538 de 571 puntos.</p>
            <!--Pregunta 14-->
            <h2> Sobre el ciclo de vida y desarrollo de los sistemas de información:<br>14. ¿Cuál es el ciclo de vida de los sistemas de información? [5]</h2>
            <p class="justificado">Abarca desde la concepción de la idea de crear/optimizar el sistema, hasta que este es reutilizado o se vuelve obsoleto.</p>
            <!--Pregunta 15-->
            <h2> 15. ¿Cuál es el ciclo de desarrollo de sistemas de información? [5]</h2>
            <p class="justificado">Fase de creación del sistema, se implementa, prueba, corrige, da mantenimiento.</p>
            <h2>Referencias</h2>
            <p>[1]  Chi, C. (2023, 10 mayo). Parts of a URL: AShort Guide. HubSpot. https://blog.hubspot.com/marketing/parts-url</p>
            <p>[2]  Ramos, C. (2022, 27 enero). HTTP Request Methods: Get vs Put vs Post Explained with Code Examples. freeCodeCamp. https://www.freecodecamp.org/news/http-request-methods-explained/</p>
            <p>[3]  Digital Guide IONOS. (2023, 31 enero). Error 404: ¿Qué significa y cómo solucionarlo? https://www.ionos.mx/digitalguide/paginas-web/creacion-de-paginas-web/que-significa-el-error-404-not-found/</p>
            <p>[4]  Barrón, B. (2021, 8 abril). HTML vs HTML5: Conoce las diferencias cruciales entre ellos. Kista. https://kinsta.com/es/blog/html-vs-html5/#:~:text=Como%20ya%20se%20ha%20dicho,Java%20Web%20Start%20y%20Flash</p>
            <p>[5]  Yedra, Y. (2017, 26 marzo). Ciclo de vida de los sistemas de información. SlideShare. https://es.slideshare.net/YaskellyYedra/ciclo-de-vida-de-los-sistemas-de-informacion-73671543</p></p>
        </body>
        <footer>
            <h3>Visual Studio Code <br><a href="https://code.visualstudio.com/">Sitio web del IDE</a></h3>
        </footer>
    </html>
    `); //escribir en la respuesta
    response.end(); //terminar la respuesta
});
//Mantener 'vivo' el servidor 
server.listen(3000); //puerto en el que se escucha

