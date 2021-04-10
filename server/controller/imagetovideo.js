var videoshow=require('videoshow');
const { patch } = require('../routes/homeroute');
const fs=require('fs');

exports. imtovi=(req,res)=>{
    
    let img=[];
    let directory_name='./uploads/images/';
    let ddrk='./uploads/videos/';
    let filenames = fs.readdirSync(directory_name);
    console.log("\nFilenames in directory:");
    filenames.forEach((file) => {
        console.log("File:", file);
        
        img.push('./uploads/images/'+file);
        console.log(img);
    });



    var images=[
        {
            path:'./assets/img/img1.jpg'
        },
        {
            path:'./assets/img/img2.jpg'
        },
        {
            path:'./assets/img/img3.jpg'
        }

    ]
    var videooption={
        fps: 25,
        loop: 5, // seconds
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
    .audio("test1.mp3")
    .save(ddrk+"output.mp4")
    .on('start',function(command){
        console.log("covertion started"+command)

    })
    .on('error',function(err,stdout,stderr){
        console.log("some error occured"+err)

    })
    .on('end',function(output){
        console.log("covertion completed"+output);
        let savedir=ddrk+"output.mp4";
        console.log(savedir);
        res.download(savedir);

    })
    
}