const express=require('express');
const router=express.Router();
const path=require('path')

const admindata=require('./admin')
router.get('/',(req,res,next)=>{
    console.log(admindata.product)
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
})
module.exports=router