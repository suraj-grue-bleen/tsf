import { existsSync, mkdirSync } from "fs";
import { diskStorage } from "multer";
import { extname } from "path";

const multerOptions = {
    storage: diskStorage({
        destination: (req, file, cb) => {
            const uploadDir = '../public/uploads/';
            if(!existsSync(uploadDir)){
                mkdirSync(uploadDir, {recursive:true});
            }
            cb(null, uploadDir);
        },
        filename:(req, file, callback) => {
            const name = file.originalname.split('.')[0];
            const fileExtName = extname(file.originalname);
            const randomName = Array(4)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))    
            .join('');
            callback(null, `${name}-${randomName}${fileExtName}`);
        }
    
    }),
    fileFilter:(req, file, callback) => {
        // if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/)) {
        //     return callback(new Error('Only image files are allowed!'), false);
        // }
        // callback(null, true);

        if(file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            callback(null, true);
        }else {
            callback(new Error('Unsupported file type'), false);
        }
    },
    limits: {
        files:1,
        fileSize: (1024 * 1024) /2,     //500kb
    }
};

export default multerOptions;