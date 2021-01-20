const express = require('express');
const router =express.Router();
const Product = require('../model/product');
const mongoose = require('mongoose');
const config= require('config');
const { Console } = require('console');
const { render } = require('node-sass');
const db = config.get('mongoURI');


// router.get('/',(rep,res)=>res.send('Use route'));

router.post('/addUser',(rep,res,next)=>{
       const product = new Product({
            _id:mongoose.Types.ObjectId(),
            name:rep.body.name,
            price:rep.body.price
       });
       product
       .save()
       .then(
           result =>{
               console.log(result);
               res.status(201).json(result);
           }
       )
       .catch(err =>{
           console.log(err);
           res.status(500).json({
               erro:err
           })
       });
})
router.post('/',(rep,res,next)=>{
    let array= [];
    mongoose.connect(db,function(erre,db){
        const user = db.collection('users').find({});
        console.log("array11111",user)
        user.forEach(function(doc,errr){
            array.push(doc);
            console.log("Array",array)
        },function(){
            db.close();
            
        })
    });

   
    const product =  new Product({
        _id:new mongoose.Types.ObjectId(),
        array:rep.body.name,
       
    });
    product.save().then(result =>{
        // console.log(result);
    })
    .catch(erro=> console.log(erro));
    res.status(200).json({
        message:"Thanh công post",
        product:product
    })
   

});
module.exports =router;
