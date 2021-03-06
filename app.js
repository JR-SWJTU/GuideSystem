var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var DBConfig = require('./config/DBConfig');
var mongoStore = require('connect-mongo')(session);
var ErrorCode = require('./ErrorCode');

var userRoutes = require('./routes/User');  //引入用户路由中间件
var announcementRoutes = require('./routes/Announcement');  //引入服务公告路由中间件
var feedbackRoutes = require('./routes/Feedback');  //引入意见反馈路由中间件
var admissionNoticeRoutes = require('./routes/AdmissionNotice');  //引入意见反馈路由中间件
var landmarkRoutes = require('./routes/Landmark');  //引入地标路由中间件

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view options', {
  layout: true
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(cookieParser());
app.use(session({
  secret:'guidesystem',
  store:new mongoStore({
    url:'mongodb://localhost:27017/guidesystem',
    collection:'session'
  })
}))


// 路由规划
app.use('/', userRoutes);//挂载user模块路由中间件
app.use('/', announcementRoutes);
app.use('/', feedbackRoutes);
app.use('/', admissionNoticeRoutes);
app.use('/', landmarkRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
