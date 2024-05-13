var Assignment = require('../../models/assignmentModel');

/**
 * Get Assignment
 */
 exports.getassignment = function(req,res){
    Assignment.find()
    .populate('course_id')
    .populate('subject_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Assignment loaded",status:200,assignment:data})
    })
 }
