const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
app.use(session({
  secret: 'Cause all of its toxic. Girl, Im not relevant to givin on profit. Personal gain off my pain, its nonsense; darlin, my demons is off the leash for a moshpit. Baby, I just had a baby, you know she need me; workin on myself, the counselin is not easy. Dont you point a finger, just to point a finger; cause critical thinkin is a deal-breaker; faith in one man is a ship sinking. Do yourself a favor and get a mirror that mirror grievance, then point it at me so the reflection can mirror freedom. She told me she need me the most, I didnt believe her, she even called me names on the post, the world can see it. Jokes and gaslightin, mad at me cause she didnt get my vote, she say Im trifflin; disregardin the way that I cope with my own vices; maybe, its time to break it off. Runaway from the culture to follow my heart. I realized, true loves not savin face, but unconditional, when will you let me go? I trust youll find independence; if not, then all is forgiven. Sorry I didnt save the world, my friend, I was too busy buildin mine again.', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

/*/Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});
*/

const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);

const rutasClases= require('./routes/clases.routes');
app.use('/', rutasClases);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html')); 
});

app.listen(3000);