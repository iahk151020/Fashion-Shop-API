const multer = require('multer');
const path = require('path');

const multerConfig = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (ext != ".jpg" && ext != ".jpeg" && ext != ".png" && ext != ".gif") {
            cb(new Error('Only images are allowed'), false);
            return;
        }
        cb(null, true);
    }
});

module.exports = multerConfig; 