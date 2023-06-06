const mysql = require('mysql2');

const connection  = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mydb",
    password: "12345678"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
  });

  module.exports = connection ;