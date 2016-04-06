var async = require('async');
var es = require('../../lib/elasticSearch');
module.exports = function(app){

// http://localhost:9200/_stats
// http://localhost:9200/_aliases
// http://localhost:9200/_stats/indices
// http://localhost:9200/_mapping

// http://localhost:9200/_stats/indexes/docs,store

    var servers = [{
        id:'localhost',
        name: 'localhost',
        docs: {count:8},
        store:{size_in_bytes: 26109},
        indexes:[
            {id : "gitrepo" },
            {id : "music"   },
            {id : "books"   }
        ]
    }];

    app.route('/api/servers')
    .get(function(req, res){
        var atilla_servers = req.cookies ? req.cookies.atilla_servers : [];
        var serverList = Array.isArray(atilla_servers) && atilla_servers.length ? atilla_servers : [];

        es.servers(serverList, function(err, serverInfo){
            if(err){
                res.status(500).send('Error while retrieving server info');
            }
            res.send(serverInfo);
        });
    })
};

