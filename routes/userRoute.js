const express = require('express');
const userRouter = express.Router();

const User = require('../models/userModel')

userRouter.post('/newuser', (req, res, next)=>{
    let name = req.body.username
    let email = req.body.email

    let newUser = new User({
        username:name,
        email:email
    })
    newUser.save()
    .then((resp)=>{
        res.send({message:"User Added Successfully!"})
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})

userRouter.get('/all', (req, res, next)=>{
    User.find()
    .then((resp)=>{
        res.send(resp)
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})

userRouter.post('/userlogin', (req, res, next)=>{
    let name = req.body.username
    let email = req.body.email
    User.findOne({
        username:name,
        email:email
    })
    .then(user=>{
        if(user){
        if (email==user.email){
            res.send({message:"Login Successfull!"})
        }
        else {
            res.send({message:"failed"})
        }}
    
    else{
        res.send({message:"failed"})
    }
    })
    .catch((err)=>{res.send({message:"An Error Occured!"})})
})

userRouter.delete('/deleteuser', (req, res, next)=>{
    let name = req.body.username
    let email = req.body.email
    User.findOneAndRemove({
        username:name,
        email:email
    })
    .then((resp)=>{
        res.send({message:"User Deleted Successfully!"})
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})

module.exports = userRouter