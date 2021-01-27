import mongoose ,{ Document, Model } from "mongoose";
export interface ProductDocument extends  Document {
  nameProduct:String,
  address:String,
  price:number,
  typeProduct:String,
  count:String,
  createById:String,
  _id:mongoose.Schema.Types.ObjectId,  
}

// Khách hàng
export interface CustomerDocument extends  Document{
  taxCode: number;
  bank: string;
  fax: number;
  certificate_image: string;
  account_number: number;
  
}

// Đối tượng tham gia vào chuỗi cũng ứng
export interface ParticipantDocument extends  Document{
  code: string;
  participantName: string;
  participantType: string;
}
const productSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    nameProduct: {
		type: String,
		// required: [true, "Product is required!"],
		maxlength: [60, 'Product cannot be more than 60 characters'],
		trim: true,
    },
    address: {
		type: String,
		maxlength: [200, 'address cannot be more than 200 characters'],
		trim: true,
    },
    price: {
		type: Number,
    },
    createdAt: { type: Date, default: Date.now },
    typeProduct:{
        type: String,
        enum: ['Eat', 'Drink'],
        default: 'Eat'
    },
    createById:{
      type:String  
    },
    count:{
      type: Number
    }


});

const Product : Model<ProductDocument |any> = mongoose.models.product || mongoose.model<ProductDocument>("Product",productSchema);

export default Product;