const multer=require('multer');
const bodyParser=require('body-parser');
const fs=require('fs');


exports.imageuploading=(req,res)=>{



  
    
    //const fname=Storage.Session.get('FNAME');
    //const dydir='./uploads/images/'+cat+'/'+fname+'/';
    //console.log(cat);
    //if(!fs.existsSync(dydir)){
      //fs.mkdirSync(dydir);
    //}


    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          const fname=req.body.file_folder;
          const vcat=req.body.vcategory;
          console.log(fname);
          console.log(vcat);
          const badir='./uploads/images/'+vcat+'/';
          if(!fs.existsSync(badir)){
            fs.mkdirSync(badir);}
            
          const dydir=badir+'/'+fname+'/';
          console.log(dydir);
          if(!fs.existsSync(dydir)){
            fs.mkdirSync(dydir);}
          cb(null, dydir)
        },
        filename: function (req, file, cb) {
          cb(null,file.originalname)
        }
      })
       
      var upload = multer({ storage: storage }).array('myfile',25);
      
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