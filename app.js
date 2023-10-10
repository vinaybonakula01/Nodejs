const http=require('http');
const express=require('express');
const app=express();
app.use('/product',(req,res,next)=>{
    res.send('hello guys');
})
app.use('/',(req,res,next)=>{
    res.send('hello');
})

app.listen(8000);