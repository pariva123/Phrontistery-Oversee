var mongoose = require('mongoose');//schema
const Schema = mongoose.Schema;
var teacherSchema = mongoose.Schema({
    teacher_name: { type: String},
    qualification: { type: String},
    designation: { type: String},
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }

});
// Export teacher Model
var teacher = module.exports = mongoose.model('teacher', teacherSchema);
module.exports.get = function (callback, limit) {
    teacher.find(callback).limit(limit);
}