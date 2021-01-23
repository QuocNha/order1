const mongoose =require('mongoose');
const config= require('config');
const db = config.get('mongoURI');
import Employee from "../../model/user";
import dbConnect from '../../../utils/dbConnect';
import  createApiHandler, {
    CheckeeApiHandler,
    CheckeeHandler,
} from '../../../utils/create-api-handler';
import addUser from './handlers/addUser';
export type CustomerHandlers = {
    addUser
}
const customersAPI = async ( req,
    res,
    handlers)=>{
		try {
			if (req.method === 'POST') {
				const body = { ...req.body }
				return await handlers['addUser']({ req, res, /* config, */ body })
			}
		} catch (error) {
			console.error(error)
			res.status(500).json({ data: null, errors: [{ message: error.message }], })
		}
	}

export const handlers = { addUser/* , addEmployee */ }

export default createApiHandler(customersAPI, handlers, {})
