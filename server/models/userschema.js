const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userdata = new Schema({
   username:String,
   usermobilenum:String,
   usermail:String,
   userpassword:String,
   salt:String
  
}); 
// 1st argument is collection name 2nd arrgument is model or schema name.
// by default mongoose add 's' to the collection name end.
module.exports = mongoose.model('userdata',Userdata);