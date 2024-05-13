var Timetable = require('../../models/timetableModel');
/**
 * Get Time Table
 */
 exports.gettimetable = function(req,res){
    Timetable.find()
    .populate('user_id')
    .then(data=>{
        res.status(200).send({success:true,message:"Timetable loaded",status:200,timetable:data})
    })
}