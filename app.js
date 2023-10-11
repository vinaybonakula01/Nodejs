const http=require('http');
const express=require('express');

const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
const admindata=require('./routes/admin');
const shoprouter=require('./routes/shop');

app.use(admindata.routes);
app.use(shoprouter);


app.listen(8000);