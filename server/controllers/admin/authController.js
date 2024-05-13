User = require('../../models/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

/**
 * Register
 */
exports.register = function(req,res){
    var formdata = req.body
    User.findOne({email:formdata.email})
    .then(data=>{
          if(data==null){
              if(req.body.password!=undefined && req.body.password!=null&& req.body.password!=""){ 
                var userobj  = new User();
                userobj.name = req.body.name
                userobj.email = req.body.email
                
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(req.body.password, salt);
                userobj.password = hash
                userobj.contact = req.body.contact
                userobj.address = req.body.address
                userobj.user_type = req.body.user_type
                userobj.save()
                .then(data=>{
                    res.status(200).send({success:true,message:"Registered successfully",status:200,user:data})
                })
            }
            else{
                res.status(409).send({success:false,message:"Please Enter password",status:400,tech:[]})
            }
          }else{
            res.status(409).send({success:false,message:"Already Exist Email",status:409,tech:[]})
          }        
        
    })
}

/**
 * Login
 */
 exports.login = function(req,res){
    // console.log(req.body.email)
    User.findOne({email:req.body.email}).exec()
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