const mysql = require("mysql");
require("dotenv").config();
// const dbConfig = require('./dbconfig.json');

var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// var con = mysql.createConnection(dbConfig);

con.connect(function(err) {
    if(err) throw err;
    console.log("Database Connected!");
    // var sQuery = "SELECT * FROM customers";
    // var sQuery = "CREATE DATABASE NODEPOTFOLIO";
    // var sQuery = "CREATE TABLE customers (name varchar(128), addr varchar(256))";
    // var sQuery = "INSERT INTO customers (name, addr) VALUES ('Adams Dole', 'Los Agenless')";
    // var sQuery = "SELECT * FROM customers Where name='James Hetfield'";
    // var sQuery = "SELECT * FROM customers ORDER BY addr";
    // var sQuery = "DELETE FROM customers WHERE name = 'Adams Dole'";
    // var sQuery = "UPDATE customers SET addr='Missisfe Liver' WHERE name='Kirk Hammit'";
    var sQuery = "DROP TABLE customers";

    con.query(sQuery, (err, result, fields) => {
        if(err) throw err;

        // console.log("Database NODEPOTFOLIO Create Success!!!");
        console.log(result);
        // console.log(fields);
    });
});
con.end();