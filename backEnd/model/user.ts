import mongoose ,{ Document, Model } from "mongoose";
import jwt from "jsonwebtoken";
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
const  UserSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstName: {
		type: String,
		required: [true, "Name is required!"],
		maxlength: [30, 'Name cannot be more than 60 characters'],
		trim: true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required: [true, "Email is required!"],
        trim:true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Your password is required'],
        max: 100
    },
    address1:{
        type:String
    },
    address2:{
        type:String
    },
    phone:{
        type:String
    },
    country:{
        type:String
    },
    userType: {
        type: String,
        enum: ['SuperAdmin', 'Normal'],
        default: 'Normal'
      },
  
    userRole: {
        type: String,
        enum: ['SuperAdmin', 'Owner'],
        default: 'SuperAdmin'
    },

});
export type PayloadJWT = {
    id: string
    email: string
    userType: string
    userRole: string
}
UserSchema.methods.generateJWT = function (this: UserDocument) {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate());

    let payload : PayloadJWT = {
        id: this._id,
        email: this.email,
        userType: this.userType,
        userRole: this.userRole
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '12h' //expires in 
    });
};
// function generatePasswordHash(password) {
//     return bcrypt.genSalt(10) // 10 is default
//     .then((salt) => {
//       return bcrypt.hash(password, salt);
//     })
//     .then(hash => {
//       return Promise.resolve(hash);
//     });
// };
// UserSchema.methods.beforeCreate = function (values, next) {
//     generatePasswordHash(values.password)
//             .then(hash => {
//                 delete(values.password);
//                 values.encryptedPassword = hash;
//                 next();
//             })
//             .catch(err => {
//                 /* istanbul ignore next */
//                 next(err);
//             });
// };
const User : Model<UserDocument | CustomerDocument | ParticipantDocument | any> = mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);
export default User;