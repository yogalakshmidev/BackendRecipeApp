const mongoose = require('mongoose');

// import dotenv
require('dotenv').config();
// import app
// const app = require('./app');

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("Connected to MongoDB");
  // app.listen(3001,()=>{
  //   console.log("Server started on  http://localhost:3001");
  // })
})
.catch(err=>{
  console.log("Error in the MongoDB server",err);
})