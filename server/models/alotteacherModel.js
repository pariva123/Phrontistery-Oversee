var mongoose = require('mongoose');//schema
const Schema = mongoose.Schema;
var alotteacherSchema = mongoose.Schema({
    course_id:{
        type: Schema.Types.ObjectId,
        ref: 'course'
    },
    teacher_user_id:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    subject_id:{
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }

});

// Export alotteacher Model
var alotteacher = module.exports = mongoose.model('alotteacher', alotteacherSchema);
module.exports.get = function (callback, limit) {
    alotteacher.find(callback).limit(limit);
}