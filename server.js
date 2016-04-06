// Babel ES6/JSX Compiler
require('babel-register');

var React        = require('react');
var ReactDOM     = require('react-dom/server');
var Router       = require('react-router');
var routes       = require('./app/routes');

var express      = require('express');
var app          = new express();
var logger       = require('morgan');
var port         = process.env.PORT || 7777;
var parser       = require('body-parser');
var cookieParser = require('cookie-parser')

// view engine setup
app.set('view engine', 'hbs');

// static files path
app.use(express.static(__dirname+'/public/'));

// logger
app.use(logger('dev'));

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
app.use(cookieParser());

// routing
app.use(function(req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if(err){
            res.status(500).send(err.message);
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RouterContext, renderProps));
            res.render('index.hbs',{html: html});
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

app.listen(port, function(){
    console.log('Server running on http://localhost:'+port);
});
