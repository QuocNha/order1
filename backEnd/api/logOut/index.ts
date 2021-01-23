import  createApiHandler, {
    CheckeeApiHandler,
    CheckeeHandler,
} from '../../../utils/create-api-handler';
import logOutUser from './handlers/logOutUser';
export type CustomerHandlers = {
    logOutUser
}
const logOutAPI = async( req,
    res,
    handlers) =>{
        try{
            const redirectTo = 1 || req.query.redirect_to;
            console.log("redirectTo",redirectTo)
            const body = typeof redirectTo === 'string' ? { redirectTo } : {}
            return await handlers["logOutUser"]({req,res,body})
        }catch(error){
            console.error(error);
            res.status(500).json({ data: null, errors: [{ message: error.message }], })
        }


}
export const handlers = { logOutUser/* , addEmployee */ }

export default createApiHandler(logOutAPI, handlers, {})