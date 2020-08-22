const express = require('express');
const blogRouter = express.Router();
const date = require('date')


const Blog = require('../models/blogModel')

blogRouter.get('/all', (req, res, next)=>{
    Blog.find()
    .then((resp)=>{
        res.send(resp)
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})

blogRouter.post('/createblog', (req, res, next)=>{
    let title = req.body.title
    let category = req.body.category
    let content = req.body.content
    let user = req.body.user
    let date_curr = new Date()
    let month  = date_curr.getMonth()+1
    let newBlog = new Blog({
        title : title,
        category : category,
        content : content,
        user : user,
        upvote : 0,
        currentdate : date_curr.getDate()+'/'+month+'/'+date_curr.getFullYear()
    })
    newBlog.save()
    .then((resp)=>{
        res.send({message:"New Blog Added Successfully!"})
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})

blogRouter.patch('/upvote/:blogid', (req, res, next)=>{
    let blogid = req.params.blogid
    Blog.findByIdAndUpdate(blogid, {
        $set:req.body
    })
    .then(()=>{
        res.send({message:"Blog Upvoted Successfully!"})})
    .catch (()=>{
        res.send({message:"An Error Occured!"})
    })
        
    

})

blogRouter.post('/searchbycategory', (req, res, next)=>{
    let category = req.body.category
    Blog.find({
        category : category
    })
    .then((resp)=>{
        res.send(resp)
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })

})

blogRouter.delete('/deleteblog', (req, res, next)=>{
    let title = req.body.title
    let category = req.body.category
    Blog.findOneAndRemove({
        title : title,
        category : category
    })
    .then((resp)=>{
        res.send({message:"Blog Removed Successfully!"})
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})
blogRouter.delete('/deleteid/:blogid', (req, res, next)=>{
    Blog.findByIdAndRemove({
        _id:req.params.blogid
    })
    .then((resp)=>{
        res.send({message:"Blog Removed Successfully!"})
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})

blogRouter.post('/searchbyuser', (req, res, next)=>{
    let name = req.body.user
    Blog.find({
        user : name
    })
    .then((resp)=>{
        res.send(resp)
    })
    .catch((err)=>{
        res.send({message:"An Error Occured!"})
    })
})

module.exports = blogRouter