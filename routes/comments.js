var express = require("express");
var router = express.Router();
const { User } = require("../models/user");
const comment = require("../models/contactMdl").comment;

/* GET all comments listing. */

router.get("/", function (req, res, next) {
  // const message = req.query.msg;
  // const message = req.session.msg; // Read the message from the session variable
  // req.session.msg = null; // Delete the message, as we no longer need it
  comment
    .find()
    // .populate("user") //This populates the user id with actual user information!
    .exec(function (err, comments) {
      //console.log(comments);
      if (err) throw err;
      res.render("comments", { contcomments: comments });
    });
});



// middleware that is specific to this router,
// checks that the user must be logged in
router.use((req, res, next) => {
 
  next();
});

function processErrors(errs, pageTemplate, req, res) {
  // If there are errors from the Model schema
  const errorArray = [];
  const errorKeys = Object.keys(errs.errors);
  errorKeys.forEach((key) => errorArray.push(errs.errors[key].message));
  return res.render(pageTemplate, {
    ...pageRegister,
    errors: errorArray,
    ...req.body,
  });
}



module.exports = router;
