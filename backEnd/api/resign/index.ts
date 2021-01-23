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
// export default async (req, res) => {
// 	const { method } = req;

// 	dbConnect()

// 	switch (method) {
// 		case "GET":
// 			try {
// 				const employees = await Employee.find({}).sort({
// 					createdAt: "desc",
//                 });

// 				return res.status(200).json({
//                     success: true,
//                     data: employees,
// 				});
// 			} catch (error) {
// 				return res.status(400).json({
//                     success: false,
//                     message: error.message,
// 				});
// 			}
// 		case "POST":
// 			try {
// 				// req.body=[..._id];
// 				req.body={
// 					_id:mongoose.Types.ObjectId(),
// 					address1:req.body.address1, 
// 					address2: req.body.address2,
// 					country: req.body.country,
// 					email: req.body.email,
// 					firstName: req.body.firstName,
// 					lastName: req.body.lastName,
// 					password: req.body.password,
// 					phone: req.body.phone,
// 					userRole: req.body.userRole,
// 					userType: req.body.userType,
// 				};
// 				console.log("employees",req.body)
// 				const employees = await Employee.create(req.body);
// 				console.log("employees",employees)
// 				employees.save();
				
// 				return res.status(201).json({
// 					success: true,
// 					data: employees,
// 				});

				
// 			} catch (error) {
// 				return res.status(400).json({
//                     success: false,
//                     message: error.message,
// 				});
// 			}
			
// 		default:
// 			res.setHeaders("Allow", ["GET", "POST"]);
// 			return res
// 				.status(405)
// 				.json({ success: false })
// 				.end(`Method ${method} Not Allowed`);
// 	}
// };


export type CustomerHandlers = {
    addUser
}
const customersAPI = async ( req,
    res,
    handlers)=>{
		try {
			if (req.method === 'POST') {
				console.log("aaaaaaaaaaaa");
				console.log("aaaaaaaaaaaa",req.body);
				
				const body = { ...req.body }
				console.log("body",body)
				return await handlers['addUser']({ req, res, /* config, */ body })
			}
		} catch (error) {
			console.error(error)
			res.status(500).json({ data: null, errors: [{ message: error.message }], })
		}
	}

export const handlers = { addUser/* , addEmployee */ }

export default createApiHandler(customersAPI, handlers, {})
