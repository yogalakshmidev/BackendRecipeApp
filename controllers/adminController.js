// import user model
const User= require('../models/user');

const adminController={
createUser: async(req,res)=>{
  try {
    res.status(200).json({message:'Create User route for admin'});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
},
getUsers: async(req,res)=>{
  try {
  // Get all the users from the database
  const users= await User.find();

  // send the response
  res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({message:error.message});
  }
},
getUser: async(req,res)=>{
  try {
    res.status(200).json({message:'get User by id route for admin'});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
},
updateUser: async(req,res)=>{
  try {
    res.status(200).json({message:'update User route for admin'});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
},
deleteUser: async(req,res)=>{
  try {
    res.status(200).json({message:'delete User route for admin'});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}
}
module.exports=adminController;