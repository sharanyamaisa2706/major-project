const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET_KEY
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wanderlust_DEV',
    allowed_formats: ['jpeg', 'png', 'jpg', 'webp'],  // ✅ Add 'webp'
    public_id: (req, file) => file.originalname.split('.')[0] + '-' + Date.now()
  }
});

module.exports = {
  cloudinary,
  storage
};
