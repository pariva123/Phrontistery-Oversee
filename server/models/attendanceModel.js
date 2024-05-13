var mongoose = require('mongoose');//schema
const Schema = mongoose.Schema;
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
var attendanceSchema = mongoose.Schema({
    course_id:{
        type: [Schema.Types.ObjectId],
        ref: 'course'
    },
    subject_id:{
        type: [Schema.Types.ObjectId],
        ref: 'subject'
    },
    rollno:{ type:[String]},
    student_name:{ type:[String]},
    attendance_date: { type: String, default:today.toDateString().slice(4,15)},
    isAttendance :{ type: [String]},
  
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: today.toDateString()}

});// Export attendance Model
var attendance = module.exports = mongoose.model('attendance', attendanceSchema);
module.exports.get = function (callback, limit) {
    attendance.find(callback).limit(limit);
}