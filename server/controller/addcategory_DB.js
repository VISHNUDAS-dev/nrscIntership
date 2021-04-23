//user register the category and file name
//first -- register the category to category table
const mysql=require('mysql');
const config=require('../database/dbconfig/config');


exports.checkdb=async(req,res)=>{
    

    var conn = mysql.createConnection({
        host : config.host,
        port : config.port,
        user : config.user,
        password : config.password,
        database : config.database
    }); 
    await conn.connect(function(err) {
      if (err) throw err;
      console.log('Database is connected successfully !');
    });
    const categoryname=req.body.cat;
    console.log("g"+categoryname);
    var query = "INSERT INTO category(section)VALUES('"+categoryname+"')";
    conn.query(query, function(err, rows, fields){
        if(!err){
            console.log(rows);
            result = rows;
        }
        else{
            console.log("category already exists.");
            //throw err;
        }
        conn.end();
    })


   

}









    //connecting to database
    //await connectdb();
    
    
    


    //aler('succeed');



