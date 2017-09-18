const express = require('express');

const app = express(); // creates an instance of an express application


app.get('/', function(request, response) {
  response.send('Welcome')
})














app.listen(3000, function(request, response) {
  console.log('Server listening');
});
