// init code
const mongoose = require('mongoose');
const moment = require('moment');


//user schema
const profileSchema = mongoose.Schema({
    firstName: {
        type : String,require:true
    },
    lastName:{
        type : String,require:true
    },
    gender:{
        type:String, require:true
    },
    address:{
        type:String, require:true
    },
    photo :{
        type:String
    }
    // entry_added:{
    //     type:String, default: moment().format('DD-MM-YYYY')
    // }
});

module.exports = mongoose.model('profile', profileSchema);


