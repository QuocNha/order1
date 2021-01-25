import mongoose ,{ Document, Model } from "mongoose";
export interface UserDocument extends  Document {
  id: string
  email: string
  userType: string
  userRole: string
  fullName: string;
  token: string;
  comparePassword(password: string): Promise<boolean>;
  generateJWT(): string;
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
		required: [true, "Product is required!"],
		maxlength: [30, 'Product cannot be more than 60 characters'],
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
    }

});
const Product : Model<UserDocument | CustomerDocument | ParticipantDocument | any> = mongoose.models.product || mongoose.model<UserDocument>("Product",productSchema);

export default Product;