const mongoose = require('mongoose');

const  UserSchema = new  mongoose.Schema({
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


module.exports =mongoose.model("users",UserSchema);