const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name :{
    type: String,
    required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password:{
        type: String,
        required: true,
      },
      role:{
        type:String,
        default:'user',
        enum:['user','admin'],
      },
      profilePicture:{
        type: String,
        default : '',
      },
      Authors:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
      },
           
},{timestamps : true});
module.exports =mongoose.model('User',userSchema,'users');