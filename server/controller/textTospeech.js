const gtts=require('gtts');

exports.textTospeech=(req,res)=>{
    const text=req.body.text;

    var speech = new gtts(text, 'en');
    speech.save('test1.mp3', function (err, result) {
    if(err) { throw new Error(err) }
    console.log('Success! Open file /tmp/hello.mp3 to hear result.');
    //res.end();
    
    });

};