const cloudinary = require('../config/cloudinary.config');

exports.uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.path, {
            folder: 'uploads',
            resource_type: 'auto'
        });
        return {
            url: result.secure_url,
            publicId: result.public_id
        };
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw new Error('Failed to upload file to Cloudinary');
    }
};

exports.deleteFromCloudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.error('Error deleting from Cloudinary:', error);
        throw new Error('Failed to delete file from Cloudinary');
    }
};

exports.generateThumbnail = async (publicId, width, height) => {
    try {
        const thumbnailUrl = cloudinary.url(publicId, {
            width: width,
            height: height,
            crop: 'fill'
        });
        return thumbnailUrl;
    } catch (error) {
        console.error('Error generating thumbnail:', error);
        throw new Error('Failed to generate thumbnail');
    }
};