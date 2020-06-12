const express = require("express");
//import {registerController,loginController} from '../controllers/auth/auth-post.controller'
const authController = require("../controllers/auth/auth-post.controller");

const router = express.Router();
const passport = require("passport");
const { userValidationRules, validate } = require('../helpers/error/express-validator');
const authMiddleware = require('../middlewares/authorization/auth');


router.post("/token",authMiddleware.getAccessToRefreshToken,authController.refreshToken)
router.post("/register", userValidationRules(), validate,authController.register);
router.post("/login", userValidationRules(), validate,authController.login);
router.get("/google",passport.authenticate('google',{
    session:false,
    scope:['profile','email'],
    accessType: 'offline',
    
    
    
}));

router.get("/google/callback",passport.authenticate('google'),authController.signInWithGoogle);
router.get("/deneme",(req,res)=>{
    res.json({msg:"hey"});
})


module.exports=router;
//export default router;