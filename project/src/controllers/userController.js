import pool from "../db/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET=process.env.SECRET
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }
    const userData = await pool.query(
      "INSERT INTO users(username,email,password) VALUES($1,$2,$3) RETURNING *",
      [username, email, hashedPassword]
    );
    res
      .status(201)
      .json({ message: "User registered successfully", data: userData.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};




export const login=async (req,res)=>{
    const{email,password}=req.body;
    try{
        const userData=await pool.query("SELECT * FROM users WHERE email=$1",[email]);
        if(userData.rows.length===0){
            return res.status(400).json({message:"User not found"});
        }
        const user=userData.rows[0];
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token=jwt.sign({userId:user.id},SECRET,{expiresIn:"1h"});
        res.status(200).json({message:"Login successful",token,data:user});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Something went wrong"});
    }
}