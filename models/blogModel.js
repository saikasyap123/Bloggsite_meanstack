const mongoose = require('mongoose')
const { text } = require('body-parser')
const Schema = mongoose.Schema
const BlogSchema = new Schema({
    title :{
        type:String
    },
    category : {
        type:String
    },
    content : {
        type:String
    }, 
    user : {
        type:String
    },
    upvote : {
        type:Number
    },
    currentdate : {
        type: String
    }
})

const BlogModel = mongoose.model('BlogModel', BlogSchema)
module.exports = BlogModel