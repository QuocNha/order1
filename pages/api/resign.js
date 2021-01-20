
import Employee from "../../backEnd/model/customer";
const  connectDB =  async()=>{
    try{
      console.log("Vao roi")
        await mongoose.connect(db,{useUnifiedTopology: true,useNewUrlParser: true});
      console.log("MongoDb connect");
    }catch(error){
        console.error(error.message);
        // exit connect when error
        process.exit(1);
    }
}
export default async (req, res) => {
	const { method } = req;

	 connectDB()

	switch (method) {
		case "GET":
			try {
				const employees = await Employee.find({}).sort({
					createdAt: "desc",
                });

				return res.status(200).json({
                    success: true,
                    data: employees,
				});
			} catch (error) {
				return res.status(400).json({
                    success: false,
                    message: error.message,
				});
			}
		case "POST":
			try {
				const employees = await Employee.create(req.body);
				return res.status(201).json({
					success: true,
					data: employees,
				});
			} catch (error) {
				return res.status(400).json({
                    success: false,
                    message: error.message,
				});
			}
		default:
			res.setHeaders("Allow", ["GET", "POST"]);
			return res
				.status(405)
				.json({ success: false })
				.end(`Method ${method} Not Allowed`);
	}
};