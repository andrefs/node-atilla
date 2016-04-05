'use strict';
var async = require('async');
var es = require('elasticsearch');

function ElasticSearch(){
}


/****************************************************************
 * Get metadata from each server on the list passed as argument *
 ****************************************************************/

ElasticSearch.prototype.servers = function(serverList, callback){
    var self = this;

    if(!serverList || !Array.isArray(serverList)){
        return callback("Mandatory 'serverList' parameter must be an array");
    }
    if(!serverList.length){
        serverList.push('localhost:9200');
    }

    async.map(serverList, self._server,
    function(err, serverInfo){
        if(err){
            // TODO logging
        }
        for(var i in serverInfo){
            serverInfo[i].name = serverList[i];
        }
        return callback(null, serverInfo);
    });
}


/*************************************
 * Get metadata from a single server *
 *************************************/

ElasticSearch.prototype._server = function(server, callback){
    var client = new es.Client({host: server});
    var serverInfo = {};
    return client.indices.stats(function(err, stats){
        var indices = stats.indices;

        if(!indices){
            return callback("No information about indices from server '"+server+"'");
        }

        // Number of documents
        serverInfo.docs = stats._all.total.docs;

        // Database size
        serverInfo.store = stats._all.total.store;

        // Indices names
        for(var i in indices){
            serverInfo.indices = serverInfo.indices || {};
            serverInfo.indices[i] = {id: i};
        }

        return callback(null, serverInfo);
    });
}

module.exports = new ElasticSearch();
