const express=require('express');
const bodyParser=require('body-parser');
const path= require('path');

const gtts=require('gtts');


const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



//set view engine
app.set("view engine","ejs");

//load assets
app.use('/assets', express.static('assets'));


//middlewares
app.get('/',function(req,res){
    res.render('nrscavg_mainpage');
});


    
app.post('/a',function(req,res){
    const text=req.body.text;

    var speech = new gtts(text, 'en');
    speech.save('test1.mp3', function (err, result) {
    if(err) { throw new Error(err) }
    console.log('Success! Open file /tmp/hello.mp3 to hear result.');
    });

});



app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')});

