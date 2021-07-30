var express = require("express");
var router = express.Router();
const Contacts = require("../models/contactMdl").contacts;
const { User } = require("../models/user");

// Show the contact form
router.get("/", function (req, res, next) {
  res.render("contact");
});


// // Show the create form
// router.get("/comments", function (req, res, next) {
//   // const message = req.query.msg;
//     // const message = req.session.msg; // Read the message from the session variable
//     // req.session.msg = null; // Delete the message, as we no longer need it
//     comment.find()
//         .populate("user") //This populates the user id with actual user information!
//         .exec(function (err, comments) {
//             if (err) throw err;
//             res.render("comments", { contcomments: comments });
//         });
//   // res.render("contact");
// });

// // Show all comments for given username
// router.get("/auth/:uname", function (req, res, next) {
//   // Using the given username paramter, find the user(auther) object from the DB
//   // Use the user _id from the user object, to find all comments for the _id
//   User.findOne({ username: req.params.uname }, (err, author) => {
//       if (err) return processErrors(err, "comments", req, res);
//       comment.find({ user: author._id }, (err, comments) => {
//           if (err) return processErrors(err, "comments", req, res);
//           res.render("comments-author", { user: author.username, authorcomments: comments });
//       });
//   });
// });

// // middleware that is specific to this router,
// // checks that the user must be logged in
// router.use((req, res, next) => {
//   //console.log('Time: ', Date.now());
//   if (!req.user) res.status(403).redirect("/");
//   //else if (req.user.role != "agent") res.status(403).redirect("/");
//   else next();
// });

// function processErrors(errs, pageTemplate, req, res) {
//   // If there are errors from the Model schema
//   const errorArray = [];
//   const errorKeys = Object.keys(errs.errors);
//   errorKeys.forEach((key) => errorArray.push(errs.errors[key].message));
//   return res.render(pageTemplate, {
//       ...pageRegister,
//       errors: errorArray,
//       ...req.body,
//   });
// }




// To recieve a new post data
router.post("/", function (req, res, next) {
  // const post = new Post(req.body);
  const contact = new Contacts();
  contact.firstname = req.body.firstname;
  contact.lastname = req.body.lastname;
  contact.mail = req.body.mail;
  contact.comment = req.body.comment;
  
  console.log(`First Name: ${contact.lastname}`);
  console.log(`Last Name: ${contact.firstname}`);
  console.log(`Email: ${contact.mail}`);
  console.log(`Comment: ${contact.comment}`);
  //console.log(req.body.firstname);

  contact.user = req.user._id;
  contact.save((err) => {
    // if(err) throw err;
    if (err) {
      //console.log(err);
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
    // Put the thank you message in a session variable
    //req.session.msg = `Thank you for posting ${req.body.firstname}`;
    // req.flash("thankyou", `Thank you for posting ${req.user.fname}`);
    // res.redirect("/post" + "?msg=Thank you for posting " + req.user.fname);
    req.session.fname = req.body.firstname;
    req.session.lname = req.body.lastname;
    req.session.email = req.body.mail;
    req.session.comment = req.body.comment;
    res.redirect("contact/cuscomment");
  });
});




router.get("/thankYou", (req, res, next) => {
  const  fname = req.session.fname;
  console.log(fname);
  // // req.session.firstname = null;
  res.render("thankYou", { fname });
});

router.get("/comments", function (req, res, next) {
  res.render("comments");
});

router.get("/cuscomment", function (req, res, next) {
  const  fname = req.session.fname;
  const  lname = req.session.lname;
  const  email = req.session.email;
  const  comment = req.session.comment;
  res.render("cuscomment", { fname, lname, email, comment });
});

// To recieve a new post data
router.post("/cuscomment", function (req, res, next) {
  // const post = new Post(req.body);
  const contact = new Contacts();
  contact.firstname = req.body.firstname;
  
  console.log(`First Name: ${contact.lastname}`);
 
  //console.log(req.body.firstname);

  contact.user = req.user._id;
  contact.save((err) => {
    // if(err) throw err;
    if (err) {
      //console.log(err);
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
    // Put the thank you message in a session variable
    //req.session.msg = `Thank you for posting ${req.body.firstname}`;
    // req.flash("thankyou", `Thank you for posting ${req.user.fname}`);
    // res.redirect("/post" + "?msg=Thank you for posting " + req.user.fname);
    req.session.fname = req.body.firstname;
    res.redirect("contact/thankYou");
  });
});




router.get("/thankYou", (req, res, next) => {
  const  fname = req.session.fname;
  //console.log(fname);
  // // req.session.firstname = null;
  res.render("thankYou", { fname });
});

router.get("/comments", function (req, res, next) {
  res.render("comments");
});

router.get("/cuscomment", function (req, res, next) {
  const  fname = req.session.fname;
  const  lname = req.session.lname;
  const  email = req.session.email;
  const  comment = req.session.comment;
  res.render("cuscomment", { fname, lname, email, comment });
});


router.get("/comments-author", function (req, res, next) {
  res.render("comments-author");
});
module.exports = router;
