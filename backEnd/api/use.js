const express = require('express');
const router =express.Router();
const Product = require('../model/product');
const mongoose = require('mongoose');
// router.get('/',(rep,res)=>res.send('Use route'));
router.get('/',(rep,res,next)=>{
        res.status(200).json({
            message:"Thanh công"
        })
})
router.post('/',(rep,res,next)=>{
    
    const product =  new Product({
        _id:new mongoose.Types.ObjectId(),
        name:rep.body.name,
       
    });
    product.save().then(result =>{
        console.log(result);
    })
    .catch(erro=> console.log(erro));
    res.status(200).json({
        message:"Thanh công post",
        product:product
    })
   

});
module.exports =router;
