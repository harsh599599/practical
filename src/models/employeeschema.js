const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employee = new Schema({
    user_name: String,
    user_email: String,
    user_mobile: String

});

module.exports = mongoose.model('users', employee)