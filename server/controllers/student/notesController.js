var Notes = require('../../models/notesModel');

/**
 * Get Notes
 */
 exports.getnotes = function(req,res){
    Notes.find({subject_id:req.params.id})//subject_id
    .populate('course_id')
    .populate('subject_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Notes loaded",status:200,notes:data})
    })
 }