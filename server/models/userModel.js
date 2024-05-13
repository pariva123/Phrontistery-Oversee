//userModel.js - common user
var mongoose = require('mongoose');//schema
var userSchema = mongoose.Schema({
    name: { type: String, },
    email: { type: String, required: true, unique: true },
    password: { type: String,},
    contact: { type: Number, },
    address: { type: String, },
    user_type: { type: String,required:true},
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }

});
// Export user Model
var user = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    user.find(callback).limit(limit);
}