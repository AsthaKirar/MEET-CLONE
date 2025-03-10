import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
    trim: true,
    lowercase: true,
    minLength: [3, "Username must be at least 3 character"],
    maxLength: [15, "Username must be at most 50 character"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
    trim: true,
    lowercase: true,
    minLength: [6, "Username must be at least 6 character"],
    maxLength: [40, "Username must be at most 20 character"],
  },

  // profileImage:{
  //     type: String,
  //     default:"https://media.istockphoto.com/id/2041572395/vector/blank-avatar-photo-placeholder-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=wSuiu-si33m-eiwGhXiX_5DvKQDHNS--CBLcyuy68n0=",
  // },

  password: {
    type: String,
  },
});

userSchema.statics.hashPassword = async function (password) {
  if (!password) {
    throw new Error("Password is required");
  }

  console.log(password, "Password to hash");

  return bcrypt.hash(password, 10); // Hash password with a salt rounds of 10
};
// userSchema.methode.comparePassword = async function (password){
//     if(!password){
//         throw new Error("password is required");
//     }

//     if(!this.password){
//         throw new Error("password is required");
//     }
//     return  bcrypt.compare(password, this.password);

// }

// userSchema.methodes.generateToken = function(){

// const token =
//     jwt.sign
//     (
//         {_id: this._id,
//         username: this.username,
//         email: this.email,
//      },
//         config.JWT_SECRET,
//     {
//         expiresIn: config.JWT_EXPIRES_IN,
//     }
//     );
//     return token;
// }

userSchema.methods.comparePassword = async function (password) {
  if (!password) {
    throw new Error("Password is required");
  }

  if (!this.password) {
    throw new Error("User password is missing");
  }

  return await bcrypt.compare(password, this.password);
};

// Fix 2: Use `methods` instead of `methodes`
userSchema.methods.generateToken = function () {
  return jwt.sign(
    { _id: this._id, username: this.username, email: this.email },
    config.JWT_SECRET,
    { expiresIn: config.JWT_EXPIRES_IN }
  );
};
userSchema.statics.verifyToken = function (token) {
  if (!token) {
    throw new Error("Token is required");
  }
  return jwt.verify(token, config.JWT_SECRET);
};
const userModel = mongoose.model("user", userSchema);

export default userModel;
