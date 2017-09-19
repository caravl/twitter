const express = require('express');

const app = express(); // creates an instance of an express application


app.get('/', function(request, response) {
  response.send('Welcome');
})

app.use('/', function(request, response, next) {
  console.log('partial match');
  next();
})

app.use('/special', function(request, response, next) {
  console.log("You've reached the special area")
})









app.listen(3000, function(request, response) {
  console.log('Server listening');
});
