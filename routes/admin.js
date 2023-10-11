const express=require('express');
const router=express.Router();
const path=require('path');
const product=[];

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})
router.post('/add-product',(req,res)=>{
    product.push({title: req.body.title})
   
    res.redirect('/')
})

exports.routes=router
exports.product=product