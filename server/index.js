require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./db");
const catRoutes = require("./routes/catRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

pool.connect((err, client, done) => {
  if (err) {
    console.error("Database connection error:", err.stack);
    return;
  }
  console.log("Successfully connected to NeonDB pool.");
  done();
});

app.get("/", (req, res) => {
  res.send("Catyaw Backend API is running!");
});

app.use("/api", catRoutes);

app.listen(PORT, () => {
  console.log(`Catyaw backend server running on port ${PORT}`);
});
