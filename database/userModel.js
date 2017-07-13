var mongoose = require('./mongoose.js');


var userSchema = new mongoose.Schema({
  name : String,
  nname: String,
  password: String,
  follow:{type:Number,default:0},
  like:{type:Number,default:0},
  following:[Object],
  question:[Object],
  response:[Object],
  focus:[String]
});

var userModel = mongoose.model('users', userSchema);
module.exports = userModel;
