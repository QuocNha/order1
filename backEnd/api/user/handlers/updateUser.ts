import type { CustomerHandlers } from '..';
import dbConnect from '../../../../utils/dbConnect';
import User from "../../../model/user";
const updateUser: CustomerHandlers['updateUser'] = async ({
    res,
    req,
    body,
    // config,
  }) => {
    const update = req.body;
    let result={data:[]};
    try {
        await dbConnect();
        // console.log("Qua handlers update");
        // console.log("update.email",req.body)
        const _user = await User.findOneAndUpdate({
            email: update.email,
        }, update,{new: true});
        result.data = _user;
        console.log("user",_user)
    }catch(error){
        return res.status(400).json({
            data: null,
            errors: [{message: error.message}],
          });
    }
    return res.status(200).json({
        data: result.data,
        errors: [{message: 'Cập nhật thành công.'}],    });    
  }
  
export default updateUser