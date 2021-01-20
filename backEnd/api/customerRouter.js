const express = require('express');
const router =express.Router();
const customer = require('../model/customer');
const mongoose = require('mongoose');

router.post('/',(rep,res,next)=>{
    const customer = new customer({
        
        name:rep.body.name,
     email:rep.body.email,
    password:rep.body.password,
     phone:rep.body.phone,
   _enabled:rep.body._enabled
    });
    try {
        const body = JSON.parse(req.body.curl);
    
        switch (body.method) {
          case 'GET':
            this.handleGETRequest();
          case 'POST':
            this.handlePOSTRequest();
          default:
            this.handleDefault();
        }
      } catch (err) {
        res.send({ msg: 'invalid command', error: err });
      }
 
    user
    .save()
    .then(
        result =>{
            console.log(result);
            res.status(201).json(result,body);
        }
    )
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            erro:err
        })
    });
})
router.get('/',(rep,res,next)=>{
    User.find()
    .exec()
    .then(
        result =>{
            console.log(result);
            res.status(200).json(result);
        }
    )
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            erro:err
        })
    });
    return   res.json({result});
})
module.exports =router;