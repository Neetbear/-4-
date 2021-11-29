const mysql = require('mysql');
const config = require('./appconfig.json');

module.exports = mysql.createPool(config);
// createPool로 dbconfig.json가지고 하는 connection