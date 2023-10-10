const http=require('http');
const express=require('express');

const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
const adminrouter=require('./routes/admin');
const shoprouter=require('./routes/shop');

app.use(adminrouter);
app.use(shoprouter);

app.use((req,res,next)=>{
   res.send('page not found')
 
})

app.listen(8000);