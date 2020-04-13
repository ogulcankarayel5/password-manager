// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    minlength: [4, "Please provide a password with min length 6"],
    required: [true, "Please provide a password"],
    //bilgileri çektiğimiz zaman password görünmeyecek
    select: false,
  },
});

UserSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) next(err);
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) next(err);
        this.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

UserSchema.methods.generateJwtFromUser = function () {
  const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

  const payload = {
    id: this._id,
    name: this.name,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE,
  });

  return token;
};

module.exports=mongoose.model("User", UserSchema);

//export default mongoose.model("User", UserSchema);
