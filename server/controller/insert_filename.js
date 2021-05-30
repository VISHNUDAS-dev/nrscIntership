//inserting validated file name into database for further validation
const mysql=require('mysql');
const config=require('../database/dbconfig/config');


exports.insertfilestore=async(req,res)=>{
    

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
    var query = "INSERT INTO filestore(filename)VALUES('"+file+"')";
    conn.query(query, function(err, rows, fields){
        if(!err){
            console.log(rows);
            result = rows;
            res.end();
        }
        else{
            console.log("category already exists.");
            //throw err;
        }
        conn.end();
    })


}