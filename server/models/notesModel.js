var mongoose = require('mongoose');//schema
const Schema = mongoose.Schema;
var notesSchema = mongoose.Schema({
    course_id:{
        type: Schema.Types.ObjectId,
        ref: 'course'
    },
    subject_id:{
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    note_name: { type: String,},
    description: { type: String,},
    document: { type: String,},
    filePath:{type:String},
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }
});

// Export notes Model
var notes = module.exports = mongoose.model('notes', notesSchema);
module.exports.get = function (callback, limit) {
    notes.find(callback).limit(limit);
}