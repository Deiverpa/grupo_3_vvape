const express = require ("express");
const path = require ("path");
const methodOverride =  require('method-override');
const createError = require('http-errors');
const app = express ();
const session = require('express-session');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const publicPath = path.resolve(__dirname, './public')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use (express.static(publicPath))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(methodOverride('_method'));
app.use(session({secret:'vvape', resave: false, saveUninitialized: true}));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.listen (3005, () =>{
    console.log ("servidor corriendo en el puerto 3005")
});

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;