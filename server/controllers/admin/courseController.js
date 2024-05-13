Course = require('../../models/courseModel')

/**
 * add course
 */
 exports.addcourse = function(req,res){
    var formdata = req.body
    Course.findOne({course_name:formdata.course_name})
    .then(data=>{
          if(data==null){
            var courseobj  = new Course();
            courseobj.course_name = formdata.course_name
            courseobj.save()
            .then(data=>{
                res.status(200).send({success:true,message:"Course Added successfully",status:200,courses:data})
            })
          }else{
            res.status(409).send({success:false,message:"Course already exists",status:409,course:[]})
          }        
    })
}

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

/**
 * Update Course
 */
 exports.updatecourse = function(req,res){
    Course.findOne({_id:req.params.id})
    .then(data=>{
        if(data!=null){
            data.course_name = req.body.course_name
            data.save()
            res.status(200).send({success:true,message:"Course Updated",status:200})
        }
        else{
            res.status(404).send({success:false,message:"No Course Found",status:404})
        }
    })
}

/**
 * Delete Course
 */
 exports.deletecourse = function(req,res){
    Course.findOne({_id:req.params.id})
    .then(data=>{
        if(data!=null){
            Course.deleteOne({_id:req.params.id})
            .then(data=>{
                // console.log(data)
            })
            .catch(err=>{
                // console.log(err)
            })
            res.status(200).send({success:true,message:"Course Deleted",status:200})
        }
        else{
            res.status(404).send({success:false,message:"No Course Found",status:404})
        }
    })
}
