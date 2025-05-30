const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + " - " + file.originalname)
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    // mime multipurpose internal mail extensions  - რა ტიპის მონაცემებია აღწერილი 
    const mime = allowedTypes.test(file.mimetype);
    if( ext && mime ){
        cb(null, true);
    } else{
        cb(new Error("only images with extension jpg, png, jpeg are allowed"))
    }
};

module.exports = multer({storage, fileFilter});