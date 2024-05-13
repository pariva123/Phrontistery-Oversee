Student = require('../../models/studentModel')

/**
 * add student
 */
 exports.addstudent = function(req,res){
    var formdata = req.body
    Student.findOne({user_id: formdata.user_id, course_id: formdata.course_id, subject_id: formdata.subject_id})
    .then(data=>{
          if(data==null){
            var studentobj  = new Student();
            studentobj.user_id = formdata.user_id
            studentobj.course_id = formdata.course_id
            studentobj.subject_id = formdata.subject_id
            studentobj.student_name = formdata.student_name
            studentobj.rollno = formdata.rollno
            studentobj.save()
            .then(data=>{
                res.status(200).send({success:true,message:"Student Added successfully",status:200,student:data})
            })
          }else{
            res.status(409).send({success:false,message:"Student already exists",status:409,student:[]})
        }        
    })
}

/**
 * Get all Student
 */
exports.getstudent = function(req,res){
    Student.find()
    .populate('user_id')
    .populate('course_id')
    .populate('subject_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Student loaded",status:200,student:data})
    })
}

/**
 * Get Student by student id
 */
 exports.getstudentid = function(req,res){
    Student.find({},{_id:0, course_id:0, subject_id:0,rollno:0, student_name:0, created_at:0, status:0,__v:0})
    .populate('user_id')
    // .populate('course_id')
    // .populate('subject_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Student loaded",status:200,student:data})
    })
}

/**
 * Get Student By Id
 */
 exports.getstudentbyid = function(req,res){
    Student.findOne({_id:req.params.id})
    .populate('user_id')
    .then(data=>{
        res.send({success:true,message:"Data loaded",status:200,data:data})
        
    })
}

/**
 * Update Student
 */
 exports.studentUpdate = function(req,res){
    Student.findOne({_id:req.params.id})
    .then(data=>{
        if(data!=null){
            data.student_name = req.body.student_name
            data.save()
            res.status(200).send({success:true,message:"Student Updated",status:200})
        }
        else{
            res.status(404).send({success:false,message:"No Student Found",status:404})
        }
    })
}

/**
 * Delete Student
 */
 exports.deletestudent = function(req,res){
    Student.findOne({_id:req.params.id})
    .then(data=>{
        if(data!=null){
            // console.log(data)
            Student.deleteOne({_id:req.params.id})
            User.deleteOne({_id:data.user_id})
            Student.deleteOne({_id:data})

            .then(data=>{
            //     console.log(data)
            })
            .catch(err=>{
            //     console.log(err)
            })
            res.status(200).send({success:true,message:"Student Deleted",status:200})
        }
        else{
            res.status(404).send({success:false,message:"No Student Found",status:404})
        }
    })
}
