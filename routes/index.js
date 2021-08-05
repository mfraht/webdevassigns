var express = require('express');
var router = express.Router();
var greeting = require('../mf-module');
var moment = require('moment-timezone');

router.get('/', function (req, res) {
  res.render('index', { mygreeting: greeting.greeting(), language: greeting.lang(), 
  date: moment().tz("America/Edmonton").format("dddd, MMMM Do YYYY"), 
  time: moment().tz("America/Edmonton").format("h:mm:ss a")});
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/about", (req,res,next) => {
  res.render("about")
})



module.exports = router;
