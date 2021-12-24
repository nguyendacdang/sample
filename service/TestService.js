const TestModel = require('../model/TestModel.js');

class TestService {
    constructor() {
        
    };
};

TestService.findAll = () => {
    
    return new Promise( (resolve , reject) => {
      TestModel.getAll(null, (err,data) => {
          if (err) {
              reject = err;
          } else {
              resolve = data;
          }
      })  
    });
};

module.exports = TestService;
