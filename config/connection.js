// Set up MySQL connection.
const mysql = require("mysql");

let connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "", // Enter your password here
  database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // enter your localhost pw here
    database: 'burgers_db'
  });
};

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;