require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 4000;
const database = require('./database');
const profileController = require('./controllers/profileController');
const profileController2 = require('./controllers/profileControllerbase64')
const path = require('path');
const fs = require('fs')

// middleware
app.use(morgan('dev'));
app.use(cors());

 //for get image path middleware
app.use('/public',express.static(path.join(__dirname,'public')))

//routes- normal file uploading
app.use('/api/profile',profileController);
// route for base 64 file uploading
app.use('/api/profilee',profileController2);

//Routes
app.all('/',(req,res)=>{
    res.json({
        status:true,
        message:"index Page route working"
     })
})
//latest
//server start
app.listen(port,()=>console.log('Server running at port :'+port));