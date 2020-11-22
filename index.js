
// Add required packages
const express = require("express");
const app = express();



// Set up EJS
app.set("view engine", "ejs");


// Start listener
app.listen(process.env.PORT || 3000, () => {
    console.log("Server started (http://localhost:3000/) !");
});

// Setup routes
app.get("/", (req, res) => {
    //res.send ("Hello world...");
    const sql = "SELECT * FROM PRODUCT ORDER BY PROD_ID";
    pool.query(sql, [], (err, result) => {
        var message = "";
        var model = {};
        if(err) {
            message = `Error - ${err.message}`;
        } else {
            message = "success";
            model = result.rows;
        };
        res.render("index", {
            message: message,
            model : model
        });
    });
});

// Add database package and connection string (can remove ssl)
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL= "postgres://vwkljkaetbgmnb:d9df2dff2d66995c78d0bc8ef4ea86635bcead24ed61c83308e1706a3b8cfb3c@ec2-54-85-13-135.compute-1.amazonaws.com:5432/d9qenh3u5baut5",
  ssl: {
    rejectUnauthorized: false
  }
});




