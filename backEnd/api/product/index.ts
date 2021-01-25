import  createApiHandler, {
    CheckeeApiHandler,
    CheckeeHandler,
} from '../../../utils/create-api-handler';
import addProduct from './handlers/addProduct';
import getAllProduct from './handlers/getAllProduct';

export type ProductHandlers = {
    addProduct,getAllProduct
}
const productAPI = async (req,res,handlers)=>{
    try{
        if (req.method === 'POST') {
            const body = { ...req.body }
            return await handlers['addProduct']({ req, res, /* config, */ body })
        }
        if (req.method === 'GET') {
            const body = { ...req.body }
            console.log("req.body",req.body);
            console.log("req.res",res)
            return await handlers['getAllProduct']({ req, res, /* config, */ body })   
        }
        
    }catch(error){
        console.error(error)
        res.status(500).json({ data: null, errors: [{ message: error.message }], })
    }
}
export const handlers = { addProduct,getAllProduct/* , addEmployee */ }

export default createApiHandler(productAPI, handlers, {})    
