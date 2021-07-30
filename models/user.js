// Using Node.js `require()`
const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "Username is required",
    trim: true,
    unique: "The username must be unique.",
    lowercase: true,
  },
  fname: {
    type: String,
    required: "First name is required",
    trim: true,
  },
  lname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(v);
      },
      message: (props) => `${props.value} is not a valid Email address.`,
    },
  },
  password: {
    type: String,
    required: "Please enter a password",
    trim: true,
    validate: {
      validator: function (v) {
        return /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{6,}$/.test(
          v
        );
      },
      message: (props) =>
        `Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 6 characters.`,
    },
  }, // more fields defined below
  role: {
    type: String,
    trim: true,
    default: "customer",
  },
});

userSchema.plugin(uniqueValidator);
// Create a model User using the userSchema
module.exports.User = mongoose.model("User", userSchema);
