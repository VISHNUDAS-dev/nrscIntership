const fs=require('fs');
const bodyParser=require('body-parser');
exports.checkforvideofile=(req,res)=>{
    const videoname=req.body.video_name;
    const path='./uploads/videos/'+videoname+'.mp4';
    console.log(videoname);
    try {
        if (fs.existsSync(path)) {
          //file exists
            res.send("0");
        }
        else{
            res.send("1");
        }
      } catch(err) {
        console.error(err)
      }
}

exports.quickdownloading=(req,res)=>{
    
    const vname=req.body.videofname;
    console.log(vname);
    res.download('./uploads/videos/'+vname+'.mp4');
}