var express      = require('express');
var app          = new express();
var port         = 7777;
var parser       = require('body-parser');
var cookieParser = require('cookie-parser')


require('./routes/servers')(app);
require('./routes/indices')(app);

// view engine setup
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/../.tmp'));
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
app.use(cookieParser());

app.get('/', function(req, res){
    res.render('../app/index.hbs');
});

app.listen(port, function(){
    console.log('Server running on http://localhost:'+port);
});
