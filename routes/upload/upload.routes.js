const router = require('express').Router();
const cloudinary = require('../../services/cloudinary');
const upload = require('../../services/multer');

router.post('/image', upload.single('image'), async (req, res) => {
    try{
        const result = await cloudinary.uploader.upload(req.file.path);
        res.json(result);
    } catch (err){
        console.log(err);
    }
} )

module.exports = router;