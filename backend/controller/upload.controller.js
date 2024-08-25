const cloudinary  = require("../config/cloudinary.config")
const cloudinaryUtils = require('../utils/cloudinary.utils');

exports.getUploadFile = (req,res)=>{
    res.render('upload');
}

exports.upload_file = async (req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const uploadResult = await cloudinaryUtils.uploadToCloudinary(req.file);
        console.log(uploadResult.publicId+" "+ uploadResult.url);
        res.render('upload' , {
            message:"file uploaded",
            fileUrl: result.secure_url,
        });
    } catch (error) {
        res.render('upload', { error: 'Error uploading file' });
        console.log(error)
    }
}

