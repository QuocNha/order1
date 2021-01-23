import dbConnect from '../../../../utils/dbConnect';
import mongoose from'mongoose';
import User from "../../../model/user";
import type { CustomerHandlers } from '..';
const addUser :CustomerHandlers['addUser'] = async ( {res,req,body}) => {
    dbConnect();
    body={
        _id:mongoose.Types.ObjectId(),
        address1:req.body.address1, 
        address2: req.body.address2,
        country: req.body.country,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        phone: req.body.phone,
        userRole: req.body.userRole,
        userType: req.body.userType,
    };
    const user = await User.create(body);
    try {
        
        user.save();
        return res.status(200).json({ data: user ?? null })
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
    

}
export default addUser