const TestModel = require('../model/TestModel.js');
const TestService = require('../service/TestService.js');

class TestController {
    constructor() {
        
    };
};

TestController.findAll = (req, res) => {
    
    TestModel.getAll(null, (err,data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving test"
            });
        } else {
            res.status(200).send(data);
        }
    })
    
};

module.exports = TestController;