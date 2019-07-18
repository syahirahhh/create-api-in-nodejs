var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express()

var indexRouter = require('./routes/login');
var usersRouter = require('./routes/Users');
var productRouter = require('./routes/listproduct');
var addproductRouter =  require('./routes/addproduct');


app.get('/foo', (req, res, next) => {
  const foo = JSON.parse(req.body.jsonString)
  // ...
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', productRouter);
app.use('/',addproductRouter);
app.get('/', (req,res) => {
  res.send('Hello world');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    errorMessage: err
  });
});

module.exports = app;

const port = process.env.PORT || 4200;

// Running port
app.listen(port, (req, res) => {
    console.log(`RUNNING on port ${port}`);
})




