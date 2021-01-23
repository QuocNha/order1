const mongoose =require('mongoose');
const config= require('config');
const db = config.get('mongoURI');
import Employee from "../../model/user";
import dbConnect from '../../../utils/dbConnect';
import  createApiHandler, {
    CheckeeApiHandler,
    CheckeeHandler,
} from '../../../utils/create-api-handler';
import loginUser from './handlers/loginUser';
export type CustomerHandlers = {
    loginUser
}
const loginAPI = async ( req,
    res,
    handlers)=>{
		try {
			if (req.method === 'POST') {
                const body = { ...req.body }
                console.log("req.body",req.body)
				return await handlers['loginUser']({ req, res, /* config, */ body })
			}
		} catch (error) {
			console.error(error)
			res.status(500).json({ data: null, errors: [{ message: error.message }], })
		}
	}

export const handlers = { loginUser/* , addEmployee */ }

export default createApiHandler(loginAPI, handlers, {})
