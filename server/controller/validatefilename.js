//validating the availability of the file name
const mysql=require('mysql');
const config=require('../database/dbconfig/config');


exports.checkavailability=async(req,res)=>{
    

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
    const file=req.body.filename;
    console.log("g"+file);
    var query ="SELECT * FROM filestore WHERE filename = '"+file+"'";
    conn.query(query, function(err, rows, fields){
        console.log(rows);
        if(!err){
            if(rows.length>0){
                res.send("0");
            }
            else{
                res.send("1");
            }
            
            
        }
        else{
            console.log("category already exists.");
            //throw err;
        }
        conn.end();
    })


}