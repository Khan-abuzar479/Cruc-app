import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: treu
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: treu
  },
  password: {
    type: String,
    required: true,
  },
},
  {timestamps:true}
);
export const User=mongoose.model("User",userSchema)