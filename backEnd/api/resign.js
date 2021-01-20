const express = require('express');
const router =express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');

// router.post('/',(rep,res,next)=>{
//     const user = new User({
//         firstName:rep.body.firstName,
//         lastName:rep.body.lastName,
//         email:rep.body.email
//     });
//     try {
//         const body = JSON.parse(req.body.curl);
    
//         switch (body.method) {
//           case 'GET':
//             this.handleGETRequest();
//           case 'POST':
//             this.handlePOSTRequest();
//           default:
//             this.handleDefault();
//         }
//       } catch (err) {
//         res.send({ msg: 'invalid command', error: err });
//       }
 
//     user
//     .save()
//     .then(
//         result =>{
//             console.log(result);
//             res.status(201).json(result,body);
//         }
//     )
//     .catch(err =>{
//         console.log(err);
//         res.status(500).json({
//             erro:err
//         })
//     });
// })
router.post('/',(rep,res,next)=>{
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
})
module.exports =router;