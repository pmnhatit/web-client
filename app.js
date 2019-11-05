var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var checkoutRouter = require('./routes/checkout');
var categoryRouter = require('./routes/category');
var singleRouter = require('./routes/single');
var cartRouter = require('./routes/cart');
var loginRouter = require('./routes/login');
var forgetRouter = require('./routes/forgetPass');
var hlProRouter = require('./routes/homeLogin');
var uProRouter = require('./routes/userProfile');
var infoShipProRouter = require('./routes/infoShip');
var his_statusProRouter = require('./routes/his_status');
var menProRouter = require('./routes/men');


var app = express();

app.set('views/', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/checkout', checkoutRouter);
app.use('/category', categoryRouter);
app.use('/men', menProRouter);
app.use('/single', singleRouter);
app.use('/cart', cartRouter);
app.use('/login', loginRouter);
app.use('/forgetPass', forgetRouter);
app.use('/homeLogin', hlProRouter);
app.use('/userProfile', uProRouter);
app.use('/infoShip', infoShipProRouter);
app.use('/his_status', his_statusProRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
