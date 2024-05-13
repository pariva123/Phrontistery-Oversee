var mongoose = require('mongoose');//schema
const Schema = mongoose.Schema;
var assignmentSchema = mongoose.Schema({
    course_id:{
        type: Schema.Types.ObjectId,
        ref: 'course'
    },
    subject_id:{
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    name_of_assignment: { type: String,},
    description: { type: String,},
    document: { type: String,},
    filePath:{type:String},
    total_marks: { type: String,},
    work_type: { type: String,}, //assignment,task,test
    comments:[{
        comment:{type:String,default:''},
        user_id:{
            type: Schema.Types.ObjectId,
            ref: 'user_id'
        },
        comment_date:{  type: Date,  default: Date.now    }
    }],
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }
});

// Export assignment Model
var assignment = module.exports = mongoose.model('assignment', assignmentSchema);
module.exports.get = function (callback, limit) {
    assignment.find(callback).limit(limit);
}