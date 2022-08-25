import mysql from "mysql2";



// Below i am connecting to server



var con = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6515049",
  password: "jNP4mXTvM1",
  port:"3306",
  database: "sql6515049"
});

export default con;
