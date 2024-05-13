User = require('../../models/userModel')
Student = require('../../models/studentModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

/**
 * Login
 */
 exports.login = function(req,res){
    // console.log(req.body.email)
    User.findOne({
        $and:[
            {email:req.body.email},
            {user_type:'student'},
            {status:true},
        ]   
    }).exec()
    .then(data=>{       
        // console.log(data)
        if(data!=null){
            if(bcrypt.compareSync(req.body.password, data.password)) {
                var privateKey = '132ABR2'
                var mydata = {
                    _id:data._id,
                    name:data.name
                }
                jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60*24*365),
                    data: mydata
                  }, privateKey,
                  Student.findOne({user_id:data._id}).then(student=>{
                    //    console.log(data._id)
                  //    console.log(student)
                    var student = student
                   }),
                  function(err,token){
                    // console.log(err)
                    // console.log(token)
                    res.status(200).send({success:true,message:"Login successfully",status:200,data:data,token:token})
                });
            }
            else{
                res.status(403).send({success:true,message:"Invalid Username Password",status:403,data:[]})
            }
        } else{
            res.status(404).send({success:true,message:"Not Exist",status:404,data:data})
        }
    })
}

/**
 * Logout
 */
exports.logout = function(req,res){
    res.status(200).send({success:true,message:"Logout successfully",status:200})
}