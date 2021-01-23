import dbConnect from '../../../../utils/dbConnect';
import mongoose from'mongoose';
import User from "../../../model/user";
import type { CustomerHandlers } from '..';
import bcryptjs from 'bcryptjs';
const addUser :CustomerHandlers['addUser'] = async ( {res,req,body}) => {
    dbConnect();
    const repass = bcryptjs.hashSync(req.body.password, 10);; 
    
    body={
        _id:mongoose.Types.ObjectId(),
        address1:req.body.address1, 
        address2: req.body.address2,
        country: req.body.country,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: repass,
        phone: req.body.phone,
        userRole: req.body.userRole,
        userType: req.body.userType,
    };
    console.log("body",body)
    const user = await User.create(body);
    try {
        await user.save()  
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
    
    return res.status(200).json({ data:user ?? null })

}
export default addUser;