
var express=require('express');
var nodefetch=require('node-fetch');
var app=express();


app.get('/get_users', function(req,res){

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
});

app.listen(3001,function(){
console.log('Listening on port 3001!');

});