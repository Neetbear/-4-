const mysql = require('mysql');
const config = require('./dbconfig.json');

module.exports = mysql.createPool(config);
// createPool로 dbconfig.json가지고 하는 connection