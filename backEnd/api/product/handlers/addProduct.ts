import dbConnect from '../../../../utils/dbConnect';
import Product from "../../../model/product";
import mongoose from'mongoose';
import type { ProductHandlers } from '..';

const  addProduct :ProductHandlers['addProduct'] = async({req,res,body})=>{
    const updateProduct = req.body;
  
    let result={data:[]};
    await dbConnect(); 
    
    console.log("updateProduct",body)
    console.log("updateProduct",res.body)
        body={
            _id:mongoose.Types.ObjectId(),
            nameProduct:updateProduct.nameProduct,
            address:updateProduct.address,
            price:updateProduct.price,
            typeProduct:updateProduct.Eat,
            count:updateProduct.count,
            createById:updateProduct.createById,
        }
        // console.log("body",body)
        const product= await Product.create(body);
    try {
        
         product.save();
    }catch(error){
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
    
    result.data = product;
    // console.log("product11111111111",result.data)
    // console.log("product11111111111",res)
     return res.status(200).json({
         data: ({ data:res.data ?? null }),
         errors: [{message: 'Tạo thành công.'}],
     })
    
}
export default addProduct; 