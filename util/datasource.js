const mysql = require('mysql');
const log = require("logging");
const StringBuilder = require("../util/StringBuilder.js");
const mysqlconfig = require("../configapp.json").mysql;
const { JSON } = require('mysql/lib/protocol/constants/types');
const Query = require('mysql/lib/protocol/sequences/Query');

var pool = mysql.createPool({
    connectionLimit:10,
    connectTimeout:1000,
    host:"localhost",
    port:3306,
    user:"dangnd",
    password:"123456",
    database:"db_test"
});

var connection = mysql.createConnection(mysqlconfig)

function executeQuery(sqlQuery) {
    return new Promise((resolve,reject) => {
        connection.connect();
        connection.query(sqlQuery, (err,rs,f) => {
            if (err) {
                reject(err);
            }
            resolve(rs);
        });
        connection.end();
    })
}

function getAll(tableName) {
    
    return new Promise(function(resolve, reject) {
    
        let sql = new StringBuilder().append("SELECT ")
            .append("* ")
            .append("FROM ")
            .append(tableName)
            .build();
        connection.connect();
        connection.query(sql,(err,rs,fields) => {
            if (err) {
                reject(err);
            }
            resolve(rs);
        });
        // query.start();
        // result = query.OkPacket
        
        connection.end();
    });
    
}




// module.exports = {
//     // getAll = getAll,
//     executeQuery = executeQuery
// };
module.exports.executeQuery = executeQuery;