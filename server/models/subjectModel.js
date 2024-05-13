var mongoose = require('mongoose');//schema
const Schema = mongoose.Schema;
var subjectSchema = mongoose.Schema({
    subject_name: { type: String, },
    course_id:{
        type: Schema.Types.ObjectId,
        ref: 'course'
    },
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }

});

// Export subject Model
var subject = module.exports = mongoose.model('subject', subjectSchema);
module.exports.get = function (callback, limit) {
    subject.find(callback).limit(limit);
}