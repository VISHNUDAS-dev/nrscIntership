const express=require('express');
const bodyParser=require('body-parser');
const path= require('path');
const gtts=require('gtts');
const mysql=require('mysql');
const alert=require('alert');
const multer=require('multer');



const app=express();

const PORT = process.env.PORT || 3000


//set view engine
app.set("view engine","ejs");

//load assets
app.use('/assets', express.static('assets'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


//middlewares
app.use('/',require('./server/routes/homeroute'));
app.use('/createvideo',require('./server/routes/homeroute'));
app.use('/texttspeech',require('./server/routes/homeroute'));
app.use('/insertcategory',require('./server/routes/homeroute'));
app.use('/makevideo',require('./server/routes/homeroute'));
app.use('/uploadingimage',require('./server/routes/homeroute'));
app.use('/getcategory',require('./server/routes/homeroute'));
app.use('/insertfilename',require('./server/routes/homeroute'));
app.use('/checkfilename',require('./server/routes/homeroute'));
app.use('/mergevideo',require('./server/routes/homeroute'));
app.use('/download',require('./server/routes/homeroute'));
app.use('/checkvideoavailability',require('./server/routes/homeroute'));
app.use('/quickdownload',require('./server/routes/homeroute'));



    
app.listen(PORT,() => {
    console.log('server is running on http://localhost:3000')
});


