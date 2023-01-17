const express=require('express')
const router=express.Router();
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    gender: String,
    dob: String,
    email: String,
    branch: String,
    sem: String,
})

const Users = mongoose.model("Users",userSchema)

router.get('/',(req,res)=>{
    res.render('update');
})

var toUpdate;
router.post('/',(req,res)=>{
    if(!req.body.sem){
        const {name,password,email} =req.body;
        Users.findOne({email: email, password:password},(err,user)=>{
            if(user){
                res.send({message: "Verified"})
                toUpdate=req.body;
            }
            else{
                res.send({message: "Invalid Inputs"})
            }
        })
    }
    else{
        const {name,password,gender,dob,email,branch,sem} =req.body;
        Users.replaceOne({email: toUpdate.email, password:toUpdate.password},req.body,null,err=>{
            if(err){
                res.send(err);
            }
            else{
                res.send({message:'Information Updated'})
            }
        })
    }
})

module.exports = router;