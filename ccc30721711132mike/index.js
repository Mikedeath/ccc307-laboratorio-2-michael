var express = require('express');
var app = express();
var fetch = require('node-fetch');

var myPackage = require('ccc307publicpackage');

app.get('/get_users', function(req, res) {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
});

app.get('/get_users_new', function (req, res) {
    var str= myPackage.
	res.send( myPackage());
   
});

app.listen(3001, function() {
    console.log('sirve en 3001');
});