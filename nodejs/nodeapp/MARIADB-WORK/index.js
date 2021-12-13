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
        // DB에 데이터를 가져오기 위해 쿼리문을 보낼 때마다 Connection을 생성하는 것이 비효율적이나 안정적
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
        connection.release();
    }
});

app.listen(port, host, () => {
    console.log(`Application server running at http://${host}:${port}/`);
});


// release end 가장 큰 차이 query 중간에 에러나면 end는 안먹음 타임아웃까지 계속 서버 돔 query를 release해줘서 query 끊어줘야 함 
// json으로 하는 경우는 하나의 오브젝트라 하나의 덩어리로 던져줄수 있는 경우고
// env는 하나하나 읽어다가 적용하므로 범용성이 크다 