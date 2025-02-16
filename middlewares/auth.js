// to verify token, we need to import jwt library
const jwt = require('jsonwebtoken');
require('dotenv').config();
// It contains authentication and authorization middleware
const auth = {
  // middleware to check if the user is authenticated
  isAuthenticated: async (req, res, next) => {
    // to check whether it has token and then check it is valid token
    // get the token from the cookies for httponly method
// { const token = req.cookies.token;}

    // to get token from the authorization header
    const token = req.headers.authorization.split(' ')[1];

    // console.log(token);
    // send an error if the token is not present
    if(!token){
      return res.status(500).json({message:'Unauthorized'});
    }

    // verify the token
    try {
      const decoded= await jwt.verify(token,process.env.JWT_SECRET);
      req.userId = decoded.userId;
      
    } catch (error) {
      return res.status(500).json({message:'Unauthorized'});
    }
    

    // next middleware called
    next();
  }
}
module.exports= auth;