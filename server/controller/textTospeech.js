const gtts=require('gtts');
const bodyParser=require('body-parser');
const path= require('path');

exports.textTospeech=(req,res)=>{
    var appDir = path.dirname(require.main.filename);
    const flname=req.body.filename;
    const text=req.body.inputdata;
    const language=req.body.lan;
    console.log(language);
    const finalfilename=appDir+'/uploads/audio/'+flname+'.mp3';
    console.log(finalfilename);
    var speech = new gtts(text, language);
    speech.save(finalfilename, function (err, result) {
    if(err) { throw new Error(err) }
    console.log('Success! Open file /tmp/hello.mp3 to hear result.');
    res.end();
    
    });

};