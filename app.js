const express=require('express');
const bodyParser=require('body-parser');
const path= require('path');
const gtts=require('gtts');
const mysql=require('mysql');
const alert=require('alert');


const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



//set view engine
app.set("view engine","ejs");

//load assets
app.use('/assets', express.static('assets'));


//middlewares
app.use('/',require('./server/routes/homeroute'));
app.use('uploadimage',require('./server/routes/homeroute'));

app.use('/a',require('./server/routes/homeroute'));
app.use('/b',require('./server/routes/homeroute'));
app.use('/mv',require('./server/routes/homeroute'));

    

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')});

