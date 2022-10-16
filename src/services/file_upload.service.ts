import multer from 'multer';

const storage_policy = multer.diskStorage({
    destination: function (req, file, cb) {
        // if(file.mimetype.includes('png')){
        //     cb(null, '/images/')
        // } else if(file.mimetype.includes('pdf')){
        //     cb(null, '/files')
        // } else {
        //    cb(null, '/uploads')
        // }
        cb(null, 'uploaded_files/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '_' + uniqueSuffix + '.' + file.mimetype.split('/')[1])
    }
});

export const upload_service = multer({
    storage: storage_policy,
    limits: {
        fileSize: (1024**2) * 2 // limiting the size ( ** = square )
    },
    fileFilter: function (req, file, cb) {
        // mimetype if the extension of file.
        // file.mimetype = application/pdf
        // ['application', 'pdf']
        
        // file.mimetype = image/png
        // file.mimetype = image/jpeg
        if(file.mimetype.includes('pdf')){
            cb(null, true)
        } else {
            cb(new Error('invalid file type'));
        }
    }
});