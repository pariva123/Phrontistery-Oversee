Subject = require('../../models/subjectModel')

/**
 * Get all subjects
 */
exports.getsubject = function(req,res){
    Subject.find()
    .populate('course_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Subjects loaded",status:200,subjects:data})
    })
}

/**
 * Get Subject By Id
 */
 exports.getsubjectbyid = function(req,res){
    Subject.findOne({_id:req.params.id})
    .populate('course_id')
    .then(data=>{
        res.send({success:true,message:"Data loaded",status:200,data:data})
        
    })
}