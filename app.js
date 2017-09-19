const express = require('express');
const morgan = require('morgan')

const app = express(); // creates an instance of an express application


app.get('/', function(request, response) {
  response.send('Welcome');
})

app.use(morgan('combined'))

app.use('/special', function(request, response, next) {
  if(response.statusCode === 200){
    response.send('This is the status: 200')
  }
  console.log("You've reached the special area")
})









app.listen(3000, function(request, response) {
  console.log('Server listening');
});
