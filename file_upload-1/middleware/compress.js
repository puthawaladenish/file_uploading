// info : middleware that take field name,
//         multer buffer it,
//         jimp can take arguments as file url, file, and buffer file --- refer to official documentation
//        then jimp take file buffer as a arguments (jimp file return many function kindly see in variable using debug mode)
//         and then again convert it to base64 string.
const jimp = require('jimp');
const multer = require('multer');

// manage storage engine
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

async function compress(req, res, next) {
    try {
        return upload.single('img')(req, res, async() => {
            const tempFile = req.file.buffer
            const fileName = req.file.originalname
            const comp = jimp.read(tempFile)
                .then(file => {
                    return file
                        .resize(256, 256) // resize
                        .quality(60) // set JPEG quality
                        .greyscale() // set greyscale
                        .write(`${fileName}`); // save
                })
                const pros = await  comp
                req.this_file = await pros.getBase64Async(jimp.AUTO)
                next()
            })
    } catch (error) {
        if (error) {
            res.json({
                status: false,
                message: "something went wrong in file uploading middleware",
                result: error.message
            })
        }
        next()
    }
}

module.exports = compress
