import dbConnect from '../../../../utils/dbConnect';
import mongoose from'mongoose';
import User from "../../../model/user";
import type { CustomerHandlers } from '..';
import { serialize } from 'cookie';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
const loginUser :CustomerHandlers['loginUser'] = async ( {res,req,body: { email, password1 }}) => {
    dbConnect();
    
    const user = await User.findOne({
      email
      });
    //   console.log("user",user.password)
      
      
    if (!user) {
        return res.status(400).json({
          data: null,
          errors: [{ message: 'Không tìm thấy địa chỉ mail ' + email }],
        });
    }
    // console.log("user",req.body.password)
    const isValidPassword = await bcryptjs.compare(req.body.password, user.password);
      console.log("user",isValidPassword)
      if (!isValidPassword) {
        return res.status(400).json({
          data: null,
          errors: [{ message: 'Password không hợp lệ.' }],
        });
      }
    //   const jwt = user.generateJWT()
  const token=  jwt.sign({
        email:user.email,
        id:user._id
    },process.env.NODE_ENV,{
        expiresIn:"1h"
    })
      res.setHeader('Set-Cookie', serialize('user-token', token, {
        httpOnly: true,
        maxAge: 604800, // 1 week
        secure: process.env.JWT_KEY !== 'development',
        sameSite: 'strict',
        path: '/'
      }))
      return res.status(200).json({ data: null,token:token })
}
export default loginUser;