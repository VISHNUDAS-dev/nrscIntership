var videoshow=require('videoshow');
//const { patch } = require('../routes/homeroute');
const fs=require('fs');
const bodyParser=require('body-parser');
const path= require('path');
var appDir = path.dirname(require.main.filename);

exports.imtovi=(req,res)=>{
    console.log("inside function-----");

    

    //getting text data from ajax request createvideo
    var parent_folder=req.body.type;
    var child_folder=req.body.filename;
    console.log(parent_folder);
    console.log(child_folder);
    //data aquired------------


    //setting file names for audio and video
    var videoname=Date.now()+'.mp4';
    var bgm=child_folder+'.mp3';
    //values set-----------------


    var audiofilename=appDir+'/uploads/audio/'+bgm;
    
    var img=[];
    var time=req.body.fps;
    var directory_name='./uploads/images/'+parent_folder+'/'+child_folder+'/';
    var ddrk='./tmp/'+child_folder+'/';
    if(!fs.existsSync(ddrk)){
        fs.mkdirSync(ddrk);}
    let filenames = fs.readdirSync(directory_name);
    console.log("\nFilenames in directory:");
    filenames.forEach((file) => {
        console.log("File:", file);
        
        img.push('./uploads/images/'+parent_folder+'/'+child_folder+'/'+file);
        console.log(img);
    });



    
    var videooption={
        fps: 25,
        loop: time, // seconds
        transition: true,
        transitionDuration: 1,
        captionDelay: 1000,
        useSubRipSubtitles: false,
        subtitleStyle: null,
        videoBitrate: 1024,
        videoCodec: 'libx264',
        size: '640x?',
        audioBitrate: '128k',
        audioChannels: 2,
        format: 'mp4'
    };

    //call video
    videoshow(img,videooption)
    .audio(audiofilename)
    .save(ddrk+videoname)
    .on('start',function(command){
        console.log("covertion started"+command)

    })
    .on('error',function(err,stdout,stderr){
        console.log("some error occured"+err)

    })
    .on('end',function(output){
        console.log("covertion completed"+output);
        res.send("success");
        img=[];
        var directory = directory_name;
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            for (var file of files) {
                fs.unlink(path.join(directory, file), err => {
                    if (err) throw err;
                    });
            }
        });
    })

}

exports.downloading=(req,res)=>{
    
    const name=req.body.filename;
    //console.log(child_folder);
    res.download('./uploads/videos/'+name+'.mp4');
}

