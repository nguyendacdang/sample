const mysql = require('mysql');
const mysqlconfig = require("../configapp.json").mysql;

var connection = mysql.createConnection(mysqlconfig);

module.exports.connection = connection;