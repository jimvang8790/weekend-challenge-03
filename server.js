// requires
var express = require ('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 8790;
var pg = require('pg');

// postico config
var config = {
  database: 'todo', // name of database
  host: 'localhost', // host of database
  port: 5432, // default port # for database server
  max: 12 // max number of ppl allow on the database
};

// create pool to connect to the database
var pool = new pg.Pool(config);

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// spin up server
app.listen(port, function(){
console.log('server is up on:', port);
});// end of app.listen

// routes base url
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});// end of base url
