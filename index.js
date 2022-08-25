import mysql from "mysql2";  // here i am inporting mysql2




// Below i am creating connection with database

var con = mysql.createConnection({
    host: "localhost",
    user: "suraj",
    password: "Suraj@786",
    insecureAuth : true,
    database: "mydb"
  });














// here i am creating database
  
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   con.query("CREATE DATABASE surajDb", function (err, result) {
  //     if (err) throw err;
  //     console.log("Database created");
  //   });
  // });



  // Creating Table

  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "CREATE TABLE customer (name VARCHAR(255), address VARCHAR(255))";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table created");
  //   });
  // });



  // Inserting value


  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "INSERT INTO customers (name, address) VALUES ?";
  //   var values =[
  //     ['name', 'suraj'],
  //     ['name', 'singh'],
  //     ['name', 'sultan']
  //   ];
    
  //   con.query(sql, [values], function (err, result) {
  //     if (err) throw err;
  //     console.log("Number of records inserted: " + result.affectedRows);
  //   });
  // });




  // Getting the value 

  // con.connect(function(err) {
  //   if (err) throw err;
  //   con.query("SELECT * FROM customers", function (err, result, fields) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // });