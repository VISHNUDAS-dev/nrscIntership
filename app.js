const express=require('express');
const bodyParser=require('body-parser');
const path= require('path');
const gtts=require('gtts');
const mysql=require('mysql');
const alert=require('alert');
const multer=require('multer');



const app=express();




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
app.use('/b',require('./server/routes/homeroute'));
app.use('/makevideo',require('./server/routes/homeroute'));
app.use('/uploadingimage',require('./server/routes/homeroute'));
app.use('/getcategory',require('./server/routes/homeroute'));


    

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')});

