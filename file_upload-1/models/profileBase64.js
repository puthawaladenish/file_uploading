const mongoose = require('mongoose');



// profile schema for base64 encoding with extra field

const profile_Schema = mongoose.Schema({
    firstName: {
        type:String
    },
    lastName: {
        type:String
    },
    city: {
        type:String
    },
    img_name: {
            type:String
        },
    img_file:{
            type:String
        }
    })

module.exports = mongoose.model('base64Profile',profile_Schema)