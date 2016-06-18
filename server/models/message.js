var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    //The id can be a number or a string
    id: String,
    message: String,
    sender: String,
    reciever: String
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
