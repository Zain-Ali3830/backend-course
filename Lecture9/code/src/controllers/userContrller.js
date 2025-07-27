import pool from "../db/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.SECRET;
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(req.body);
    const userData = await pool.query(
      'INSERT INTO "user"(name,email,password) VALUES($1,$2,$3) RETURNING *',
      [name, email, hashedPassword]
    );
    res
      .status(201)
      .json({ message: "User registered successfully", data: userData.rows });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Registration failed", detail: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const result = await pool.query('SELECT * FROM "user" WHERE email = $1', [
      email,
    ]);
    if (result.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token, data: user });
  } catch (error) {
    res.status(500).json({ error: "Login failed", detail: error.message });
  }
};
