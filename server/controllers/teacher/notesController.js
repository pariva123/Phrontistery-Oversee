var Notes = require('../../models/notesModel');

/**
 * Add Notes
 */

exports.addnotes = function (req, res) {
    var formdata = req.body
    var notesobj = new Notes();
    notesobj.course_id = formdata.course_id
    notesobj.subject_id = formdata.subject_id
    notesobj.note_name = formdata.note_name
    notesobj.description = formdata.description
    if (req.file != undefined) {
        var image = req.file
        notesobj.document = "notes/" + image.filename;
        notesobj.filePath = "http://localhost:8080/" + image.path;
    }
    else {
        notesobj.document = "notes/default.jpg"
    }
    notesobj.save()
    .then(data => {
        res.status(200).send({ success: true, message: "Notes added successfully", status: 200, data: data })
    })
}

/**
 * Get Notes
 */
 exports.getnotes = function(req,res){
    Notes.find()
    .populate('course_id')
    .populate('subject_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Notes loaded",status:200,notes:data})
    })
 }

  /**
 * Get Notes By Id
 */
   exports.getnotesbyid = function(req,res){
    const _id=req.params.id
    Notes.findById({_id:_id})
  .then(data=>{
      res.status(200).send({success:true,message:"Notes load",status:200,notes:data})
  })
}

/**
 * Delete notes
 */
 exports.deletenotes = function(req,res){
    Notes.findOne({_id:req.params.id})
    .then(data=>{
        if(data!=null){
            Notes.deleteOne({_id:req.params.id})
            .then(data=>{
                // console.log(data)
            })
            .catch(err=>{
                // console.log(err)
            })
            res.status(200).send({success:true,message:"Notes Deleted",status:200})
        }
        else{
            res.status(404).send({success:false,message:"No Notes Found",status:404})
        }
    })
}
