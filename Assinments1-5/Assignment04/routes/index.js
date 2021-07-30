var express = require('express');
var router = express.Router();
var greeting = require('mf-module');
var moment = require('moment');

router.get('/', function (req, res) {
  res.render('index', { message: greeting.greeting(), language: greeting.lang(), date: moment().format("dddd, MMMM Do YYYY"), time: moment().format("h:mm:ss a")});
});


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/index', function (req, res, next) {
  res.render('index');
});

router.get("/about", (req,res,next) => {
  res.render("about")
})

router.get("/contact", (req,res,next) => {
  res.render("contact")
})

router.get("/thankYou", (req,res,next) => {
  res.render("thankYou")
})

module.exports = router;


