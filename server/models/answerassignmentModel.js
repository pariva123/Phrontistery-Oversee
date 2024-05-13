var mongoose = require('mongoose');//schema
const Schema = mongoose.Schema;
var answersheetSchema = mongoose.Schema({
    assignment_id:{
        type: Schema.Types.ObjectId,
        ref: 'assignment'
    },
    student_user_id:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    answer_sheet:{ type:String,required:true},
    filePath:{type:String},
    total_marks :{ type:String },
    obtained_marks :{ type:String },
    status: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now }
});

// Export answersheet Model
var answersheet = module.exports = mongoose.model('answersheet', answersheetSchema);
module.exports.get = function (callback, limit) {
    answersheet.find(callback).limit(limit);
}