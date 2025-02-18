const User= require('../models/user');

const profileController = {
setProfilePicture : async (req,res) => {
  try {
   if(!req.file){
    return res.status(400).json({message:"No file uploaded"});
   }
   const userId=req.userId;
   const profilePicture = req.file.path;
  
   //  update the user's profile in the database
   const user = await User.findByIdAndUpdate(userId,{profilePicture},{ new: true});

  //  success response
  res.status(200).json({message: 'profile picture updated'});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}
}
module.exports = profileController;