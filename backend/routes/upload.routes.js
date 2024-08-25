const express = require('express');
const router  = express.Router();

const uploadController = require('../controller/upload.controller');
const uploadMiddleware = require('../middleware/upload.middleware');

router.get('/', (req,res)=>{
    res.render('upload');
});

router.post('/upload', uploadMiddleware.single('file'), uploadController.upload_file);

module.exports =  router;