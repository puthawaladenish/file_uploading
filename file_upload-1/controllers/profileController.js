//init code 
const fs = require('fs')
const router = require('express').Router();
const bodyParser = require('body-parser');
const profile = require('../models/profile');

//========normal image uploading=======
const multer = require('multer');
 
//storeage engine
const storage = multer.diskStorage({
    destination:'./public/upload/',
    filename:(req,file,callback)=>{callback(null,file.originalname)}
})
const upload = multer({storage : storage});

 //middleware
 router.use(bodyParser.json());
 router.use(bodyParser.urlencoded({extended:false}));
 

 
 //router
//  router.all('/',(req,res)=>{
//      res.json({
//          status:true,
//          message:'user controller default route'
//      });
//  });


 //create user 
 router.post('/create',upload.single('photo'),(req,res)=>{
     const input = req.body;
     console.log(req.file)
     const myDocument = new profile({
         firstName : input.firstName,
         lastName:input.lastName,
         gender:input.gender,
         address:input.address,
         photo:req.file.path
     })
     myDocument.save ()
        .then(items =>{
            res.status(200).json({
                Error:false,
                data:items
            })
        })
        .catch(err => {
            res.send(400)
                .json({
                Error: "Something went wrong in user creating " + err
            })
        })    
 })

 //get all data api
  
 router.get('/viewAll',(req,res) => {
     profile.find((error,result) => {
            if(error){
                res.json({
                    status:false,
                    message:'user read failed error',
                    error:error
                })
            }
            //check data
            if (!result) {
                res.json({
                    status:false,
                    message:'not user found'
                })
            }
            res.json({
                status:false,
                message:'task success',
                result:result
            })
        }
    )
 })


 module.exports = router;