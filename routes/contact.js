var express = require("express");
var router = express.Router();
const Contacts = require("../models/contactMdl").contacts;
const { User } = require("../models/user");


router.get("/comments", function (req, res, next) {
  // Contacts.find({}, (err, Contacts) => {
  //   if (err) throw err;
  //   res.render("comments", { title: "Contacts", Contacts });
  // });
  Contacts.find()
    .populate("user") //This populates the user id with actual user information!
    .exec(function (err, Contacts) {
      if (err) throw err;  
      res.render("comments", { Contacts });
  });
});


// Show the contact form
router.get("/", function (req, res, next) {
  res.render("contact");
});

// To recieve a new post data
router.post("/", function (req, res, next) {
  // const post = new Post(req.body);
  const contact = new Contacts();
  contact.firstname = req.body.firstname;
  contact.lastname = req.body.lastname;
  contact.mail = req.body.mail;
  contact.comment = req.body.comment;

  console.log(req.body.firstname);

  contact.user = req.user._id;
  contact.save((err) => {
    // if(err) throw err;
    if (err) {
      console.log(err);
      //res.render("thankYou", err);
      const errorArray = [];
      const errorKeys = Object.keys(err.errors);
      errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
      
      return res.render("contact", {
        postdata: req.body,
        errors: errorArray,
      });
      //return res.render("thankYou", {message: err});
    }
    
    req.session.fname = req.body.firstname;
    res.redirect("contact/thankYou");
  });
});

router.get("/thankYou", (req, res, next) => {
  const  fname = req.session.fname;
  console.log(fname);
  // // req.session.firstname = null;
  res.render("thankYou", { fname });
});

// router.get("/auth/:uname", function (req, res, next) {
//   // Using the given username paramter, find the user(auther) object from the DB
//   // Use the user _id from the user object, to find all posts for the _id
//   User.findOne({ username: req.params.uname }, (err, author) => {
//     if (err) return processErrors(err, "comments", req, res);
    
//     contacts.find({ user: author._id }, (err, comments) => {
//       if (err) return processErrors(err, "comments", req, res);
      
//       res.render("comments-author", { user: author.username, blogcomments: comments });
//     });
//   });
// });

router.get("/comments-author", function (req, res, next) {
  res.render("comments-author");
});
module.exports = router;
