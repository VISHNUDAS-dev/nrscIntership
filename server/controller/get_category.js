const mysql=require('mysql');
const config=require('../database/dbconfig/config');


exports.getcat=async(req,res)=>{
    

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
    var query = "SELECT DISTINCT section FROM category";
    conn.query(query, function(err, rows, fields){
        if(!err){
            console.log(rows);
            res.send(rows);
           
            
        }
        else{
            console.log("category already exists.");
            //throw err;
        }
        conn.end();
    })


   

}