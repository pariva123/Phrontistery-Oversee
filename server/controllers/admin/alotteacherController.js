Alotteacher = require('../../models/alotteacherModel')

/**
 * Alot Teacher
 */
 exports.alotteacher = function(req,res){
    var formdata = req.body
    Alotteacher.findOne({
        $and:[
            {course_id:formdata.course_id} ,
            {teacher_user_id: formdata.teacher_user_id},
            {subject_id: formdata.subject_id}
        ]
    })
    .then(data=>{
          if(data==null){
            var alotobj  = new Alotteacher();
            alotobj.course_id = formdata.course_id
            alotobj.teacher_user_id = formdata.teacher_user_id
            alotobj.subject_id = formdata.subject_id
            alotobj.save()
            .then(data=>{
                res.status(200).send({success:true,message:"Teacher alotted successfully",status:200,result:data})
            })
          }else{
            res.status(409).send({success:false,message:"Teacher already aloted to this",status:409,result:[]})
          }        
    })
}

/**
 * Get alotted teacher
 */
exports.getalottedteacher = function(req,res){
    Alotteacher.find()
    .populate('course_id')
    .populate('subject_id')
    .populate('teacher_user_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Data loaded",status:200,result:data})
    })
}

/**
 * Delete ALotted
 */
 exports.deletealotted = function(req,res){
    Alotteacher.findOne({_id:req.params.id})
    .then(data=>{
        if(data!=null){
            Alotteacher.deleteOne({_id:req.params.id})
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
