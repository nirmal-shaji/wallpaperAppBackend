const express = require('express')
const router = express.Router()
const admin = require('../controller/adminController')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        ;
        cb(null,uniqueSuffix + '-' +file.originalname   )
    }
});

const upload = multer({ storage: storage });



router.get('/addImage',admin.dashboard)
router.post('/addImage', upload.array('photos', 5),admin.addImage)


module.exports=router