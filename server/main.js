var express = require('express');
var app = new express();
//
// view engine setup
app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('../app/index.hbs');
});

var port = 7777;
app.listen(port, function(){
    console.log('Server running on http://localhost:'+port);
});
