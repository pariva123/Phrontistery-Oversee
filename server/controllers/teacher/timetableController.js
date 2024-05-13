var Timetable = require('../../models/timetableModel');

/**
 * Add timetable
 */

exports.addtimetable = function (req, res) {
    var formdata = req.body
    var timetableobj = new Timetable();
    timetableobj.timetable_name = formdata.timetable_name
    timetableobj.user_id = formdata.user_id
    if (req.file != undefined) {
        var image = req.file
        timetableobj.timetable_name = "timetable/" + image.filename;
    }
    else {
        timetableobj.timetable_name = "timetable/default.jpg"
    }
    timetableobj.save()
    .then(data => {
        res.status(200).send({ success: true, message: "Timetable added successfully", status: 200, tech: data })
    })
}

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