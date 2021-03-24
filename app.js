const express=require('express');
const path= require('path');

const app=express();


//set view engine
app.set("view engine","ejs");

//load assets
app.use('/assets', express.static('assets'));

app.get('/',function(req,res){
    res.render('nrscavg_mainpage');
});

app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')});

