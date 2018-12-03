const express =require('express');
const MongoCline =require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const routes='./app/routes';

const app=express();

const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));
require(routes)(app, {});

app.listen(port,()=>{
console.log('your server is running on port: '+ port);
});