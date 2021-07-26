//import mongoose into the file
const mongoose = require('mongoose');
//import passport into our file
const passportLocalMongoose = require('passport-local-mongoose')
//we create a new schema
const managerSchema = new mongoose.Schema({
    fnames:{
        type: String,
        trim: true,
    },

    phonenumber:{
        type: Number,
    },

    email:{
        type: String,
        required:'please enter valid email',
        unique: true,
        trim: true,
    },

    password:{
        type: String,
    }
}

);

//use a plugin that helps passport recognize the manager's email to be used as the username.
managerSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
//export our schema
module.exports = mongoose.model('Manager', managerSchema);
