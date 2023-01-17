const { application } = require('express');
const express=require('express')
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

const User = mongoose.model("User",userSchema)

const router=express.Router();

router.get('/',(req,res)=>{
    res.render('new_user');
})

router.post('/',(req,res)=>{
    const {name,password,gender,dob,email,branch,sem} =req.body;
    User.findOne({email: email},(err,user)=>{
        if(user){
            res.send({message: "User already exists"})
        }
        else{
            const user= new User({name,password,gender,dob,email,branch,sem})
            user.save(err=>{
                if(err){
                    res.send(err);
                }else{
                    res.send({message : "Sucessfully Registered"})
                }
            })
        }
    })
})

module.exports = router;