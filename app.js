const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/BlogWebsite', {useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection
db.on('error', ()=>{
    console.log('error in connecting database')
})
db.once('open', ()=>{
    console.log('Database Connection Established!')
})


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
    origin:['http://localhost:4200', 'http://127.0.0.1:4200'],
    credentials:true

}))

const userRouter = require('../backend/routes/userRoute')
const blogRouter = require('../backend/routes/blogRouter')


app.use('/user', userRouter)
app.use('/blog', blogRouter)

const server = app.listen(3000, ()=>{
    console.log('Server Listening to port 3000!')
})