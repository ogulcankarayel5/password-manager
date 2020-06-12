const express = require("express");
const auth = require("./auth");
const account = require("./account")
// import express from "express";
// import auth from './auth';
const router=express.Router();


router.use("/auth",auth);
router.use("/account",account)

module.exports=router;
//export default router;
