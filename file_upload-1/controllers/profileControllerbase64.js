// require router
const router = require('express').Router();
const bodyParser = require('body-parser');
const multer = require('multer');

//require model 
const profileModel = require('../models/profileBase64');

//middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));


// create storage engine
// const storage = multer.diskStorage({
//     destination:"./public/upload/",
//     filename:(req,file,callback)=>{callback(null,file.originalname)}
// })
var storage = multer.memoryStorage()
const upload = multer({storage:storage})

router.post('/create',upload.single('img'),(req,res)=>{
    const input = req.body
    var file_data= req.file.buffer
    console.log(file_data)
    var base64Image = file_data.toString('base64');
    const myDoc = new profileModel({
        firstName:input.firstName,
        lastName: input.lastName,
        city:input.city,
        img_name:req.file.name,
        img_file: req.file.buffer.toString('base64')
        
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

router.get('/viewAll',(req,res)=>{
    profileModel.find()
                        .then((data) => {res.status(200).json({
                            error:false,
                            result:data,
                            message:"fetching data successfully"
                        })})
                        .catch((err) => {res.status(400).json({
                            error:true,
                            message:"something went wrong in datafetching base64 data" + err
                        })})
})
module.exports = router;