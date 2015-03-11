var express = require('express');
var zipcoder = require('zipcoder');
var app = express();
var data;
app.get('/about',function(req,res){
   res.send('<h1>About Us</h1')
});
app.get('/*',function(req,res){


zipcoder.location(function(data){
data = console.log(data);
});
   res.send(data)
});
console.log('Server Started localhost 3000');
app.listen(3000);