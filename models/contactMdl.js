// Require the mongoose module
var mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const uniqueValidator = require("mongoose-unique-validator");

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: "Please enter your first name.",
        trim: true,
    },
    lastname: {
    type: String,
    required: "Please enter your last name.",
    trim: true,
    },
    mail: {
    type: String,
    trim: true,
    validate: {
        validator: function (v) {
            return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email.`,
    },
    required: "Please enter your email",
    unique: "The email must be unique.",
    },
    comment: {
    type: String,
    required: "Please write your email.",
    trim: true,
    validate: {
        validator: function (v) {
            return v.length > 10;
        },
        message: (props) => `The comment "${props.value}" is too short.`,
    },
    required: "Please enter your comment",
    },
    
        // more fields defined below
        
    });
    
    contactSchema.plugin(uniqueValidator);
    
    module.exports.contacts = mongoose.model("comment", contactSchema);
    