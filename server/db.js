const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect((err, client, done) => {
  if (err) {
    console.error("Database connection error in db.js:", err.stack);
    return;
  }
  console.log("Database connection pool established.");
  done();
});

module.exports = pool;
