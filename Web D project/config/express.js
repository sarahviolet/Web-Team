const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

module.exports = function () {
  const app = express();

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compression());
  }

  app.use(bodyParser.urlencoded({ 
    extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  

  app.set('views', './views');
  app.set('view engine', 'ejs');
app.use('/', require('../routes/index.server.routes'));

  app.use(express.static('./public'));
  app.use(express.static("./node_modles"))
  app.use(express.static(__dirname + '/public'));

  return app;
};