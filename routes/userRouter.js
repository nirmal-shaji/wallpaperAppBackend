const express = require('express')
const router = express.Router()
const user =require('../controller/userController')


router.get('/',user.getImage)

module.exports=router