const express = require("express");
const accountController = require("../controllers/user/account.controller");
const {getAccessToRoute} = require('../middlewares/authorization/auth');
const router = express.Router();





router.get("/",getAccessToRoute,accountController.getCurrentUser)
module.exports=router;