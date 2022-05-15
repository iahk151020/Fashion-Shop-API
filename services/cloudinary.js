const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'duumrsxxo',
    api_key: '719734834233173',
    api_secret: '3lBW1i9yJ-48rOMTdp_WlUsfPzM',
    secure: true
});

module.exports = cloudinary;