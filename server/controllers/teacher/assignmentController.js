var Assignment = require('../../models/assignmentModel');
var Answerassignment = require('../../models/answerassignmentModel');

/**
 * Add Assignment
 */

exports.addassignment = function (req, res) {
    var formdata = req.body
    var assignmentobj = new Assignment();
    assignmentobj.course_id = formdata.course_id
    assignmentobj.subject_id = formdata.subject_id
    assignmentobj.name_of_assignment = formdata.name_of_assignment
    assignmentobj.description = formdata.description
    assignmentobj.total_marks = formdata.total_marks
    assignmentobj.work_type = formdata.work_type
    if (req.file != undefined) {
        var image = req.file
        assignmentobj.document = "assignment/" + image.filename;
        assignmentobj.filePath = "http://localhost:8080/" + image.path;
    }
    else {
        assignmentobj.document = "assignment/default.jpg"
    }
    assignmentobj.save()
    .then(data => {
        res.status(200).send({ success: true, message: "Assignment added successfully", status: 200, data: data })
    })
}

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
 /**
 * Get Assignment By Id
 */
  exports.getassignmentbyid = function(req,res){
    const _id=req.params.id
    Assignment.findById({_id:_id})
  .then(data=>{
      res.status(200).send({success:true,message:"Assignment load",status:200,assignment:data})
  })
}

/**
 * Get Assignment Answer
 */
 exports.getassignmentanswer = function(req,res){
    Answerassignment.find({assignment_id:req.body.assignment_id})
    .populate('assignment_id')
    .populate('student_user_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Assignment answer loaded",status:200,assignment:data})
    })
 }

 /**
 * Get Assignment Answer by id
 */
  exports.getassignmentanswerbyid = function(req,res){
      const _id=req.params.id
    Answerassignment.findById({_id:_id})
    .then(data=>{
        res.status(200).send({success:true,message:"Assignment load",status:200,assignment:data})
    })
 }
/**
 * Delete Assignment
 */
 exports.deleteassignment = function(req,res){
    Assignment.findOne({_id:req.params.id})
    .then(data=>{
        if(data!=null){
            Assignment.deleteOne({_id:req.params.id})
            .then(data=>{
                // console.log(data)
            })
            .catch(err=>{
                // console.log(err)
            })
            res.status(200).send({success:true,message:"Assignment Deleted",status:200})
        }
        else{
            res.status(404).send({success:false,message:"No Assignment Found",status:404})
        }
    })
}

/**
 * update Marks
 */
 exports.assignmarks = function(req,res){
    Answerassignment.findOne({_id:req.body._id})
    .then(data=>{
        if(data!=null){
            data.obtained_marks = req.body.obtained_marks
            data.save()
            res.status(200).send({success:true,message:"Marks Assigned",status:200,data:data})
        }
        else{
            res.status(404).send({success:false,message:"No Assignment answer Found",status:404})
        }
    })
}
/**
  * Comment
  */
 exports.addcomment = function(req,res){
    var formdata = req.body
    Assignment.findOne({_id:formdata._id})
    .then(cmntobj=>{
          if(cmntobj!=null){
            var data1= {}
            data1.comment = formdata.comment
            data1.user_id = formdata.user_id
            cmntobj.comments.push(data1)
            cmntobj.save()
            .then(cmntobj=>{
                res.status(200).send({success:true,message:"Comment Added",status:200,stu:cmntobj})
            })
          }else{
            res.status(404).send({success:false,message:"Assignment Not Exit",status:404})
          }        
        
    })
}