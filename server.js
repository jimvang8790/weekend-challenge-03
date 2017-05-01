// requires
var express = require ('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var port = 8790;

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

//**NOTE**
// this app.post will allow users to add task to the database from the DOM
app.post('/addingTask', function(req, res){
  var data = req.body; // data from the client side
  var newTask = [// use and var array to store data
    data.name,
    data.task,
    data.currentDate,
    data.day
  ];// end of newTask array

  // a variable for inserting info
  var insert = 'INSERT INTO todo (name, task, day, day_to_be_done) VALUES($1, $2, $3, $4)';

  // connect to the database via pool
  pool.connect(function(err, connection, done){
    // check if there is an error
    if (err) {
      console.log('err');
      res.send(400);
    } // end error
    else {
      connection.query(insert, newTask);
      done();
      res.send(200);
    } // end no error
  }); // end of pool.connect
});// end of app.post '/addTask'

//**NOTE**
// function for deleting task
app.delete('/remove', function(req, res){
  console.log('in /remove delete');
  // connecting to the database
  pool.connect(function(err, connection, done){
    if (err) {
      console.log(err);
    }
    else{
      connection.query('DELETE FROM todo where id=' + req.body.id );
      done();
      res.send(200);
    }// end of if/else statement
  });// end of pool.connect
});// end of app.delete
