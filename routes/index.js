const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm : true } );
});

router.get('/users/:name', function(req, res){
  var name = req.params.name;
  var list = tweetBank.find({name : name})
  console.log(list)
  res.render('index', {tweets : list, showForm : true, name : name})
})


router.get('/tweet/:content', function(req, res){
  var content = req.params.content;
  var list = tweetBank.find({content : content})
  res.render('index', {tweets : list, showForm : false})
})

//getting to user's page by ID is broken
router.get('/tweet/:id', function(req, res){
  if(req.params.id*1 === name.id){
    var id = req.params.id;
    var list = tweetBank.find({id : id})
    res.render('index', {tweets : list, showForm : false})
  }
})

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


module.exports = router;
