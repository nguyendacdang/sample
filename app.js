const express = require('express');
const TestController = require('./controller/TestController.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", TestController.findAll);

app.listen(3000);