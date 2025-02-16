const express= require('express');
const adminRouter=express.Router();
// import middleware auth for authorization
const auth= require('../middlewares/auth');
const {createUser, getUsers, getUser, updateUser, deleteUser} = require('../controllers/adminController');
// const adminController= require('../controllers/adminController');
// route:/admin/users
// adminRouter.post('/users',adminController.createUser);
adminRouter.post('/users',createUser);
adminRouter.get('/users',auth.isAuthenticated,
 auth.allowRoles(['Admin']) ,getUsers);
adminRouter.get('/users/:id',getUser);
adminRouter.put('/users/:id',updateUser);
adminRouter.put('/users/:id',deleteUser);

module.exports=adminRouter;