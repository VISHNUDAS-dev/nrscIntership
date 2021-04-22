var videoshow=require('videoshow');
//const { patch } = require('../routes/homeroute');
const fs=require('fs');
const bodyParser=require('body-parser');
const path= require('path');

exports.imtovi=(req,res)=>{

    var appDir = path.dirname(require.main.filename);

    //getting text data from ajax request createvideo
    const parent_folder=req.body.type;
    const child_folder=req.body.filename;
    console.log(parent_folder);
    console.log(child_folder);
    //data aquired------------


    //setting file names for audio and video
    const videoname=child_folder+'.mp4';
    const bgm=child_folder+'.mp3';
    //values set-----------------


    const audiofilename=appDir+'/uploads/audio/'+bgm;
    
    let img=[];
    let time=4;
    let directory_name='./uploads/images/'+parent_folder+'/'+child_folder+'/';
    let ddrk='./uploads/videos/';
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
        //let savedir=ddrk+"nrsc.mp4";
        //console.log(savedir);
        res.download(output);
        
    })
    
}