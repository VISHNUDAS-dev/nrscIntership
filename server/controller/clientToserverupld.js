const multer=require('multer');

exports.imageuploading=(req,res)=>{


    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './uploads/images/')
        },
        filename: function (req, file, cb) {
          cb(null,file.originalname)
        }
      })
       
      var upload = multer({ storage: storage }).array('myfile',5);
      
      upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          console.log("err",err)
        } else if (err) {
          // An unknown error occurred when uploading.
          console.log("unknownerror");
        }
        console.log("image uploaded successfully");
        // Everything went fine.
      })
 
}