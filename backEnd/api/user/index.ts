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
import updateUser from './handlers/updateUser';
export type CustomerHandlers = {
    loginUser,updateUser
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
			if (req.method === 'PUT') {
                const body = { ...req.body }
                console.log("req.body updateUser",req.body)
				return await handlers['updateUser']({ req, res, /* config, */ body })
			}
		} catch (error) {
			console.error(error)
			res.status(500).json({ data: null, errors: [{ message: error.message }], })
		}
	}

export const handlers = { loginUser,updateUser/* , addEmployee */ }

export default createApiHandler(loginAPI, handlers, {})
