module.exports = function(app){

    app.route('/')
    .get(function(req, res){
        var markup = {};
        var state  = {};
        res.render('../views/index.hbs',{
            markup: markup,
            state: state
        });
    })
};

