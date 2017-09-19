const express = require('express');
const morgan = require('morgan')
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank.js');
const app = express();
const routes = require('./routes');

app.use(morgan('combined'))

app.use('/', routes)


app.use(express.static('public'));



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
























app.listen(3000, function(request, response) {
  console.log('Server listening');
});
