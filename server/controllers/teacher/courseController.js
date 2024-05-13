Course = require('../../models/courseModel')

/**
 * Get all course
 */
exports.getcourse = function(req,res){
    Course.find().exec()
    .then(data=>{
        res.status(200).send({success:true,message:"Courses loaded",status:200,courses:data})
    })
}

/**
 * Get Course By Id
 */
 exports.getcoursebyid = function(req,res){
    Course.findOne({_id:req.params.id})
    .then(data=>{
        res.send({success:true,message:"Data loaded",status:200,data:data})
        
    })
}
