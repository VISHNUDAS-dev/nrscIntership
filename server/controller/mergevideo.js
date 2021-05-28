const fs=require('fs');
const bodyParser=require('body-parser');
const path= require('path');
const { exec } = require('child_process');
var appDir = path.dirname(require.main.filename);


exports.merger=(req,res)=>{
    var list = ""
    console.log("hi there.");
    const name_of_file=req.body.filename;
    console.log(name_of_file);
    
    //listFilePath:write stream in the directory
    var listFilePath = appDir+'/tmp/'+name_of_file+'/' + Date.now() + 'list.txt';
    var outputFilePath = 'uploads/videos/'+ name_of_file+'.mp4';
    //creating list of video file names
    var videodir='./tmp/'+name_of_file+'/';
    var nameoffiles = fs.readdirSync(videodir);
    console.log("\nFilenames in directory:");
    nameoffiles.forEach((file) => {
        console.log("File:", file);
        list += `file ${file}`;
        list += "\n";    
    });
    var writeStream =  fs.createWriteStream(listFilePath);
    writeStream.write(list);
    writeStream.end();


    //merging videos
    exec(`ffmpeg -safe 0 -f concat -i ${listFilePath} -c copy ${outputFilePath}`, (error, stdout, stderr) => {
          
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        else{
            console.log("videos are successfully merged");
        
        }
        
    })

}