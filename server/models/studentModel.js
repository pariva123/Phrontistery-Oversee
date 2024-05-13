var mongoose = require('mongoose');//schema
const Schema = mongoose.Schema;
var studentSchema = mongoose.Schema({
    student_name: { type: String},
    rollno: { type: String},
    course_id:{
        type: Schema.Types.ObjectId,
        ref: 'course'
    },
    subject_id:{
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }

});
// Export student Model
var student = module.exports = mongoose.model('student', studentSchema);
module.exports.get = function (callback, limit) {
    student.find(callback).limit(limit);
}