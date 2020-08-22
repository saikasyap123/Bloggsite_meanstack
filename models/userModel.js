const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username : {
        type: String
    },
    email : {
        type : String
    }
})

const userModel = mongoose.model('UserModel', userSchema)

module.exports = userModel