const express = require("express");
//import {registerController,loginController} from '../controllers/auth/auth-post.controller'
const {registerController,loginController} = require("../controllers/auth/auth-post.controller");
const {googleAuthController} = require("../controllers/passport/passport-controller");
const router = express.Router();
const passport = require("passport");
const { userValidationRules, validate } = require('../helpers/error/express-validator');
const {getAccessToRoute} = require('../middlewares/authorization/auth');



router.post("/register", userValidationRules(), validate,registerController);
router.post("/login", userValidationRules(), validate,loginController);
router.get("/google",passport.authenticate('google',{
    session:false,
    scope:['profile','email']
}));

router.get("/google/callback",passport.authenticate('google'),googleAuthController);
router.get("/deneme",(req,res)=>{
    res.json({msg:"hey"});
})


module.exports=router;
//export default router;