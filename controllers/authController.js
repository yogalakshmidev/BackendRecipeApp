// import user model
const User = require("../models/user");

// to hide password use bcrypt
const bcrypt = require('bcrypt');

const authController = {
  register: async (req, res) => {
    try {
      // get the details of the user from the frontend to the request body
      const { name, email, password } = req.body;

      // check if the user already exit-- check usermodel imported
      const user= await User.findOne({email});

      // if the user already exist, return an error
      if(user){
        return res.status(400).json({message:"User already exists"});
      }

      //hash the password
      const hashedPassword = await bcrypt.hash(password,10);

      // create a new user
      const newUser = new User({ name, email, password:hashedPassword});

      // save the user to the database
      await newUser.save();

      // return a success message
       res.status(201).json({ message: 'User Registered Successfully' });

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  logout: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
}
module.exports = authController;
