const express = require('express');
const morgan = require('morgan')
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank.js');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser')

app.use(morgan('combined'))

app.use('/', routes)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));
app.engine('html', nunjucks.render)
app.set('view engine', 'html')


//nunjucks set up
nunjucks.configure('views', {noCache : true})

























app.listen(3000, function(request, response) {
  console.log('Server listening');
});
