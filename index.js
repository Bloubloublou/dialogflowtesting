'use strict';
var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
config       = require('./config'),
server       = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
var routes = require('./routes/routes'); //importing route
routes(server); //register the route
server.listen((process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port" + process.env.PORT);
});
