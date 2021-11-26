const express = require('express');
const path = require('path');
const mysql = require('./dbcon');

const app = express();

const host = '127.0.0.1';
const port = 3000;

// mysql.getConnection((err, connection) => {
//     if(!err) {
//         // connection.query("Select");
//         console.log("DB Connetction Pool Success");
//     };
//     connection.release();

// });

app.get("/connection_pool/test", (req, res) => {
    const sql = "SELECT * FROM class4";
    try {
        mysql.getConnection((err, connection) => {
            console.log("connection_pool GET");
            if(err) throw err;
            connection.query(sql, (err, result, fields) => {
                if(err) {
                    console.error("connection_pool GET Error/ " + err);
                    res.status(500).send("message : Internal Server Error");
                }
                else {
                    if(result.length === 0) {
                        res.status(400).send({
                            success : false,
                            message : "DB respond Not Found"
                        });
                    }
                    else {
                        res.status(200).send({
                            success : true,
                            result
                        });
                    }
                }
            });
            connection.release();
        });
    } catch (err) {
        console.error("connection_pool GET Error / " + err);
        res.status(500).send("message : Interal Server Error");
    }
});

app.listen(port, host, () => {
    console.log(`Application server running at http://${host}:${port}/`);
});
