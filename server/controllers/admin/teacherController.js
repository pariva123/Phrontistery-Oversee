Teacher = require('../../models/teacherModel')
User = require('../../models/userModel')

/**
 * add teacher
 */
 exports.addteacher = function(req,res){
    var formdata = req.body
    Teacher.findOne({user_id: formdata.user_id})
    .then(data=>{
          if(data==null){
            var teacherobj  = new Teacher();
            teacherobj.user_id = formdata.user_id
            teacherobj.teacher_name = formdata.teacher_name
            teacherobj.qualification = formdata.qualification
            teacherobj.designation = formdata.designation
            teacherobj.save()
            .then(data=>{
                res.status(200).send({success:true,message:"Teacher Added successfully",status:200,teacher:data})
            })
          }else{
            res.status(409).send({success:false,message:"Teacher already exists",status:409,stu:[]})
        }        
    })
}

/**
 * Get all Teacher
 */
exports.getteacher = function(req,res){
    Teacher.find()
    .populate('user_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Teacher loaded",status:200,teacher:data})
    })
}

/**
 * Get Teacher By Id
 */
 exports.getteacherbyid = function(req,res){
    Teacher.findOne({_id:req.params.id})
    .populate('user_id')
    .then(data=>{
        res.send({success:true,message:"Data loaded",status:200,data:data})
        
    })
}

/**
 * Update Teacher
 */
 exports.teacherUpdate = function(req,res){
    Teacher.findOne({_id:req.params.id})
    .then(data=>{
        if(data!=null){
            data.qualification = req.body.qualification
            data.designation = req.body.designation
            data.save()
            res.status(200).send({success:true,message:"Teacher Updated",status:200})
        }
        else{
            res.status(404).send({success:false,message:"No Teacher Found",status:404})
        }
    })
}

/**
 * Delete Teacher
 */
 exports.deleteteacher = function(req,res){
    Teacher.findOne({_id:req.params.id})
    .then(data=>{
        if(data!=null){
            // console.log(data)
            Teacher.deleteOne({_id:req.params.id})
            User.deleteOne({_id:data.user_id})
            Teacher.deleteOne({_id:data})
            .then(data=>{
            //     console.log(data)
            })
            .catch(err=>{
            //     console.log(err)
            })
            res.status(200).send({success:true,message:"Teacher Deleted",status:200})
        }
        else{
            res.status(404).send({success:false,message:"No Teacher Found",status:404})
        }
    })
}
