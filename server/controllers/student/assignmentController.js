var Assignment = require('../../models/assignmentModel');
var Answerassignment = require('../../models/answerassignmentModel');

/**
 * Get Assignment
 */
exports.getassignment = function (req, res) {
    Assignment.find({ subject_id: req.params.id })//subject id
        .populate('course_id')
        .populate('subject_id')
        .then(data => {
            res.status(200).send({ success: true, message: "Assignment loaded", status: 200, assignment: data })
        })
}


/**
 * Answer Assignment
 */
exports.answerassignment = function (req, res) {
    console.log(req.file)
    
    var formdata = req.body
    Answerassignment.findOne({
        $and: [
            { assignment_id: formdata.assignment_id },
            { student_user_id: formdata.student_user_id }
        ]
    })
    .then(data => {
        if (data == null) {
            var assignmentobj = new Answerassignment();
            assignmentobj.assignment_id = formdata.assignment_id
            assignmentobj.student_user_id = formdata.student_user_id
            assignmentobj.total_marks = formdata.total_marks
            assignmentobj.obtained_marks = formdata.obtained_marks
            if (req.file != undefined) {
                var image = req.file
                assignmentobj.answer_sheet = "answer_assignment/" + image.filename;
                assignmentobj.filePath = "http://localhost:8080/" + image.path;
            }
            else {
                assignmentobj.answer_sheet = "answer_assignment/default.jpg"
            }

            assignmentobj.save()
                .then(data => {
                    res.status(200).send({ success: true, message: "Assignment answer added successfully", status: 200, data: data })
                })
        }
        else {
            res.status(409).send({
                success: false, message: "Assignment answer alreay uploaded", status: 409
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

/**
 * Get Assignment Answer
 */
 exports.getassignmentanswer = function(req,res){
    Answerassignment.find({assignment_id:req.params.id})//assignment_id
    .populate('assignment_id')
    .populate('student_user_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Assignment answer loaded",status:200,assignment:data})
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