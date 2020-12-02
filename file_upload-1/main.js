require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT;
const database = require('./database');
const profileController = require('./controllers/profileController');

// middleware
app.use(morgan('dev'));
app.use(cors());

//routes
app.use('/api/profile',profileController)

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