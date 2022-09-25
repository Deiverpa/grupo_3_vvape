const express = require ("express");
const path = require ("path");

const app = express ();

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const publicPath = path.resolve(__dirname, './public')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use (express.static(publicPath))
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.set('view engine', 'ejs');

app.listen (3005, () =>{
    console.log ("servidor corriendo en el puerto 3005")
});

module.exports = app;