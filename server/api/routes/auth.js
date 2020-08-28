const express = require("express");
//import {registerController,loginController} from '../controllers/auth/auth-post.controller'
const authController = require("../controllers/auth/auth-post.controller");

const router = express.Router();
const passport = require("passport");
const { userValidationRules, validate } = require('../helpers/error/express-validator');
const limiter = require("../helpers/limiters/auth.limiter");
const authMiddleware = require('../middlewares/authorization/auth');


router.post("/token",limiter.refreshTokenLimiter,authMiddleware.getAccessToRefreshToken,authController.refreshToken)
router.post("/register",limiter.registerLimiter,userValidationRules(), validate,authController.register);
router.post("/login",limiter.loginLimiter, userValidationRules(), validate,authController.login);
router.get("/logout",authMiddleware.getAccessToRoute,authController.logout)

router.post("/google/token",limiter.registerLimiter,passport.authenticate('google-token',{scope:['profile','email','openid']}),authController.signInWithGoogle);

router.get("/google/callback",passport.authenticate('google'),authController.signInWithGoogle);
router.get("/deneme",(req,res)=>{
    res.json({msg:"hey"});
})


module.exports=router;
//export default router;