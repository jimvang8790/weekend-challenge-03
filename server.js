// requires
var express = require ('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 8790;
var pg = require('pg');

// postico config
var config = {
  database: 'weekend-challenge-03', // name of database
  host: 'localhost', // host of database
  port: 5432, // default port # for database server
  max: 12 // max number of ppl allow on the database
};

// create a new pool to connect to the database
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

// getting data with the url /getTask from client via ajax
app.get('/task', function(req, res){
    console.log('in get task');

    // array of tasks
    var allTask = [];

    // connect to the db with pool
    // send back to client connection status
    pool.connect(function(err, connection, done){
      //check if there is an arror
      if (err) {
        console.log('err');
        res.send(400);
      } // end Error
      else {
        console.log('connect to db');
        // send query for all tasks in the 'todo' table and hold in a variable (resultSet)
        var resultSet = connection.query('SELECT * FROM todo');
        // convert each row into an object in the allTask array
        // on each row, push the row into allTask
        resultSet.on('row', function(row){
          allTask.push(row);
        }); // end on row
        resultSet.on('end', function(){
          // close connection to reopen spot in pool
          done(); // close connection to reopen spot in pool
          res.send(allTask); 
      });// end on end
    } // end no Error
  }); // end of pool.connect
}); // end of app.get '/getTask'
