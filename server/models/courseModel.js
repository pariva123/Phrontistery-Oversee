//courseModel.js
var mongoose = require('mongoose');//schema
var courseSchema = mongoose.Schema({
    course_name: { type: String,unique:true},
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }

});
// Export course Model
var course = module.exports = mongoose.model('course', courseSchema);
module.exports.get = function (callback, limit) {
    course.find(callback).limit(limit);
}