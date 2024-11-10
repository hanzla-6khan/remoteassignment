require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1", // instead of ::1
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database.");
});

module.exports = db;
