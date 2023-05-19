const express = require('express');
const bodyParser = require('body-parser'); 
// const route = require('./routes/route');
const multer=require('multer')
const app = express();
const connectDatabase = require('./config/database')
app.use(bodyParser.json());
app.use(multer().any())
app.use(bodyParser.urlencoded({ extended: true }));




// app.use('/', route);


app.listen(process.env.PORT || 3001,function () { 
    console.log('express app started on the port ' + (process.env.PORT || 3001))});