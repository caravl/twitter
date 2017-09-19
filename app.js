const express = require('express');
const morgan = require('morgan')
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank.js');
const app = express();

app.use(morgan('combined'))
// app.get('/', function(request, response) {
//   response.render('index', locals);
// })

// app.use('/special', function(request, response, next) {
//   if(response.statusCode === 200){
//     response.send('This is the status: 200')
//   }
//   console.log("You've reached the special area")
// })

const locals = {
  title : 'An Example',
  people : [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Hermione'}
  ]
};

//nunjucks set up
nunjucks.configure('views', {noCache : true})
nunjucks.render('index.html', locals, function(err, res){
  console.log(res)
})
app.engine('html', nunjucks.render)
app.set('view engine', 'html')



// express routes

app.get('/', function(request, response, next) {
  response.send(tweetBank.list());

});

app.get('/tweets', function(request, response, next) {
  response.send(tweetBank.find().forEach(function(tweetData) {
    return tweetData.content.toString();
  }));
})


app.post('/tweets', function(request, response, next) {
  response.send(tweetBank.add())
})





















app.listen(3000, function(request, response) {
  console.log('Server listening');
});
