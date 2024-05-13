var Student = require('../../models/studentModel');
var Attendance = require('../../models/attendanceModel');

exports.addattendance = function (req, res) {
    var formdata = req.body.attendanceArray;
    const rollno=[];
    const student_name=[];
    const course_id=[];
    const subject_id=[];
    const isAttendance=[];
    for(var i=0; i<formdata.length;i++){
        course_id.push(formdata[i].course_id);
        subject_id.push(formdata[i].subject_id);
        isAttendance.push(formdata[i].isPresent);
        rollno.push(formdata[i].rollno);
        student_name.push(formdata[i].student_name);
    }
    
    console.log(rollno)

    const attendance = new Attendance({
        course_id:course_id,
        subject_id:subject_id,
        student_name:student_name,
        rollno:rollno,
        isAttendance:isAttendance
    })
    attendance.save()
    .then(data=>{
        res.send({success:true, message:"Attendance added successfully",status:200,data:data})
    })
   
    
}

exports.getAttendance = function(req,res){
    Attendance.find({},{_id:0})
    .select("attendance_date")
    .then(data=>{
        res.send({success:true,message:"Data loaded",status:200,data:data})
    })
}

exports.getAttendanceWithDate = function(req,res){
   Attendance.find({course_id:req.body.course_id,subject_id:req.body.subject_id,attendance_date:req.body.attendance_date})
   .populate('course_id')
    .populate('subject_id')
   .then(data=>{
    res.send({success:true,message:"Data loaded",status:200,data:data})
})

}

exports.getstudentbycourse = function(req,res){
    // console.log(req.body.subject_id)
    Student.find(
            {subject_id:req.body.subject_id, course_id: req.body.course_id}
     )
    .populate('course_id')
    .populate('subject_id')
    .populate('user_id')
    .then(data=>{
        res.send({success:true,message:"Attendance loaded",status:200,data:data})
    })
}

