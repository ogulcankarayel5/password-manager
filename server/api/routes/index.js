const express = require("express");
const auth = require("./auth");
// import express from "express";
// import auth from './auth';
const router=express.Router();


router.use("/auth",auth);

module.exports=router;
//export default router;
