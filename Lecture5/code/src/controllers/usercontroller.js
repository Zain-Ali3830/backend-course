import User from "../model/usermodel.js";

export const registerUser = async (req, res) => {
 try {
     const {name,email,password} = req.body;
    res.status(201).json({message:"User registered successfully"});
 } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
 }
};
