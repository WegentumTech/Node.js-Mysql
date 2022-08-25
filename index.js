import con from "./initDB.js";




// con.connect(function(err) {
//   if (err) console.log(err)
//   else{
//     console.log("Connected!");

//   }
// });







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
  //   var sql = "CREATE TABLE suraj (name VARCHAR(255), address VARCHAR(255))";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table created");
  //   });
  // });



  // Inserting value


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO suraj (name, address,some,some) VALUES ?";
    var values =[
      ['name', 'suraj','something','some'],
      ['name', 'singh','something','some'],
      ['name', 'sultan','something','some']
    ];
    
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });




  // Getting the value 

  // con.connect(function(err) {
  //   if (err) throw err;
  //   con.query("SELECT * FROM customers", function (err, result, fields) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // });