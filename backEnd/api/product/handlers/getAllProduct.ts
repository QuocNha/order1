import dbConnect from '../../../../utils/dbConnect';
import Product from "../../../model/product";
import mongoose from'mongoose';
import type { ProductHandlers } from '..';

const  getAllProduct :ProductHandlers['getAllProduct'] = async({req,res,body})=>{
    const updateProduct = req.body;
    let result={data:[]};
    await dbConnect(); 
        const product = await Product.find({}).sort({
            createdAt: "desc",
          });
         for(let i=0 ;i<product.length;i++){
            result.data.push(
                {
                    typeProduct:product[i].typeProduct,
                    _id:product[i]._id,
                    nameProduct:product[i].nameProduct,
                    address:product[i].address,
                    price:product[i].price,
                    createdAt:product[i].createdAt,
                    id:i
                }
            )
         }   
    try {   
    }catch(error){
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
     return res.status(200).json({
         data: result.data,
         errors: [{message: 'Get list susscess.'}],
     })
    
}
export default getAllProduct; 