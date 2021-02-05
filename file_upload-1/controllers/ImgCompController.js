const router = require('express').Router();
const bodyParser = require('body-parser');
const profileModel = require('../models/profileBase64');
const compress = require('../middleware/compress')

//middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.post('/comImg',compress,(req,res)=>{
    const input = req.body
    // var file_data= req.file.buffer
    console.log(req.this_file)
    // var base64Image = file_data.toString('base64');
    const myDoc = new profileModel({
        firstName:input.firstName,
        lastName: input.lastName,
        city:input.city,
        // img_name:req.file.originalname,
        img_file: req.this_file.toString('base64')
        
    })
    myDoc.save()
                .then((items)=>{
                    res.status(200).json({
                        error:false,
                        message:"data successfully stored",
                        data:items
                    })
                })
                .catch(err => { 
                    res.status(400).json({
                        Error:true,
                        message: "somethig went wrong in saving base64 file form" + err
                    })
                })
})

module.exports = router;