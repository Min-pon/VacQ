const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mincu104",
  database: "vacCenter",
});

module.exports = connection;
