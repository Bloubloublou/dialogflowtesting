'use strict';
var express = require('express');
module.exports = function(app) {
var apiRoutes =  express.Router();
app.get('/',function(req,res){
    res.send('received data');
    console.log(req.body);
  });
};
