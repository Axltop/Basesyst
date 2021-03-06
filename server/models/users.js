var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: Number,
    email: String,
    // password must be encrypted with bcrypt
    password: String,
    firstName: String,
    lastName: String,
    avatar:{type:String, default:'images/avatar.png'}
    // //The location can be a String
    // location: {
    //     lat: Number,
    //     lon: Number
    // },
    // phone: Number,
    // registrationDate: Date,
    // lastLogin: Date,
    // // the friends are a Array with user ID's
    // friends: Array

    //TODO limits maximum and minimum lenght of strings
});

var User = mongoose.model('User', userSchema);

module.exports = User;
