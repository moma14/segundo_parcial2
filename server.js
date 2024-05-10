const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const router = require('./routes/routes');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//aqui se configura la plantilla del pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// este middleware es el que sirve para procesar los archivos estáticos en la carpeta 'public'
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
console.log();

// Puerto en el que escucha el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
