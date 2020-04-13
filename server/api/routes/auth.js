const express = require("express");
//import {registerController,loginController} from '../controllers/auth/auth-post.controller'
const {registerController,loginController} = require("../controllers/auth/auth-post.controller");
const router = express.Router();

router.post("/register",registerController);
router.post("/login",loginController);


module.exports=router;
//export default router;