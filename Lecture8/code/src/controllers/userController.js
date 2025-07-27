import bcrypt from 'bcrypt';
import pool from '../db/index.js';
export const  registerUser= async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        const hashedPassword=await bcrypt.hash(password,10);
        const userData=await pool.query("INSERT INTO register(name,email,password) VALUES($1,$2,$3) RETURNING *",[name,email,hashedPassword]);
        res.status(201).json({message:"User registered successfully",data:userData.rows});
        console.log(hashedPassword)
    } catch (error) {
        res.status(500).json({ error: 'Registration failed',detail:error.message });
    }
}