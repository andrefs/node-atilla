var express      = require('express');
var app          = new express();
var port         = process.env.PORT || 7777;
var parser       = require('body-parser');
var cookieParser = require('cookie-parser')


require('./routes/api/servers')(app);
require('./routes/api/indices')(app);
require('./routes/index')(app);

// view engine setup
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public/'));
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
app.use(cookieParser());

app.listen(port, function(){
    console.log('Server running on http://localhost:'+port);
});
