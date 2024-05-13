Subject = require('../../models/subjectModel')

/**
 * add subject
 */
 exports.addsubject = function(req,res){
    var formdata = req.body
    Subject.findOne({
        $and:[
            {course_id:formdata.course_id} ,
            {subject_name: formdata.subject_name}
        ]
    })
    .then(data=>{
          if(data==null){
            var subjectobj  = new Subject();
            subjectobj.course_id = formdata.course_id
            subjectobj.subject_name = formdata.subject_name
            subjectobj.save()
            .then(data=>{
                res.status(200).send({success:true,message:"Subject Added successfully",status:200,subjects:data})
            })
          }else{
            res.status(409).send({success:false,message:"Subject already exists",status:409,stu:[]})
        }        
    })
}

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

/**
 * Update Subject
 */
 exports.updatesubject = function(req,res){
    Subject.findOne({_id:req.params.id})
    .then(data=>{
        if(data!=null){
            data.course_id = req.body.course_id
            data.subject_name = req.body.subject_name
            data.save()
            res.status(200).send({success:true,message:"Subject Updated",status:200})
        }
        else{
            res.status(404).send({success:false,message:"No Subject Found",status:404})
        }
    })
}

/**
 * Delete Subject
 */
 exports.deletesubject = function(req,res){
    Subject.findOne({_id:req.params.id})
    .then(data=>{
        if(data!=null){
            Subject.deleteOne({_id:req.params.id})
            .then(data=>{
                // console.log(data)
            })
            .catch(err=>{
                // console.log(err)
            })
            res.status(200).send({success:true,message:"Subject Deleted",status:200})
        }
        else{
            res.status(404).send({success:false,message:"No Subject Found",status:404})
        }
    })
}
