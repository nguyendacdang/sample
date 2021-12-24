const res = require('express/lib/response');
const sql = require('../config/mysql.config.js');

const TestModel = function(testModel) {
    this.content = testModel.content;
};

TestModel.getAll = (id,result) => {
    let queryStm = "SELECT * FROM tb_test";
    
    sql.connection.query(queryStm, (err,rs) => {
        if (err) {
            console.log(err);
            result(null,err);
            return;
        }
        
        console.log("Test model = " ,rs);
        result(null,rs);
    });  
};

module.exports = TestModel;