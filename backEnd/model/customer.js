var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
   name:String,
   email:String,
   password:String,
   phone:Number,
   _enabled:Boolean
});
module.exports = mongoose.model('customer', customerSchema);