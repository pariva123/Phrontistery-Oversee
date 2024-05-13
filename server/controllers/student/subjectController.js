Subject = require('../../models/subjectModel')
/**
 * Get all subjects
 */
exports.getsubject = function(req,res){
    // console.log(req.body)
    Subject.find({course_id:req.params.id})//course _id
    .populate('course_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Subjects loaded",status:200,subjects:data})
    })
}
